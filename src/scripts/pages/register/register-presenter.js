import RegisterModel from './register-model';

export default class RegisterPresenter {
    constructor(view) {
        this.view = view;
        this.model = new RegisterModel();
    }

    async handleRegisterSubmit(formData) {
        try {
            const { confirmPassword, ...userData } = formData;
            const response = await this.model.registerUser(userData);
            
            this.view.showSuccess('Registrasi berhasil! Mengarahkan ke login...');
        } catch (error) {
            let errorMessage = 'Registrasi gagal';
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }
            throw new Error(errorMessage);
        }
    }
}