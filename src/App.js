import React from 'react';
import Header from './components/Header-logo';
import Main from './pages/main'
import Routes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;