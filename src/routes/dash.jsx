//
// import Dashboard from 'views/Dashboard/Dashboard.jsx';
// import SweetAlert from 'views/Components/SweetAlertPage.jsx';
// import ValidationForms from 'views/Forms/ValidationForms.jsx';
// import DataTables from 'views/Tables/DataTables.jsx';
// import Calendar from 'views/Calendar/Calendar.jsx';
// import UserPage from 'views/Pages/UserPage.jsx';
//
// import pagesRoutes from './pages.jsx';
//
// const pages = [{
//   path: '/pages/user-page', name: 'User Page', mini: 'UP', component: UserPage,
// }].concat(pagesRoutes);
//
// const dashRoutes = [
// //     {
// //         collapse: true, path: "/components", name: "Components", state: "openComponents", icon: "pe-7s-plugin", views: [
// //             { path: "/components/sweet-alert", name: "Sweet Alert", mini: "SA", component: SweetAlert },
// //         ]
// //     },
// //     {
// //         collapse: true, path: "/forms", name: "Forms", state: "openForms", icon: "pe-7s-note2", views: [
// //             { path: "/forms/validation-forms", name: "Validation Forms", mini: "VF", component: ValidationForms },
// //         ]
// //     },
// //     {
// //         collapse: true, path: "/tables", name: "Tables", state: "openTables", icon: "pe-7s-news-paper", views: [
// //             { path: "/tables/data-tables", name: "Data Tables", mini: "DT", component: DataTables },
// //         ]
// //     },
// //     { path: "/calendar", name: "Calendar", icon: "pe-7s-date", component: Calendar },
// //     { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
// // ];
//   {
//     path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard,
//   },
//   {
//     path: '/tables/DataTables', name: 'Animal Inventory', state: 'openTables', icon: 'pe-7s-news-paper', component: DataTables,
//   },
//   {
//     redirect: false, path: '/', pathTo: '/dashboard', name: 'Dashboard',
//   },
// ];
// export default dashRoutes;
import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Buttons from 'views/Components/Buttons.jsx';
import SweetAlert from 'views/Components/SweetAlertPage.jsx';
import ValidationForms from 'views/Forms/ValidationForms.jsx';
import ExtendedTables from 'views/Tables/ExtendedTables.jsx';
import DataTables from 'views/Tables/DataTables.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import UserPage from 'views/Pages/UserPage.jsx';

import pagesRoutes from './pages.jsx';

const pages = [{
  path: '/pages/user-page', name: 'User Page', mini: 'UP', component: UserPage,
}].concat(pagesRoutes);

const dashRoutes = [
  {
    path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard,
  },
  {
    collapse: true,
    path: '/components',
    name: 'Components',
    state: 'openComponents',
    icon: 'pe-7s-plugin',
    views: [
      {
        path: '/components/sweet-alert', name: 'Sweet Alert', mini: 'SA', component: SweetAlert,
      },
      {
        path: '/components/notifications', name: 'Notifications', mini: 'N', component: Notifications,
      },
      {
        path: '/components/icons', name: 'Icons', mini: 'I', component: Icons,
      },
      {
        path: '/components/typography', name: 'Typography', mini: 'T', component: Typography,
      }],
  },
  {
    collapse: true,
    path: '/forms',
    name: 'Forms',
    state: 'openForms',
    icon: 'pe-7s-note2',
    views:
        [{
          path: '/forms/regular-forms', name: 'Regular Forms', mini: 'RF', component: RegularForms,
        },
        {
          path: '/forms/extended-forms', name: 'Extended Forms', mini: 'EF', component: ExtendedForms,
        },
        {
          path: '/forms/validation-forms', name: 'Validation Forms', mini: 'VF', component: ValidationForms,
        },
        {
          path: '/forms/wizard', name: 'Wizard', mini: 'W', component: Wizard,
        }],
  },
  {
    collapse: true,
    path: '/tables',
    name: 'Tables',
    state: 'openTables',
    icon: 'pe-7s-news-paper',
    views:
        [{
          path: '/tables/regular-tables', name: 'Regular Tables', mini: 'RT', component: RegularTables,
        },
        {
          path: '/tables/extended-tables', name: 'Extended Tables', mini: 'ET', component: ExtendedTables,
        },
        {
          path: '/tables/data-tables', name: 'Data Tables', mini: 'DT', component: DataTables,
        }],
  },
  {
    collapse: true,
    path: '/maps',
    name: 'Maps',
    state: 'openMaps',
    icon: 'pe-7s-map-marker',
    views:
        [{
          path: '/maps/google-maps', name: 'Google Maps', mini: 'GM', component: GoogleMaps,
        },
        {
          path: '/maps/full-screen-maps', name: 'Full Screen Map', mini: 'FSM', component: FullScreenMap,
        },
        {
          path: '/maps/vector-maps', name: 'Vector Map', mini: 'VM', component: VectorMap,
        }],
  },
  {
    path: '/charts', name: 'Charts', icon: 'pe-7s-graph1', component: Charts,
  },
  {
    path: '/calendar', name: 'Calendar', icon: 'pe-7s-date', component: Calendar,
  },
  {
    collapse: true,
    path: '/pages',
    name: 'Pages',
    state: 'openPages',
    icon: 'pe-7s-gift',
    views:
        pages,
  },
  {
    redirect: true, path: '/', pathTo: '/dashboard', name: 'Dashboard',
  },
];
export default dashRoutes;
