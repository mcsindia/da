import '../src/styles/dms/dmsglobal.css'
import './styles/web/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/dms/AdminLayout/AdminLayout'
import { Dashboard } from './pages/dms/Dashboard/Dashboard';
/* Authentication */
import { Login } from './layouts/dms/AuthLayout/Login';
import { ForgetPassword } from './layouts/dms/AuthLayout/ForgetPassword'
import { ResetPassword } from './layouts/dms/AuthLayout/ResetPassword'
/* User Management */
import { UserAdd } from './pages/dms/Users/UserAdd';
import { UserEdit } from './pages/dms/Users/UserEdit';
import { UserList } from './pages/dms/Users/UserList';
import { UserProfile } from './pages/dms/Users/UserProfile';
/* Website */
import { Home } from './pages/web/Home/Home';
import { ProductList } from './pages/web/Products/ProductList';
import { ProductDescription } from './pages/web/Products/ProductDescription';
import { Catagory } from './pages/web/CatagoryPage/Catagory';
import { Wishlist } from './pages/web/Wishlist/Wishlist';
import { About } from './pages/web/About/About';
import { Contact } from './pages/web/Contact/Contact';
import { Cart } from './pages/web/Cart/Cart';
import { MyProfile } from './pages/web/MyProfile/MyProfile';
import { Order } from './pages/web/Order/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLayout> <Dashboard /> </AdminLayout>} />

        {/* Authentication */}
        <Route path='/login' element={<Login />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        {/* User Management */}
        {/* User */}
        <Route path='/user' element={<UserList />} />
        <Route path='/user/add' element={<UserAdd />} />
        <Route path='/user/edit' element={<UserEdit />} />
         <Route path='/user/profile' element={< UserProfile/>} /> 


        {/* Website */}
        <Route path='/web' element={<Home/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/category/:categoryName" element={<Catagory/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/orders' element={<Order/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/profile' element={<MyProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  
