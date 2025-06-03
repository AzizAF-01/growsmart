class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupLogout();
        this.preventAnchorNavigation();
    }

    render() {
        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");

        this.innerHTML = `
        <header class="fixed top-0 left-0 w-full bg-white z-50">
            <div id="drawer-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-100 hidden md:hidden"></div>
            <div class="main-header container mx-auto px-4 py-3 flex items-center justify-between">
            
                <!-- Brand & Logo -->
                <a class="brand-name flex items-center space-x-2" href="#/">
                <img src="/images/growsmart.webp" alt="GrowSmart Logo" class="h-24 w-auto" />
                </a>

                <button id="drawer-button" class="drawer-button md:hidden text-2xl px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-10 w-10 fill-current text-gray-800">
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>

                <!-- Navigation Drawer -->
                <nav id="navigation-drawer" class="navigation-drawer fixed top-0 left-0 h-full w-64 bg-white -translate-x-full md:relative md:top-auto md:left-auto md:h-auto md:w-auto md:bg-transparent md:translate-x-0 md:flex md:flex-row md:items-center pr-6 md:space-x-8 text-gray-800 font-medium transition-transform duration-300 z-40 flex-col">
                    <ul id="nav-list" class="nav-list flex flex-col md:flex-row max-sm:px-4 max-sm:py-4 space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
                        <li><a href="#cek-stunting" class="hover:text-green-600">Cek Stunting</a></li>
                        <li><a href="#tentang-kami" class="hover:text-green-600">Tentang Kami</a></li>
                        <li><a href="#artikel" class="hover:text-green-600">Artikel</a></li>
                    </ul>

                    <!-- Login / Logout (moved into drawer) -->
                    <div class="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 max-sm:px-4">
                        ${token ? `
                        <span class="text-gray-700 font-medium">${name}</span>
                        <button id="logout-btn" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold">
                            Logout
                        </button>
                        ` : `
                        <a href="#/login" class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold">
                            Login
                        </a>
                        `}
                    </div>
                </nav>
            </div>
    </header>
    `;
    }


    setupLogout() {
        const logoutBtn = this.querySelector("#logout-btn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                localStorage.removeItem("token");
                localStorage.removeItem("name");
                location.reload();
            });
        }
    }

    get drawerButton() {
        return this.querySelector('#drawer-button');
    }

    get navigationDrawer() {
        return this.querySelector('#navigation-drawer');
    }

    preventAnchorNavigation() {
        const navLinks = this.querySelectorAll('#nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const targetHash = link.getAttribute('href');
                const currentPage = location.hash || '#/';

                if (currentPage !== '#/' && !document.querySelector(targetHash)) {
                    localStorage.setItem('scrollTarget', targetHash);
                    location.hash = '#/';
                } else {
                    const targetElement = document.querySelector(targetHash);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

}

customElements.define("nav-bar", NavBar);