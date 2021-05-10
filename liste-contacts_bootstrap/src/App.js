import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
