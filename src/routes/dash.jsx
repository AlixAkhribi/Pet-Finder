
import SweetAlert from 'views/Components/SweetAlertPage.jsx';
import ValidationForms from 'views/Forms/ValidationForms.jsx';
import DataTables from 'views/Tables/DataTables.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import UserPage from 'views/Pages/UserPage.jsx';

import pagesRoutes from './pages.jsx';

var pages = [{ path: "/pages/user-page", name: "User Page", mini: "UP", component: UserPage }].concat(pagesRoutes);

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    {
        collapse: true, path: "/components", name: "Components", state: "openComponents", icon: "pe-7s-plugin", views: [
            { path: "/components/sweet-alert", name: "Sweet Alert", mini: "SA", component: SweetAlert },
        ]
    },
    {
        collapse: true, path: "/forms", name: "Forms", state: "openForms", icon: "pe-7s-note2", views: [
            { path: "/forms/validation-forms", name: "Validation Forms", mini: "VF", component: ValidationForms },
        ]
    },
    {
        collapse: true, path: "/tables", name: "Tables", state: "openTables", icon: "pe-7s-news-paper", views: [
            { path: "/tables/data-tables", name: "Data Tables", mini: "DT", component: DataTables },
        ]
    },
    { path: "/calendar", name: "Calendar", icon: "pe-7s-date", component: Calendar },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
