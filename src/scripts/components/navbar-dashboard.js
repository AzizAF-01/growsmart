class NavbarDashboard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <header class="w-full bg-white shadow-md">
        <div class="max-w-screen-xl mx-auto px-4">
            <nav class="flex items-center justify-between py-4">
            <div class="flex items-center">
                <button class="text-gray-600 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                </button>
            </div>
            <div class="flex items-center space-x-2">
                <span class="text-gray-800 font-medium">Nabila</span>
                <div class="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            </nav>
        </div>
    </header>
    `;
    }

}

customElements.define('navbar-dashboard', NavbarDashboard);