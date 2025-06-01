class SidebarDashboard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <button id="sidebar-drawer-button" class="fixed top-4 left-4 z-50 p-2 bg-green-500 text-white rounded-md md:hidden">
        ☰
    </button>
    <div id="sidebar-navigation-drawer" class=" top-0 left-0 min-h-screen w-64 bg-[#D8F4D7] flex flex-col items-center py-8 px-4 shadow-lg">
        <div class="mb-12 flex flex-col items-center">
            <img src="/images/growsmart-2.webp" alt="GrowSmart Logo" class="h-24 w-full mb-4">
        </div>

        <nav class="w-full max-w-sm space-y-4">
            <button class="w-full flex items-center px-6 py-4 rounded-xl bg-white shadow-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                Dashboard
            </button>

            <button class="w-full flex items-center px-6 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
                Cek Stunting
            </button>

            <button class="w-full flex items-center px-6 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                </svg>
                Riwayat
            </button>

            <button class="w-full flex items-center px-6 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Profile
            </button>
        </nav>
    </div>
    <div id="sidebar-drawer-overlay" class="hidden fixed inset-0 bg-black opacity-50 z-40"></div>
    `;
    }

    get sideDrawerButton() {
        return this.querySelector('#sidebar-drawer-button');
    }

    get sidebarNavigationDrawer() {
        return this.querySelector('#sidebar-navigation-drawer');
    }

    get sidebarDrawerOverlay() {
        return this.querySelector('#sidebar-drawer-overlay');
    }

}

customElements.define('sidebar-dashboard', SidebarDashboard);