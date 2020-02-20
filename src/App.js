import React from 'react';
import Layout from './layout'
import {Route} from 'react-router-dom'
import Home from './pages/home'
import Events from './pages/events'
import Sponsors from './pages/sponsors'
import Contact from './pages/contact'



function App() {
  return (
    
      <div className="App">
        <Layout>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/sponsors' component={Sponsors}/>
          <Route exact path='/contact' component={Contact}/>
        </Layout>
      </div>    
  );
}

export default App;
