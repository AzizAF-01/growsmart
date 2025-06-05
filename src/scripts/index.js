import '../styles/styles.css';

import App from './pages/app';
import '../scripts/components/navbar';
import '../scripts/components/sidebar-dashboard';
import '../scripts/components/navbar-dashboard';

document.addEventListener('DOMContentLoaded', async () => {

  const token = sessionStorage.getItem('token');
  const expiresAt = sessionStorage.getItem('expires_at');
  const now = Date.now(); // dalam milidetik

  if (token && expiresAt && now >= parseInt(expiresAt) * 1000) {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expires_at');
    alert('Sesi Anda telah berakhir. Silakan login kembali.');
    window.location.hash = '/login';
    window.location.reload();
    return;
  }

  if (token && expiresAt) {
    const remainingTime = parseInt(expiresAt) * 1000 - now;
    setTimeout(() => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('expires_at');
      alert('Sesi Anda telah berakhir. Silakan login kembali.');
      window.location.hash = '/login';
      window.location.reload();
    }, remainingTime);
  }

  const isLoggedIn = !!sessionStorage.getItem('token');

  const existingNavbar = document.querySelector('nav-bar') || document.querySelector('sidebar-dashboard');
  if (existingNavbar) {
    existingNavbar.remove();
  }

  const navElement = document.createElement(isLoggedIn ? 'sidebar-dashboard' : 'nav-bar');
  document.body.prepend(navElement); 

  await customElements.whenDefined(navElement.tagName.toLowerCase());

  // Penambahan navbar-dashboard dan div#main-layout saat login
  let appContent = document.querySelector('#main-content');

  if (isLoggedIn) {
    const mainLayout = document.createElement('div');
    mainLayout.id = 'main-layout';
    mainLayout.className = 'flex flex-col flex-grow w-full sm:ml-64';

    const navbar = document.createElement('navbar-dashboard');
    await customElements.whenDefined('navbar-dashboard');

    appContent = document.createElement('div');
    appContent.id = 'main-content';
    appContent.classList.add('flex-grow');

    mainLayout.appendChild(navbar);
    mainLayout.appendChild(appContent);

    document.body.appendChild(mainLayout);
    document.body.classList.add('flex', 'min-h-screen');
  } else {
    appContent = document.createElement('div');
    appContent.id = 'main-content';
    document.body.appendChild(appContent);
    document.body.classList.remove('flex', 'min-h-screen');
  }

  const app = new App({
    content: appContent,
    drawerButton: navElement.drawerButton,
    navigationDrawer: navElement.navigationDrawer,
    sideDrawerButton: isLoggedIn ? document.querySelector('navbar-dashboard').sideDrawerButton : null,
    sidebarNavigationDrawer: navElement.sidebarNavigationDrawer,
    sidebarDrawerOverlay: navElement.sidebarDrawerOverlay,
  });

  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});

