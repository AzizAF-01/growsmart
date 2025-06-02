class NavbarDashboard extends HTMLElement {
    connectedCallback() {
        this.render();

    }

    render() {
        this.innerHTML = `
        <header class="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-40">
            <div class="max-w-screen mx-auto px-4">
                <nav class="flex items-center justify-between py-4">
                    <div class="flex items-center">
                        <button id="sidebar-drawer-button" class="p-2 bg-green-500 text-white rounded-md md:hidden">
                        ☰
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

    get sideDrawerButton() {
        return this.querySelector('#sidebar-drawer-button');
    }

}

customElements.define('navbar-dashboard', NavbarDashboard);