import LoginModel from './login-model';

export default class LoginPresenter {
    constructor({ view }) {
        this.view = view;
        this.model = new LoginModel(); 
    }

    async handleLoginSubmit(email, password) {
        try {
            const response = await this.model.loginUser({ email, password });
            this.view.onLoginSuccess(response);
        } catch (error) {
            this.view.onLoginFailed(error.message);
        }
    }
}
