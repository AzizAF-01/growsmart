// File: /pages/dashboard-users/menu-profile/profile-view.js
import ProfilePresenter from "./profile-presenter";

export default class ProfileView {
  constructor() {
    this.presenter = new ProfilePresenter({ view: this });
    this.token = sessionStorage.getItem("token");
    this._user = null;
  }

  get user() {
    return this._user;
  }

  set user(userData) {
    this._user = userData;
    this.reRender();
  }

  async render() {
    return `
    <div id="main-content" class="bg-white h-full pt-24 pb-10 px-4 transition-all duration-300 ease-in-out">
      <div class="bg-gray-200 p-4 rounded-md m-4">
        <p class="text-xl font-semibold">Profil Pengguna</p>
      </div>

      <section class="bg-gray-200 flex flex-col rounded-md items-center justify-center md:p-6 m-4 max-sm:p-4">
        <!-- Data Profil -->
        <div class="mb-4 w-full max-w-md">
          <label class="block text-sm font-medium mb-1">Nama Lengkap</label>
          <p id="userName" class="text-gray-700 bg-white py-2 px-3 rounded"></p>
        </div>

        <div class="mb-6 w-full max-w-md">
          <label class="block text-sm font-medium mb-1">Email</label>
          <p id="userEmail" class="text-gray-700 bg-white py-2 px-3 rounded"></p>
        </div>

        <!-- Tombol Aksi -->
        <div class="flex flex-col space-y-3 w-full max-w-md">
          <button id="editBtn" class="w-full py-2 bg-green-600 text-white font-semibold rounded-lg">Edit Profile</button>
          <button id="changePasswordBtn" class="w-full py-2 border border-green-600 text-black font-semibold rounded-lg">Ubah Password</button>
        </div>

        <!-- Form Edit Profil -->
        <form id="editProfileForm" class="mt-6 hidden space-y-4 w-full max-w-md">
          <div>
            <label class="block text-sm font-medium mb-1">Nama</label>
            <input type="text" id="editName" class="w-full border px-3 py-2 rounded bg-gray-100" />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="editEmail" class="w-full border px-3 py-2 rounded bg-gray-100"/>
          </div>

          <div class="flex justify-center space-x-4">
            <button type="submit" class="px-6 py-2 bg-green-600 text-white font-semibold rounded">Submit</button>
            <button type="button" id="cancelEditBtn" class="px-6 py-2 bg-gray-300 text-black rounded">Batal</button>
          </div>
        </form>

        <!-- Form Ubah Password -->
        <form id="changePasswordForm" class="mt-6 hidden space-y-4 w-full max-w-md">
          <div>
            <label class="block text-sm font-medium mb-1">Password Baru</label>
            <input type="password" id="newPassword" class="w-full border px-3 py-2 rounded bg-gray-100" placeholder="Masukkan password baru" />
          </div>

          <div class="flex justify-center space-x-4">
            <button type="submit" class="px-6 py-2 bg-green-600 text-white font-semibold rounded">Ubah Password</button>
            <button type="button" id="cancelPasswordBtn" class="px-6 py-2 bg-gray-300 text-black rounded">Batal</button>
          </div>
        </form>
      </section>
    </div>

    `;
  }

  async afterRender() {
    if (this.token && !this.user) {
        await this.presenter.loadProfile(this.token); // Setelah ini this.user akan terisi
      }

      // Render data user (kalau sudah ada)
      if (this.user) {
        this.renderUserData();
      }

      this.bindEvents();
  }

  renderUserData() {
    const name = this.user?.user_metadata?.name || this.user?.email?.split("@")[0] || "";
    const email = this.user?.email || "";

    const nameEl = document.getElementById("userName");
    const emailEl = document.getElementById("userEmail");

    if (nameEl) nameEl.textContent = name;
    if (emailEl) emailEl.textContent = email;

    // Update value input form juga kalau mau
    const nameInput = document.getElementById("editName");
    const emailInput = document.getElementById("editEmail");
    if (nameInput) nameInput.value = name;
    if (emailInput) emailInput.value = email;
  }

  bindEvents() {
    // Toggle forms
    document.getElementById("editBtn")?.addEventListener("click", () => {
      this.toggleVisibility("editProfileForm", false);
      this.toggleVisibility("changePasswordForm", true);
    });

    document
      .getElementById("changePasswordBtn")
      ?.addEventListener("click", () => {
        this.toggleVisibility("changePasswordForm", false);
        this.toggleVisibility("editProfileForm", true);
      });

    // Cancel buttons
    document.getElementById("cancelEditBtn")?.addEventListener("click", () => {
      this.toggleVisibility("editProfileForm", true);
      this.resetEditForm();
    });

    document
      .getElementById("cancelPasswordBtn")
      ?.addEventListener("click", () => {
        this.toggleVisibility("changePasswordForm", true);
        this.resetPasswordForm();
      });

    // Submit handlers
    document
      .getElementById("editProfileForm")
      ?.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleEditProfile();
      });

    document
      .getElementById("changePasswordForm")
      ?.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleChangePassword();
      });
  }

  toggleVisibility(formId, hideOnly = false) {
    const form = document.getElementById(formId);
    if (!form) return;
    if (hideOnly) {
      form.classList.add("hidden");
    } else {
      form.classList.remove("hidden");
    }
  }

  handleEditProfile() {
    const nameInput = document.getElementById("editName").value.trim();
    const emailInput = document.getElementById("editEmail").value.trim();

    const currentName = this.user?.user_metadata?.name || "";
    const currentEmail = this.user?.email || "";

    const isChanged = nameInput !== currentName || emailInput !== currentEmail;

    if (!isChanged) {
      alert("Tidak ada perubahan data.");
      return;
    }

    const id = this.user.id;

    this.presenter.updateProfile({
      id,
      token: this.token,
      email: emailInput,
      name: nameInput,
      password: null,
    });
  }

  handleChangePassword() {
    const newPassword = document.getElementById("newPassword").value.trim();

    if (!newPassword) {
      alert("Password baru tidak boleh kosong.");
      return;
    }

    const id = this.user.id;

    this.presenter.updateProfile({
      id,
      token: this.token,
      email: this.user.email,
      name: this.user.user_metadata.name,
      password: newPassword,
    });
  }

  resetEditForm() {
    document.getElementById("editName").value =
      this.user?.user_metadata?.name || "";
    document.getElementById("editEmail").value = this.user?.email || "";
  }

  resetPasswordForm() {
    document.getElementById("newPassword").value = "";
  }

  onLoadProfileSuccess(user) {
    this.user = user;
  }

  onLoadProfileFailed(message) {
    alert(`Gagal memuat profil: ${message}`);
  }

  onUpdateProfileSuccess(updatedUser) {
    alert("✅ Profil berhasil diperbarui!");
    this.user = updatedUser;
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
  }

  onUpdateProfileFailed(message) {
    alert(`❌ Gagal memperbarui profil: ${message}`);
  }

  async reRender() {
    const container = document.querySelector("#app");
    if (container) {
      container.innerHTML = await this.render();
      await this.afterRender();
    }
  }
}
