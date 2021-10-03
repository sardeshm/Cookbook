import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './component/Home';
import Indian from './component/Indian';
import Mexican from './component/Mexican';
import Italian from './component/Italian';
import Thai from './component/Thai';

const MyRouter = () => {
    return(
        <Router>
            <Nav/>
            <Switch>
                <Route exact path='/'component={Home}/>
                <Route exact path='/Indian'component={Indian}/>
                <Route exact path='/Mexican'component={Mexican}/>
                <Route exact path='/Italian'component={Italian}/>
                <Route exact path='/Thai'component={Thai}/>


                
            </Switch>
        </Router>
    )
}

export default MyRouter;