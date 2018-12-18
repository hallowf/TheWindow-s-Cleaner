import React from 'react';
import Main from './Components/Pages/Main'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Clean from './Components/Pages/Clean';
import Tools from './Components/Pages/Tools';
import Optimize from './Components/Pages/Optimize';
import Options from './Components/Pages/Options';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/clean" component={Clean} />
          <Route path="/optimize" component={Optimize} />
          <Route path="/tools" component={Tools} />
          <Route path="/options" component={Options} />
        </Switch>
        </main>   
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
