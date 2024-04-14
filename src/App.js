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

function App() {
  return (
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
