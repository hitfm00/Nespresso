import './App.scss';
import './fonts.scss';
import Header from './components/Header/Header';
import FromHomeToWork from './sections/FromHomeToWork/FromHomeToWork';
import OfficeControl from './sections/OfficeControl/OfficeControl';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FromHomeToWork />
        <div className="wrapper">
          <OfficeControl />
        </div>
      </main>
    </div>
  );
}

export default App;
