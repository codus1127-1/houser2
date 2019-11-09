import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Wizard1 from './components/Wizard1';
import Wizard2 from './components/Wizard2';
import Wizard3 from './components/Wizard3';


export default (
    <Switch>
        <Route exact path ='/' component={Dashboard}/>
        <Route path ='/wizard/1' component={Wizard1}/>
        <Route path ='/wizard/2' component={Wizard2}/>
        <Route path = '/wizard/3' component={Wizard3}/>
    </Switch>
)