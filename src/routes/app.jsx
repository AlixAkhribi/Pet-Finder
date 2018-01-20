import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';
import LoginPage from '../views/Pages/LoginPage';
import RegisterPage from '../views/Pages/RegisterPage';
import LockScreenPage from '../views/Pages/LockScreenPage';
import Discover from '../views/Pages/Discover';
import ShelterWizard from '../views/Pages/ShelterRegister/ShelterWizard';
import ShelterWizard from '../views/Pages/UserRegister/UserWizard';

const appRoutes = [
  { path: '../views/Pages/login-page', name: 'Pages', component: LoginPage },
  { path: '../views/Pages/register-page', name: 'Pages', component: RegisterPage },
  { path: '../views/Pages/lock-screen-page', name: 'Pages', component: LockScreenPage },
  { path: '../views/Pages/ShelterRegister/ShelterWizard.jsx', name: 'Pages', component: ShelterWizard},
  { path: '../views/Pages/UserRegister/UserWizard.jsx', name: 'Pages', component: UserWizard},
  { path: '../views/Pages/Discover', name: 'Pages', component: Discover },
  { path: '/', name: 'Home', component: Dash },
];

export default appRoutes;
