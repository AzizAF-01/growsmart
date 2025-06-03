export default class LandingPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    handleGenderChange(value) {
        this.model.setGender(value);
        this.view.updateGenderUI(value);
    }

    handleUmurIncrease() {
        this.model.increaseUmur();
        this.view.updateUmur(this.model.umur);
    }

    handleUmurDecrease() {
        this.model.decreaseUmur();
        this.view.updateUmur(this.model.umur);
    }

    handleBeratIncrease() {
        this.model.increaseBerat();
        this.view.updateBerat(this.model.berat);
    }

    handleBeratDecrease() {
        this.model.decreaseBerat();
        this.view.updateBerat(this.model.berat);
    }

    handleTinggiChange(value) {
        this.model.setTinggi(value);
        this.view.updateTinggi(this.model.tinggi);
    }

    async handleSubmit() {
        try {
            this.view.showLoading();
            const result = await this.model.predictStunting();
            this.view.hideLoading();
            this.view.onPredictionSuccess(result);
        } catch (error) {
            this.view.hideLoading();
            this.view.onPredictionError(error.message);
        }
    }

    async handleSaveBtn() {
        try {
            this.view.showLoading();
            const result = await this.model.savePredictStunting();
            this.view.hideLoading();
            this.view.savePredictionSuccess(result);
        } catch (error) {
            this.view.hideLoading();
            this.view.savePredictionError(error.message);
        }
    }
}