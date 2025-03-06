import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path ="/" Component={Login}/>
                <Route path ="/signup" Component={Signup}/>
                <Route path ="/main" Component={Main}/>
            </Routes>
        </Router>
    );
}
export default Routes;
