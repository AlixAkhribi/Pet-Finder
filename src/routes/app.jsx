import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';
import LoginPage from '../views/Pages/LoginPage';
import RegisterPage from '../views/Pages/RegisterPage';
import LockScreenPage from '../views/Pages/LockScreenPage';

const appRoutes = [
  { path: '../views/pages/login-page', name: 'Pages', component: LoginPage },
  { path: '../views/pages/register-page', name: 'Pages', component: RegisterPage },
  { path: '../views/pages/lock-screen-page', name: 'Pages', component: LockScreenPage },
  { path: '/', name: 'Home', component: Dash },
];

export default appRoutes;
