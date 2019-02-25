import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from 'components/layout/NavBar';
import SideMenu from 'components/layout/SideMenu';

import Home from 'components/pages/Home';
import BL from 'components/pages/BL';
import Products from 'components/pages/Products';
import Settings from 'components/pages/Settings';
import Clients from 'components/pages/Clients';

const Layout = () => {
    return(
        <>
            <NavBar />
            <div className="row">
                <div className="col-2">
                    <SideMenu />
                </div>
                <div className="col-10">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/bl" component={BL}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/clients" component={Clients}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>
                </div>
            </div>
        </>
    )
}

export default Layout;