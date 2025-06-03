import { predictStuntingUser } from "../../../data/api.js";

const CekStuntingModel = {
    async submitPrediction({ token, gender, age, height, weight, child_id = null }) {
        return await predictStuntingUser({ token, gender, age, height, weight, child_id });
    },
};

export default CekStuntingModel;