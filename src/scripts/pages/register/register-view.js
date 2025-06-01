import RegisterPresenter from './register-presenter'; // Import presenter

export default class RegisterView {
    constructor() {
        this.form = null;
        this.presenter = new RegisterPresenter(this);
    }

    async render() {
        return `
        <div class="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white rounded-[2rem] overflow-hidden">
            <!-- Left Content -->
            <div class="w-full md:w-1/2 px-8 md:px-16 py-10">
                <div class="flex max-sm:flex-col space-x-8 items-center max-w-md mx-auto text-left">
                    <div class="">
                        <h2 class="text-4xl font-bold text-black mb-4 leading-snug">
                            Daftar Untuk <br> memantau <br> pertumbuhan
                        </h2>
                        <p class="text-gray-600 text-xl">
                            Jika Anda belum memiliki akun, <br>
                            Anda dapat <a href="#/login" class="text-green-600 font-semibold hover:underline">Login di sini!</a>
                        </p>
                    </div>
                    <img src="/images/image3.png" alt="Ilustrasi login" class="w-[558px] h-[583px] object-contain mx-auto md:mx-0">
                </div>
            </div>

            <!-- Right Content -->
            <div class="w-full md:w-1/2 px-8 md:px-16 py-10">
                <div class="max-w-md mx-auto w-full">
                    <h2 class="text-2xl font-bold text-black mb-6 text-center md:text-left">
                        Selamat Datang Kembali!
                    </h2>
                    
                    <!-- Loading indicator -->
                    <div id="loading-indicator" class="hidden text-center mb-4">
                        <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
                        <span class="ml-2 text-gray-600">Mendaftarkan akun...</span>
                    </div>

                    <!-- Error message -->
                    <div id="error-message" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        <span id="error-text"></span>
                    </div>

                    <!-- Success message -->
                    <div id="success-message" class="hidden bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        <span id="success-text"></span>
                    </div>

                    <form id="register-form" class="space-y-4">
                        <!-- Username -->
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            class="w-full px-4 py-3 rounded-xl bg-[#F1F5FF] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                            minlength="3"
                        />

                        <!-- Email -->
                        <div class="relative">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                class="w-full px-4 py-3 rounded-xl bg-[#F1F5FF] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
                                required
                            />
                        </div>

                        <!-- Password -->
                        <div class="relative">
                            <input
                                name="password"
                                type="password"
                                placeholder="Masukkan Password"
                                class="w-full px-4 py-3 rounded-xl bg-[#F1F5FF] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
                                required
                                minlength="6"
                            />
                            <span class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer text-sm toggle-password" data-target="password">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 fill-current">
                                    <path
                                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                                    />
                                </svg>
                            </span>
                        </div>

                        <!-- Konfirmasi Password -->
                        <div class="relative">
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Konfirmasi Password"
                                class="w-full px-4 py-3 rounded-xl bg-[#F1F5FF] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
                                required
                                minlength="6"
                            />
                            <span class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer text-sm toggle-password" data-target="confirmPassword">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 fill-current">
                                    <path
                                        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                                    />
                                </svg>
                            </span>
                        </div>

                        <!-- Tombol Daftar -->
                        <button
                            type="submit"
                            id="submit-btn"
                            class="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Daftar
                        </button>
                    </form>

                    <div class="flex items-center my-6">
                        <hr class="flex-grow border-t border-gray-300" />
                        <span class="px-4 text-sm text-gray-500">Or continue with</span>
                        <hr class="flex-grow border-t border-gray-300" />
                    </div>
                    <button class="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center hover:bg-gray-100">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="h-5 w-5 mr-2">
                        <span class="text-sm text-gray-700 font-semibold">Google</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    }

    async afterRender() {
        this.form = document.getElementById('register-form');
        this.setupFormSubmission();
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                username: this.form.username.value.trim(),
                email: this.form.email.value.trim(),
                password: this.form.password.value,
                confirmPassword: this.form.confirmPassword.value
            };

            if (formData.password !== formData.confirmPassword) {
                this.showError('Password tidak cocok');
                return;
            }

            try {
                this.showLoading();
                await this.presenter.handleRegisterSubmit(formData);
            } catch (error) {
                this.showError(error.message || 'Registrasi gagal');
            } finally {
                this.hideLoading();
            }
        });
    }

    // Metode untuk presenter memanggil view
    showLoading() {
        document.getElementById('loading-indicator').classList.remove('hidden');
        document.getElementById('submit-btn').disabled = true;
    }

    hideLoading() {
        document.getElementById('loading-indicator').classList.add('hidden');
        document.getElementById('submit-btn').disabled = false;
    }

    showError(message) {
        const errorElement = document.getElementById('error-message');
        document.getElementById('error-text').textContent = message;
        errorElement.classList.remove('hidden');
    }

    showSuccess(message) {
        const successElement = document.getElementById('success-message');
        document.getElementById('success-text').textContent = message;
        successElement.classList.remove('hidden');
        
        setTimeout(() => {
            window.location.hash = '#/login';
        }, 2000);
    }

}