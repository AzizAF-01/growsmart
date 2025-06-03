import HomePage from "../pages/home/home-page";
import AboutPage from "../pages/about/about-page";
import LandingPage from "../pages/landing-page/landing-page";
import LoginView from "../pages/login/login-view";
import RegisterView from "../pages/register/register-view";
import DashboardView from "../pages/dashboard-users/menu-dashboard/dashboard-view";
import CekStuntingView from "../pages/dashboard-users/menu-cek-stunting/cekStunting-view";
import RiwayatView from "../pages/dashboard-users/menu-riwayat/riwayat-view";
import ProfileView from "../pages/dashboard-users/menu-profile/profile-view";

const routes = {
  "/": new LandingPage(),
  "/home-page": new HomePage(),
  "/about": new AboutPage(),
  "/login": new LoginView(),
  "/register": new RegisterView(),
  "/dashboard": new DashboardView(),
  "/cekstunting": new CekStuntingView(),
  "/profile": new ProfileView(),
  "/riwayat": new RiwayatView(),
};

export default routes;
