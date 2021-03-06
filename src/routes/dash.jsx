
import Dashboard from 'views/Dashboard/Dashboard.jsx';
// import SweetAlert from 'views/Components/SweetAlertPage.jsx';
// import ValidationForms from 'views/Forms/ValidationForms.jsx';
import DataTables from 'views/Tables/DataTables.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import UserPage from 'views/Pages/UserPage.jsx';
import ShelterPage from 'views/Pages/ShelterPage';
import LoginPage from 'views/Pages/Login';
import pagesRoutes from './pages.jsx';
import Discover from '../views/Pages/Discover.jsx';
import ShelterWizard from '../views/Pages/ShelterRegister/ShelterWizard'
import UserWizard from '../views/Pages/UserRegister/UserWizard';

const pages = [{
  path: '/pages/user-page', name: 'User Page', mini: 'UP', component: UserPage,
}].concat(pagesRoutes);

const dashRoutes = [
  {
    path: '/Login', name: "Login Page", icon:'pe-7s-lock', component: LoginPage,
  },
  {
    path: '/Shelter-Registration', name: "Shelter Register", icon:'pe-7s-home', component: ShelterWizard,
  },
  {
    path: '/User-Registration', name: "User Register", icon:'pe-7s-user', component: UserWizard,
  },
  {
    path: '/UserPage', name: 'Dashboard - User', icon: 'pe-7s-graph', component: UserPage,
  },
  {
    path: '/ShelterPage', name: 'Dashboard - Shelter', icon: 'pe-7s-graph', component: ShelterPage,
  },
  {

    path: '/views/Pages/Discover', name: 'Search for Pets', icon:'pe-7s-like', component: Discover,
  },
  // {


  //   collapse: true,
  //   path: '/components',
  //   name: 'Components',
  //   state: 'openComponents',
  //   icon: 'pe-7s-plugin',
  //   views: [
  //     {
  //       path: '/components/sweet-alert', name: 'Sweet Alert', mini: 'SA', component: SweetAlert,
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   path: '/forms',
  //   name: 'Forms',
  //   state: 'openForms',
  //   icon: 'pe-7s-note2',
  //   views: [
  //     {
  //       path: '/forms/validation-forms', name: 'Validation Forms', mini: 'VF', component: ValidationForms,
  //     },
  //   ],
  // },
  {
    path: '/calendar', name: 'Calendar', icon: 'pe-7s-date', component: Calendar,
  },
  {
    path: '/tables/DataTables', name: 'Animal Inventory', state: 'openTables', icon: 'pe-7s-news-paper', component: DataTables,
  },
  {
    redirect: true, path: '/', pathTo: '/UserPage', name: 'Dashboard',
  },

];
export default dashRoutes;
