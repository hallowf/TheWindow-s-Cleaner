import React from 'react';
import Main from './Components/Pages/Main'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const App = () => {
  return (

    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App;
