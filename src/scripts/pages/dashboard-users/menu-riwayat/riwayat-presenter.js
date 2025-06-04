// scripts/pages/dashboard-users/menu-riwayat/riwayat-presenter.js
import RiwayatModel from "./riwayat-model";

const RiwayatPresenter = {
    view: null,
    token: null,

    init({ view, token }) {
        this.view = view;
        this.token = token;
        this.loadHistory();
    },

    async loadHistory() {
        try {
            const result = await RiwayatModel.fetchHistory(this.token);
            const data = result.predictions || [];

            this.view.showTable(data);
        } catch (error) {
            console.error("Gagal memuat riwayat:", error);
            this.view.showError("Gagal memuat data riwayat.");
        }
    },

    async showDetail(id) {
        try {
            const detail = await RiwayatModel.fetchHistoryById(id, this.token);
            this.view.showDetailModal(detail);
        } catch (error) {
            console.error("Gagal memuat detail:", error);
            this.view.showError("Gagal memuat detail riwayat.");
        }
    },

    async confirmDelete(id) {
        try {
            await RiwayatModel.deleteHistoryById(id, this.token);
            this.loadHistory(); // Reload after delete
            this.view.hideDeleteModal();
        } catch (error) {
            console.error("Gagal menghapus riwayat:", error);
            this.view.showError("Gagal menghapus riwayat.");
        }
    },
    handleShowDetail(id) {
        this.showDetail(id);
    },

    handleShowDeleteConfirm(id) {
        this.view.confirmDelete(id);
    },

    handleDelete(id) {
        this.confirmDelete(id);
    },
    showError(message) {
        alert(message); // Bisa di-upgrade jadi toast/modal nanti
    }

};

export default RiwayatPresenter;
