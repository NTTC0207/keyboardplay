import React from "react";
import Scene2 from './Scene2'
import Scene1 from './Scene1'
import Scene3 from './Scene3'
import {Router,Route,Switch} from 'react-router-dom'
import Menu from './Menu'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App =()=>{

  return(
    <>
<Router history={history}>
<Menu />
<Switch>
<Route path='/' exact component={Menu}></Route>  
<Route path='/Scene2' exact component={Scene2}></Route>
<Route path='/Scene1' exact component={Scene1}></Route>
<Route path='/Scene3' exact component={Scene3}></Route>
</Switch>

</Router>
    

    </>
  )

}


export default App

