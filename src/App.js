import './App.css';
import Rotas from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss';
import HeaderDentro from './headerDentro';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      {/* <HeaderDentro /> */}
      <Rotas />
    </div>
  );
}

export default App;