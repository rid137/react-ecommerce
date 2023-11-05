import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductContextProvider } from './components/context/ProductContext';
import { AuthContextProvider } from './components/context/AuthContext';
import Cart from './pages/cart/Cart';
import Category from './pages/category/Category';
import Home from './pages/home/Home';
import SingleProductDetails from './pages/singleProductDetail/SingleProductDetail';
import PaymentSuccess from './pages/paymentSuccess/PaymentSuccess';
import PaymentCancel from './pages/paymentCancel/PaymentCancel';
import "@stripe/stripe-js";
import LogNReg from './pages/logNreg/LogNReg';
// import ProtectedPage from './components/protectedPage/ProtectedPage';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
        <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProductDetails />} />
            {/* <Route path="/product/:id" element={<SingleProductDetails />} /> */}
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/cancel" element={<PaymentCancel />} />
            <Route path="/logNreg" element={<LogNReg />} />
          </Routes>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
