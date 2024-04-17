import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './component/Sidebar/Sidebar';

import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Customers from './component/NavItems/Customers/Customers';
import Dashboard from './component/Dashboard/Dashboard';
import Response from './component/NavItems/Response/Response';
import Addcategory from './component/NavItems/Addcategory/Addcategory';
import Postads from './component/NavItems/Postads/Postads';
import Addusers from './component/NavItems/Addusers/Addusers';
import Viewusers from './component/NavItems/Viewusers/Viewusers';
import Login from './component/Login';
import { useState } from 'react';
import { Provider } from "react-redux";
import store from "./dataStore/configureRedux"


function App() {
  const [user, setUser] = useState(true);
  return (
    <>
    <Provider store={store}>
    {user ? <div>
      <Login loggedIn={()=> setUser(false)}/>
      </div>:
    <div className=''>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/customers' element={<Customers />}></Route>
          <Route path='/response' element={<Response />}></Route>
          <Route path='/addcategory' element={<Addcategory />}></Route>
          <Route path='/postads' element={<Postads />}></Route>
          <Route path='/addusers' element={<Addusers />}></Route>
          <Route path='/viewusers' element={<Viewusers />}></Route>
        </Routes>
      </div>
    </div>}
    </Provider>
    </>
  );
}

export default App;
