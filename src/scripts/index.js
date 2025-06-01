import '../styles/styles.css';

import App from './pages/app';
import '../scripts/components/navbar';
import '../scripts/components/sidebar-dashboard';

document.addEventListener('DOMContentLoaded', async () => {
  const isLoggedIn = !!sessionStorage.getItem('token');

  const existingNavbar = document.querySelector('nav-bar') || document.querySelector('sidebar-dashboard');
  if (existingNavbar) {
    existingNavbar.remove();
  }

  const navElement = document.createElement(isLoggedIn ? 'sidebar-dashboard' : 'nav-bar');
  document.body.prepend(navElement); 

  await customElements.whenDefined(navElement.tagName.toLowerCase());

  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: navElement.drawerButton,
    navigationDrawer: navElement.navigationDrawer,
  });

  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});
