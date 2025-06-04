// File: /pages/dashboard-users/menu-profile/profile-presenter.js
import ProfileModel from "./profile-model";

export default class ProfilePresenter {
  constructor({ view }) {
    this.view = view;
  }

  async loadProfile(token) {
    try {
      const user = await ProfileModel.fetchUserProfile(token);
      this.view.onLoadProfileSuccess(user);
    } catch (error) {
      this.view.onLoadProfileFailed(error.message);
    }
  }

  async updateProfile({ id, token, email, name, password }) {
    try {
      const updatedUser = await ProfileModel.updateUserProfile({
        id,
        token,
        email,
        name,
        password,
      });
      this.view.onUpdateProfileSuccess(updatedUser);
    } catch (error) {
      this.view.onUpdateProfileFailed(error.message);
    }
  }
}
