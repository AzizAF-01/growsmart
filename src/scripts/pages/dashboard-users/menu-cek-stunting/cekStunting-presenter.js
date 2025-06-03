import CekStuntingModel from "./cekStunting-model.js";

const CekStuntingPresenter = {
    async check({ token, gender, age, height, weight, child_id = null }) {
        try {
            const result = await CekStuntingModel.submitPrediction({
                token,
                gender,
                age,
                height,
                weight,
                child_id,
            });

            // result = { message: 'Prediction saved', prediction: {...} }
            return result;
        } catch (error) {
            console.error("Prediction error:", error.message);
            throw error;
        }
    },
};

export default CekStuntingPresenter;