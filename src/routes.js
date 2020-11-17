import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Spetialties from './components/Espetials-box'
import Spetialtie from './components/Spetialtie'
import Main from './pages/main'
import DoctorInfo from './components/Doctor-infos'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/spetialtie/:id' component={Spetialtie}/>
                <Route path='/doctor/:id' component={DoctorInfo} />
            </Switch>
        </BrowserRouter>
    )
}