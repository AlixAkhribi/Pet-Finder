// import React, { Component } from 'react';
// import {
//   BrowserRouter,
//   Route, Switch,
// } from 'react-router-dom';
// import LoginPage from '../../views/Pages/LoginPage';
// import RegisterPage from '../../views/Pages/RegisterPage';
// import LockScreenPage from '../../views/Pages/LockScreenPage';
// import Dash from '../Dash/Dash';
//
// // dynamically create app routes
// // import appRoutes from 'routes/app.jsx';
//
// class App extends Component {
//   componentDidUpdate(e) {
//     if (window.innerWidth < 993 && e.history.action === 'PUSH' && document.documentElement.className.indexOf('nav-open') !== -1) {
//       document.documentElement.classList.toggle('nav-open');
//     }
//   }
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" component={Dash} />
//           <Route path="/pages/login-page" exact component={LoginPage} />
//           <Route path="/pages/register-page" exact component={RegisterPage} />
//           <Route path="/pages/lock-screen-page" exact component={LockScreenPage} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// dinamically create app routes
import appRoutes from 'routes/app.jsx';

class App extends Component {
  componentDidUpdate(e) {
    if (window.innerWidth < 993 && e.history.action === 'PUSH' && document.documentElement.className.indexOf('nav-open') !== -1) {
      document.documentElement.classList.toggle('nav-open');
    }
  }
  render() {
    return (
      <Switch>
        {
                    appRoutes.map((prop, key) => (
                      <Route path={prop.path} component={prop.component} key={key} />
                        ))
                }
      </Switch>
    );
  }
}

export default App;
