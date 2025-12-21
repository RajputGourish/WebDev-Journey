import logo from './logo.svg';
import { useState } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';


function App() {
  const [value, setvalue] = useState(0);
  return (
    <div className="App">
      <Navbar logotext={"Gourish Rajput"} sec = {"Golu Raj"} />
      <Button />
      <div className="value">{value}</div>
      <button onClick={() => { setvalue(value + 1) }}>Click me</button>
      <Footer />
    </div>
  );
}

export default App;
