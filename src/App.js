import './App.css';
import Rotas from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/custom.scss';
import 'bootstrap';
import CustomAlert from './components/CustomAlert';

function App() {
  return (
    <div className="App">
      <Rotas />
      <CustomAlert/>
    </div>
  );
}

export default App;