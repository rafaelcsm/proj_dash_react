//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Formulario from './components/Form/Formulario';
import Quemsomos from './components/Quemsomos/Quemsomos';
import Dash from './Dash/Dash1';
import CadProvider from './context/CadProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Learn React
        </a>
  </header>*/}
    <BrowserRouter>
      <Header/>

      <CadProvider>
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/faleconosco" element={<Formulario />} />
          <Route path="/quemsomos" element={<Quemsomos />} />
        </Routes>
      </CadProvider>
    </BrowserRouter>
      

    </div>
  );
}

export default App;
