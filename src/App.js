import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './component/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Customers from './component/NavItems/totalCustomers/totalCustomers';
import VerifeidCustomers from './component/NavItems/VerifeidCustomers/VerifiedCustomers';
import NonverifeidCustomers from './component/NavItems/NonverifeidCustomers/NonverifeidCustomers';
import Dashboard from './component/Dashboard/Dashboard';
import Response from './component/NavItems/Response/Response';
import Addcategory from './component/NavItems/Addcategory/Addcategory';
import CustomerAds from './component/NavItems/CustomerAds/CustomerAds';
import Addusers from './component/NavItems/Addusers/Addusers';
import Viewusers from './component/NavItems/Viewusers/Viewusers';
import Login from './component/Login';
import { useState } from 'react'; // no Redux
import ContactList from './component/NavItems/ContactList/ContactList';
import AddShopusers from './component/NavItems/AddShopusers/AddShopusers';
import ProductDescription from './component/NavItems/ProductDescription/ProductDescription';
import BannerDetails from './component/NavItems/BannerDetails/BannerDetails';
import AddSubcategory from './component/NavItems/AddSubcategory/AddSubcategory';
import ShopCategory from './component/NavItems/ShopCategory/ShopCategory';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const token = localStorage.getItem('authToken');  

  return (
    <div>
      {/* {token ? ( */}
        <div className="">
          <Header />
          <div className="d-flex">
            <Sidebar logout={handleLogout} />
            <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/VerifeidCustomers" element={<VerifeidCustomers />} />
              <Route path="/NonverifeidCustomers" element={<NonverifeidCustomers />} />
              <Route path="/response" element={<Response />} />
              <Route path="/addcategory" element={<Addcategory />} />
              <Route path="/CustomerAds" element={<CustomerAds />} />
              <Route path="/addusers" element={<Addusers />} />
              <Route path="/viewusers" element={<Viewusers />} />
              <Route path="/contactlist" element={<ContactList />} />
              <Route path="/AddShopusers" element={<AddShopusers />} />
              <Route path="/ProductDescription" element={<ProductDescription />} />
              <Route path="/BannerDetails" element={<BannerDetails />} />
              <Route path="/AddSubcategory" element ={<AddSubcategory/>} />
              <Route path="/ShopCategory" element ={<ShopCategory/>} />


            </Routes>
          </div>
        </div>
      {/* ) : ( */}
        <Login loggedIn={handleLogin} />
      {/* )} */}
    </div>
  );
}

export default App;
