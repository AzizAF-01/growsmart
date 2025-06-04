// File: /pages/dashboard-users/menu-profile/profile-model.js
import { getProfile, updateProfile } from "../../../data/api";

const ProfileModel = {
  async fetchUserProfile(token) {
    const result = await getProfile(token);
    return result.user;
  },

  async updateUserProfile({ id, token, email, name, password }) {
    const data = { name };
    const payload = {
      id,
      token,
      email,
      ...(password && { password }),
      data,
    };

    const result = await updateProfile(payload);
    return result.user;
  },
};

export default ProfileModel;
