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
/* Reviews and fwwdback */
/* Product Reviews */
import { ProductReviewList } from './pages/dms/ReviewsAndFeedback/ProductReviews/ProductReviewList';
import { ProductReviewView } from './pages/dms/ReviewsAndFeedback/ProductReviews/ProductReviewView';
/* Customer Feedback */
import { CustomerFeedbackList } from './pages/dms/ReviewsAndFeedback/CustomerFeedback/CustomerFeedbackList';
import { CustomerFeedbackView } from './pages/dms/ReviewsAndFeedback/CustomerFeedback/CustomerFeedbackView';
/* Coupons and Discount */
/* Coupons */
import { CouponList } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponList';
import { CouponAdd } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponAdd';
import { CouponEdit } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponEdit';
import { CouponView } from './pages/dms/CouponsAndDiscounts/CouponTable/CouponView';
/* Discount */
import { DiscountList } from './pages/dms/CouponsAndDiscounts/DiscountTable/DiscountList';
import { DiscountAdd } from './pages/dms/CouponsAndDiscounts/DiscountTable/DiscountAdd';
import { DiscountEdit } from './pages/dms/CouponsAndDiscounts/DiscountTable/DiscountEdit';
import { DiscountView } from './pages/dms/CouponsAndDiscounts/DiscountTable/DiscountView';
/* Report and Analysis */
import { SalesReportList } from './pages/dms/ReportsAndAnalysis/SalesReports/SalesReportList';
import { SalesReportView } from './pages/dms/ReportsAndAnalysis/SalesReports/SalesReportView';
import { ProductPerformanceList } from './pages/dms/ReportsAndAnalysis/ProductPerformance/ProductPerformanceList';
import { ProductPerformanceView } from './pages/dms/ReportsAndAnalysis/ProductPerformance/ProductPerformanceView';
import { CustomerActivityList } from './pages/dms/ReportsAndAnalysis/CustomerActivity/CustomerActivityList';
import { CustomerActivityView } from './pages/dms/ReportsAndAnalysis/CustomerActivity/XustomerActivityView';
/* Payment and Transction */
import { PaymentHistoryList } from './pages/dms/PaymentAndTransaction/PaymentHistory/PaymentHistoryList';
import { PaymentHistoryView } from './pages/dms/PaymentAndTransaction/PaymentHistory/PaymentHistoryView';
import { RefundList } from './pages/dms/PaymentAndTransaction/Refunds/RefundList';
import { RefundAdd } from './pages/dms/PaymentAndTransaction/Refunds/RefundAdd';
import { RefundEdit } from './pages/dms/PaymentAndTransaction/Refunds/RefundEdit';
import { RefundView } from './pages/dms/PaymentAndTransaction/Refunds/RefundView';
import { InvoiceList } from './pages/dms/PaymentAndTransaction/Invoice/InvoiceList';
import { InvoiceAdd } from './pages/dms/PaymentAndTransaction/Invoice/InvoiceAdd';
import { InvoiceEdit } from './pages/dms/PaymentAndTransaction/Invoice/InvoiceEdit';
import { InvoiceView } from './pages/dms/PaymentAndTransaction/Invoice/InvoiceView';
/* Settings */
import { ProfileSetting } from './pages/dms/Settings/ProfileSetting';

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
         {/* Discount Table */}
         <Route path='/dms/discounts' element={<DiscountList/>} />
         <Route path='/dms/discounts/add' element={<DiscountAdd/>} />
         <Route path='/dms/discounts/edit' element={<DiscountEdit/>} />
         <Route path='/dms/discounts/view' element={<DiscountView/>} />

         {/* Reports And Analysis */}
         {/* Sales Report */}
         <Route path='/dms/sales-report' element={<SalesReportList/>}/>
         <Route path='/dms/sales-report/view' element={<SalesReportView/>} />
         {/* Product Performance */}
         <Route path='/dms/product-performance' element={<ProductPerformanceList/>} />
         <Route path='/dms/product-performance/view' element={<ProductPerformanceView/>} />
         {/* Customer Activity */}
         <Route path='/dms/customer-activity' element={<CustomerActivityList/>} />
         <Route path='/dms/customer-activity/view' element={<CustomerActivityView/>} />
              
        {/* Payment and Transaction */}
        {/* Payment History */}
        <Route path='/dms/payment-history' element={<PaymentHistoryList/>} />
        <Route path='/dms/payment-history/view' element={<PaymentHistoryView/>} />
        {/* Refunds */}
        <Route path='/dms/refunds' element={<RefundList/>} />
        <Route path='/dms/refunds/add' element={<RefundAdd/>} />
        <Route path='/dms/refunds/edit' element={<RefundEdit/>} />
        <Route path='/dms/refunds/view' element={<RefundView/>} />  
        {/* Invoice */}
        <Route path='/dms/invoice' element={<InvoiceList/>} />
        <Route path='/dms/invoice/add' element={<InvoiceAdd/>} />
        <Route path='/dms/invoice/edit' element={<InvoiceEdit/>} />
        <Route path='/dms/invoice/view' element={<InvoiceView/>} />

        {/* Setting */}
        <Route path='/dms/profile-setting' element={<ProfileSetting/>} />

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
  
