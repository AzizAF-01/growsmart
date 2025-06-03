import { getPredictionHistory, getPredictionById } from '../../../data/api';

export default class DashboardModel {
    async getFilteredPredictions() {
        const userSession = sessionStorage.getItem('id');

        if (!userSession) {
            throw new Error('User session tidak ditemukan di sessionStorage.');
        }

        let userId;
        try {
            userId = JSON.parse(userSession).id;
        } catch (e) {
            throw new Error('Format user session tidak valid.');
        }

        const data = await getPredictionHistory();

        const predictions = Array.isArray(data?.predictions)
            ? data.predictions
            : Array.isArray(data?.data?.predictions)
            ? data.data.predictions
            : [];

        const filtered = predictions.filter(
            prediction => String(prediction.user_id).trim() === String(userId).trim()
        );


        return filtered;
    }
    
    async getPredictionById(id) {
        const data = await getPredictionById(id);

        return data;
    }
}
