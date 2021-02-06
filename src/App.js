import './App.scss';
import './fonts.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import OfficeControl from './pages/OfficeControl/OfficeControl';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/office_control" component={OfficeControl} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
