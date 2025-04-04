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
/* Product Management */
/* Product */
import { ProductList } from './pages/dms/Product/ProductTable/ProductList';
import { ProductAdd } from './pages/dms/Product/ProductTable/ProductAdd';
import { ProductEdit } from './pages/dms/Product/ProductTable/ProductEdit';
import { ProductView } from './pages/dms/Product/ProductTable/ProductView';
/* Category */
import { CategoryList } from './pages/dms/Product/CatagoryTable/CatagoryList';
import { CategoryAdd } from './pages/dms/Product/CatagoryTable/CatagoryAdd';
import { CategoryEdit } from './pages/dms/Product/CatagoryTable/CatagoryEdit';
import { CategoryView } from './pages/dms/Product/CatagoryTable/CategoryView';
/* Inventory */
import { InventoryList } from './pages/dms/Product/InventoryTable/InventoryList';
import { InventoryAdd } from './pages/dms/Product/InventoryTable/InventoryAdd';
import { InventoryEdit } from './pages/dms/Product/InventoryTable/InventoryEdit';
import { InventoryView } from './pages/dms/Product/InventoryTable/InventoryView';

/* Orders */
/* New Order */
import { NewOrderList } from './pages/dms/Orders/NewOrders/NewOrderList';
import { NewOrderEdit } from './pages/dms/Orders/NewOrders/NewOrderListEdit';
import { NewOrderView } from './pages/dms/Orders/NewOrders/NewOrderView';
/* Processing Order */
import { ProcessingOrderList } from './pages/dms/Orders/ProcessingOrders/ProcessingOrderList';
import { ProcessingOrderEdit} from './pages/dms/Orders/ProcessingOrders/ProcessingOrderEdit';
import { ProcessingOrderView } from './pages/dms/Orders/ProcessingOrders/ProcessingOrderView';
/* Completed Order */
import { CompletedOrderList } from './pages/dms/Orders/CompletedOrders/CompletedOrderList';
import { CompletedOrderView } from './pages/dms/Orders/CompletedOrders/CompletedOrderView';
/* Canceled Order */
import { CanceledOrderList } from './pages/dms/Orders/CanceledOrders/CanceledOrderList';
import { CanceledOrderEdit } from './pages/dms/Orders/CanceledOrders/CanceledOrderEdit';
import { CanceledOrderView } from './pages/dms/Orders/CanceledOrders/CanceledOrderView';

/* Website */
import { Home } from './pages/web/Home/Home';
import { Products } from './pages/web/Products/Products';
import { ProductDescription } from './pages/web/Products/ProductDescription';
import { Catagory } from './pages/web/CatagoryPage/Catagory';
import { Wishlist } from './pages/web/Wishlist/Wishlist';
import { About } from './pages/web/About/About';
import { Contact } from './pages/web/Contact/Contact';
import { Cart } from './pages/web/Cart/Cart';
import { MyProfile } from './pages/web/MyProfile/MyProfile';
import { Order } from './pages/web/Order/Order';
import { ProductReviewList } from './pages/dms/ReviewsAndFeedback/ProductReviews/ProductReviewList';
import { ProductReviewView } from './pages/dms/ReviewsAndFeedback/ProductReviews/ProductReviewView';
import { CustomerFeedbackList } from './pages/dms/ReviewsAndFeedback/CustomerFeedback/CustomerFeedbackList';
import { CustomerFeedbackView } from './pages/dms/ReviewsAndFeedback/CustomerFeedback/CustomerFeedbackView';
import { CouponList } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponList';
import { CouponAdd } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponAdd';
import { CouponEdit } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponEdit';
import { CouponView } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponView';

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

        {/* Product Management */}
        {/* Product Table */}
        <Route path='/dms/product' element={<ProductList/>} />
        <Route path='/dms/product/add' element={<ProductAdd/>} />
        <Route path='/dms/product/edit' element={<ProductEdit/>} />
        <Route path='/dms/product/view' element={<ProductView/>} />
        {/* Catagory Table */}
        <Route path='/dms/manage-category' element={<CategoryList/>} />
        <Route path='/dms/manage-category/add' element={<CategoryAdd/>} />
        <Route path='/dms/manage-category/edit' element={<CategoryEdit/>} />
        <Route path='/dms/manage-category/view' element={<CategoryView/>} />
        {/* Inventory Table */}
        <Route path='/dms/inventory' element={<InventoryList/>} />
        <Route path='/dms/inventory/add' element={<InventoryAdd/>} />
        <Route path='/dms/inventory/edit' element={<InventoryEdit/>} />
        <Route path='/dms/inventory/view' element={<InventoryView/>} />

        {/* Order Management */}
        {/* New Orders */}
        <Route path='/dms/new-orders' element={<NewOrderList/>} />
        <Route path='/dms/new-orders/edit' element={<NewOrderEdit/>} />
        <Route path='/dms/new-orders/view' element={<NewOrderView/>} />
        {/* Processing Orders */}
        <Route path='/dms/processing-orders' element={<ProcessingOrderList/>} />
        <Route path='//dms/processing-orders/edit' element={<ProcessingOrderEdit/>} />
        <Route path='/dms/processing-orders/view' element={<ProcessingOrderView/>} />
        {/* Completed Order */}
        <Route path='/dms/completed-orders' element={<CompletedOrderList/>} />
        <Route path='/dms/completed-orders/view' element={<CompletedOrderView/>} />
        {/* Canceled Orders */}
        <Route path='/dms/canceled-orders' element={<CanceledOrderList/>} />
        <Route path='/dms/canceled-orders/edit' element={<CanceledOrderEdit/>} />
        <Route path='/dms/canceled-orders/view' element={<CanceledOrderView/>} />

         {/* Reviews and Feedback */}
         {/* Product Reviews */}
         <Route path='/dms/product-review' element={<ProductReviewList/>} />
         <Route path='/dms/product-review/view' element={<ProductReviewView/>} />
         {/* Customer Feedback */}
         <Route path='/dms/customer-feedback' element={<CustomerFeedbackList/>} />
         <Route path='/dms/customer-feedback/view' element={<CustomerFeedbackView/>} />

         {/* Coupons and Discounts */}
         {/* Coupon Table */}
         <Route path='/dms/manage-coupons' element={<CouponList/>} />
         <Route path='/dms/manage-coupons/add' element={<CouponAdd/>} />
         <Route path='/dms/manage-coupons/edit' element={<CouponEdit/>} />
         <Route path='/dms/manage-coupons/view' element={<CouponView/>} />

        {/* Website */}
        <Route path='/web' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
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
  
