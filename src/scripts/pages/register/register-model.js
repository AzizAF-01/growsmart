import {
    register
} from '../../data/api';

export default class RegisterModel {
    async registerUser(formData) {
        const payload = {
            name: formData.username,
            email: formData.email,
            password: formData.password,
        };

        return await register(payload);
    }
}