class NavbarDashboard extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const userName = userData?.name || "Pengguna";
    const user = JSON.parse(sessionStorage.getItem("email"));
    const userEmail = user?.email || "Pengguna";

    this.innerHTML = `
      <header class="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-40">
        <div class="max-w-screen mx-auto px-4">
          <nav class="flex items-center justify-between py-4">
            <div class="flex items-center">
              <button id="sidebar-drawer-button" class="p-2 bg-green-500 text-white rounded-md md:hidden">
                ☰
              </button>
            </div>

            <!-- Profile Menu -->
            <div class="relative">
              <div id="profile-button" class="flex items-center space-x-2 cursor-pointer select-none">
                <span class="text-gray-800 font-medium">${userName}</span>
                <div class="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>

              <div id="profile-popup" class="hidden absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 transition-all duration-300 ease-in-out">
                <div class="p-4 border-b border-gray-100 flex items-center gap-3">
                  <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    ${userName.charAt(0).toUpperCase()}
                  </div>
                  <div class="text-sm">
                    <p class="text-gray-800 font-medium">${userName}</p>
                    <p class="text-gray-500 text-xs">${userEmail}</p>
                  </div>
                </div>
                <div class="p-4">
                  <button id="logout-button" class="w-full flex items-center gap-2 justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition duration-200 ease-in-out">
                    <svg class="w-5 h-5" fill="white" stroke="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
                    </svg>
                    Logout
                  </button>

                </div>
              </div>

            </div>
          </nav>
        </div>
      </header>
    `;
  }

  setupEventListeners() {
    
    this.sideDrawerButton.addEventListener("click", () => {
      const sidebar = document.querySelector("sidebar-dashboard");
      if (sidebar) {
        sidebar.toggleSidebar();
      }
    });

    const profileBtn = this.querySelector("#profile-button");
    const popup = this.querySelector("#profile-popup");

    profileBtn?.addEventListener("click", () => {
      popup.classList.toggle("hidden");
    });

    const logoutButton = this.querySelector("#logout-button");
    logoutButton?.addEventListener("click", () => {
      sessionStorage.clear();
      window.location.reload(); 
    });

    document.addEventListener("click", (e) => {
      const inside = this.contains(e.target);
      if (!inside) popup.classList.add("hidden");
    });
  }

  get sideDrawerButton() {
    return this.querySelector("#sidebar-drawer-button");
  }
}

customElements.define("navbar-dashboard", NavbarDashboard);
