// scripts/pages/dashboard-users/menu-riwayat/riwayat-model.js
import {
    getPredictionHistory,
    getPredictionHistoryById,
    deletePredictionHistoryById,
} from "../../../data/api";

const RiwayatModel = {
    async fetchHistory(token) {
        return await getPredictionHistory(token);
    },

    async fetchHistoryById(id, token) {
        return await getPredictionHistoryById(id, token);
    },

    async deleteHistoryById(id, token) {
        return await deletePredictionHistoryById(id, token);
    },
};

export default RiwayatModel;
