import React from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from './modules/Header/Header';
import Sidebar from './modules/Sidebar/Sidebar';
import store from './redux/redux';
import Profile from './modules/Profile/Profile';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className='clearfix'>
                <Sidebar/>
                <Route path='/profile' component={Profile}/>
            </div>
        </div>
    );
}

const AppContext = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>;
};

export default AppContext;
