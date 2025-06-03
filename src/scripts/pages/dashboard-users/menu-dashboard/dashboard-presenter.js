export default class DashboardPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async loadPredictions() {
        try {
            this.view.showLoading(); // tampilkan loading sebelum fetch
            const predictions = await this.model.getFilteredPredictions();

            this.view.renderPredictions(predictions);
            const html = await this.view.render();

            const root = document.getElementById('root');
            if (root) root.innerHTML = html;
            else console.error('Element #root tidak ditemukan');
        } catch (error) {
            console.error('Gagal menampilkan data dashboard:', error.message);
        }
    }

    async loadPredictionDetailById(id) {
        const prediction = await this.model.getPredictionById(id);
        console.log(prediction)

        this.view.showAdvicePopup(prediction); 
    }

}