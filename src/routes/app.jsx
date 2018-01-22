import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';
import Discover from '../views/Pages/Discover';
import ShelterWizard from '../views/Pages/ShelterRegister/ShelterWizard';
import UserWizard from '../views/Pages/UserRegister/UserWizard';

const appRoutes = [
  { path: '../views/Pages/ShelterRegister/ShelterWizard.jsx', name: 'Pages', component: ShelterWizard},
  { path: '../views/Pages/UserRegister/UserWizard.jsx', name: 'Pages', component: UserWizard},
  { path: '../views/Pages/Discover', name: 'Pages', component: Discover },
  { path: '/', name: 'Home', component: Dash },
];

export default appRoutes;
