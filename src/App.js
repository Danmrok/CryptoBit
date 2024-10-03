import React from 'react';
import './App.sass';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Secure from './Components/Secure/Secures';
import Confiedence from './Components/Confiedence/Confiedence';
import Support from './Components/Support/Support';
import Footer from './Components/Footer/Footer';
import Platform from './Components/Platform/Platform';
import Wallet from './Components/Wallet/Wallet';
import Copyright from './Components/Copyright/Copyright';



const App = () => {
  return (
    <div className="App">
      <div className='app-header'>
       <Header />
      </div>
      <div className='app-main'>
        <Home />
        <Secure />
        <Confiedence />
        <Support />
        <Platform />
        <Wallet />
      </div>
      <div className='app-footer'>
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
