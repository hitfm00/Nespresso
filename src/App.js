import './App.scss';
import './fonts.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import OfficeControl from './pages/OfficeControl/OfficeControl';
import Login from './pages/Login/Login';
import AuthProvider from './components/context/AuthContext';
import SignUp from './pages/SignUp/SignUp';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import Dashboard from './pages/Dashboard/Dashboard';
import { configureAnchors } from 'react-scrollable-anchor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  configureAnchors({ scrollDuration: 1000 });

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/office_control" component={OfficeControl} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgotpassword" component={PasswordReset} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
