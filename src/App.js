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
/* Master */
import { CountryList } from './pages/dms/Master/Country/CountryList';
import { CountryAdd } from './pages/dms/Master/Country/CountryAdd';
import { CountryEdit } from './pages/dms/Master/Country/CountryEdit';
import { CityList } from './pages/dms/Master/City/CityList';
import { CityAdd } from './pages/dms/Master/City/CityAdd';
import { CityEdit } from './pages/dms/Master/City/CityEdit';
import { StateList } from './pages/dms/Master/State/StateList';
import { StateAdd } from './pages/dms/Master/State/StateAdd';
import { StateEdit } from './pages/dms/Master/State/StateEdit';
/* Audit Logs */
import { AuditLogs } from './pages/dms/AuditLogs/AuditLogs';
/* Media */
import { NewsList } from './pages/dms/Media/News/NewsList';
import { NewsAdd } from './pages/dms/Media/News/NewsAdd';
import { NewsEdit } from './pages/dms/Media/News/NewsEdit';
import { EventsList } from './pages/dms/Media/Events/EventsList';
import { EventAdd } from './pages/dms/Media/Events/EventAdd';
import { EventEdit } from './pages/dms/Media/Events/EventEdit';
import { PressReleases } from './pages/dms/Media/PressRelease/PressReleases';
import { PressRealeaseAdd } from './pages/dms/Media/PressRelease/PressRealeaseAdd';
import { PressReleaseEdit } from './pages/dms/Media/PressRelease/PressReleaseEdit';
import { Home } from './pages/web/Home/Home';
import { ProductList } from './pages/web/Products/ProductList';
import { ProductDescription } from './pages/web/Products/ProductDescription';
import { Catagory } from './pages/web/CatagoryPage/Catagory';
import { Wishlist } from './pages/web/Wishlist/Wishlist';
import { About } from './pages/web/About/About';
import { Contact } from './pages/web/Contact/Contact';
import { Cart } from './pages/web/Cart/Cart';
import { MyProfile } from './pages/web/MyProfile/MyProfile';
/* import { UserProfile } from './pages/User Management/Users/UserProfile'; */
/* Master Management */

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
        {/* <Route path='/user/profile' element={<UserProfile />} /> */}

        {/* Master Management */}
        {/* Country */}
        <Route path='/master/country' element={<CountryList/>} />
        <Route path='//master/country/add' element={<CountryAdd/>} />
        <Route path='/master/country/edit' element={<CountryEdit/>} />
        {/* City */}
        <Route path='/master/city' element={<CityList/>} />
        <Route path='/master/city/add' element={<CityAdd/>} />
        <Route path='/master/city/edit' element={<CityEdit/>} />
        {/* State */}
        <Route path='/master/state' element={<StateList/>} />
        <Route path='/master/state/add' element={<StateAdd/>} />
        <Route path='/master/state/edit' element={<StateEdit/>} />
        {/* Media Management */}
        {/* News */}
        <Route path='/media/news' element={<NewsList/>} />
        <Route path='/media/news/add' element={<NewsAdd/>} />
        <Route path='/media/news/edit' element={<NewsEdit/>} />
        {/* Event */}
        <Route path='/media/events' element={<EventsList/>} />
        <Route path='/media/events/add' element={<EventAdd/>} />
        <Route path='/media/events/edit' element={<EventEdit/>} />
        {/* Press Release */}
        <Route path='/media/press-releases' element={<PressReleases/>} />
        <Route path='/media/press-releases/add' element={<PressRealeaseAdd/>} />
        <Route path='/media/press-releases/edit' element={<PressReleaseEdit/>} />

        {/* Audit Logs */}
        <Route path='/audit-logs' element={<AuditLogs/>} />

        {/* Website */}
        <Route path='/web' element={<Home/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/category/:categoryName" element={<Catagory/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/profile' element={<MyProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  
