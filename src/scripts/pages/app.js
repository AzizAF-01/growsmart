import routes from "../routes/routes";
import { getActiveRoute } from "../routes/url-parser";
import "../../scripts/components/navbar-dashboard";

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;
  #sideDrawerButton = null;
  #sidebarNavigationDrawer = null;
  #sidebarDrawerOverlay = null;

  constructor({
    navigationDrawer,
    drawerButton,
    content,
    sideDrawerButton,
    sidebarNavigationDrawer,
    sidebarDrawerOverlay,
  }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;
    this.#sideDrawerButton = sideDrawerButton;
    this.#sidebarNavigationDrawer = sidebarNavigationDrawer;
    this.#sidebarDrawerOverlay = sidebarDrawerOverlay;

    this._setupDrawer();
    this._setupSidebar();
  }

  _setupDrawer() {
    if (!this.#drawerButton || !this.#navigationDrawer) return;
    const overlay = document.querySelector("#drawer-overlay");
    if (!overlay) return;

    this.#drawerButton.addEventListener("click", () => {
      this.#navigationDrawer.classList.toggle("translate-x-0");
      this.#navigationDrawer.classList.toggle("-translate-x-full");
      overlay.classList.toggle("hidden");
    });

    document.body.addEventListener("click", (event) => {
      const clickInsideDrawer = this.#navigationDrawer.contains(event.target);
      const clickOnButton = this.#drawerButton.contains(event.target);

      if (!clickInsideDrawer && !clickOnButton) {
        this.#navigationDrawer.classList.add("-translate-x-full");
        this.#navigationDrawer.classList.remove("translate-x-0");
        overlay.classList.add("hidden");
      }
    });

    this.#navigationDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        this.#navigationDrawer.classList.add("-translate-x-full");
        this.#navigationDrawer.classList.remove("translate-x-0");
        overlay.classList.add("hidden");
      });
    });
  }

  _setupSidebar() {
    if (!this.#sideDrawerButton || !this.#sidebarNavigationDrawer) return;
    const overlay = document.querySelector("#sidebar-drawer-overlay"); // sesuaikan id overlay di HTML-mu
    if (!overlay) return;

    this.#sideDrawerButton.addEventListener("click", () => {
      this.#sidebarNavigationDrawer.classList.toggle("translate-x-0");
      this.#sidebarNavigationDrawer.classList.toggle("-translate-x-full");
      overlay.classList.toggle("hidden");
    });

    document.body.addEventListener("click", (event) => {
      const clickInsideDrawer = this.#sidebarNavigationDrawer.contains(
        event.target
      );
      const clickOnButton = this.#sideDrawerButton.contains(event.target);

      if (!clickInsideDrawer && !clickOnButton) {
        this.#sidebarNavigationDrawer.classList.add("-translate-x-full");
        this.#sidebarNavigationDrawer.classList.remove("translate-x-0");
        overlay.classList.add("hidden");
      }
    });

    this.#sidebarNavigationDrawer
      .querySelectorAll("a, button")
      .forEach((link) => {
        link.addEventListener("click", () => {
          this.#sidebarNavigationDrawer.classList.add("-translate-x-full");
          this.#sidebarNavigationDrawer.classList.remove("translate-x-0");
          overlay.classList.add("hidden");
        });
      });
  }

  isLoggedIn() {
    return !!sessionStorage.getItem("token");
  }

  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];
    const publicRoutes = ["/", "/login", "/register"];

    const loggedIn = this.isLoggedIn();
    const isPublic = publicRoutes.includes(url);

    if (typeof page.bindContainer === "function") {
      page.bindContainer(this.#content);
    }

    if (loggedIn && isPublic) {
      window.location.hash = "/dashboard";
      return;
    }

    if (!loggedIn && !isPublic) {
      window.location.hash = "/login";
      return;
    }

    if (loggedIn) {
      this.#content.innerHTML = await page.render();
      this.#content.classList.add("flex-grow");
      await page.afterRender();
      document.body.classList.add("flex", "min-h-screen");
    } else {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
      document.body.appendChild(this.#content);
      document.body.classList.remove("flex", "min-h-screen");
    }
  }
}

export default App;
