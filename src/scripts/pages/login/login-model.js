import { login } from '../../data/api';

export default class LoginModel {
    async loginUser(formData) {
        const payload = {
            email: formData.email,
            password: formData.password
        };

        return await login(payload);
    }
}
