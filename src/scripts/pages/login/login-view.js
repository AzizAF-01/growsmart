import LoginPresenter from './login-presenter';

export default class LoginView {
    constructor() {
        this.presenter = new LoginPresenter({
            view: this
        });
    }
    async render() {
        return `
        <div class="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white rounded-[2rem] overflow-hidden">
            <!-- Left Content -->
            <div class="w-full md:w-1/2 px-8 md:px-16 py-10">
                <div class="flex max-sm:flex-col space-x-8 items-center max-w-md mx-auto text-left">
                    <div class="">
                        <h2 class="text-4xl font-bold text-black mb-4 leading-snug">
                            Masuk Untuk <br> memantau <br> pertumbuhan
                        </h2>
                        <p class="text-gray-600 text-xl">
                            Jika Anda belum memiliki akun, <br>
                            Anda dapat <a href="#/register" class="text-green-600 font-semibold hover:underline">Daftar di sini!</a>
                        </p>
                    </div>
                    <img src="/images/image2.png" alt="Ilustrasi login" class="w-[558px] h-[583px] object-contain mx-auto md:mx-0">
                </div>
            </div>

            <!-- Right Content -->
            <div class="w-full md:w-1/2 px-8 md:px-16 py-10">
            <div class="max-w-md mx-auto w-full">
                <h2 class="text-2xl font-bold text-black mb-6 text-center md:text-left">
                Selamat Datang Kembali!
                </h2>
                <form class="space-y-4">
                <input
                    type="email"
                    placeholder="Enter Email"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                    type="password"
                    placeholder="Masukkan Password"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <div class="text-right text-sm text-gray-400">
                    <a href="#" class="hover:underline">Lupa Password?</a>
                </div>
                <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg">
                    Login
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
        const form = document.querySelector('form');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = emailInput.value;
            const password = passwordInput.value;
            this.presenter.handleLoginSubmit(email, password);
        });
    }

    onLoginSuccess(response) {
        const accessToken = response.session.access_token;
        const user = response.session.user;

        const name = user.user_metadata ?.name || 'Unknown';
        const id = user.id || 'Unknown';

        sessionStorage.setItem('token', accessToken);
        sessionStorage.setItem('user', JSON.stringify({
            name
        }));
        sessionStorage.setItem('id', JSON.stringify({
            id
        }));

        window.location.href = '#/dashboard';
        window.location.reload();
    }

    onLoginFailed(message) {
        alert(`Login gagal: ${message}`);
    }
}