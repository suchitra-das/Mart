import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Productpage from "./Product";
import Cartpage from "./Cart";
import { createContext, useState} from "react";
import Nav from "./Navbar";
import Footer from "./Footer";
import Shop from "./Shop";
import ProductDetail from "./ProductDetail";
export const AppContextNew=createContext();
function AppTask() {
const [cart,setCart]=useState({})
const [products,setProducts]=useState([])
const [qty,setQty]=useState(1)
const addtocart = (id) => {
    setCart((cart) => ({ ...cart, [id]: cart[id] ? cart[id] + qty : qty }));
    toast.success("Your item has been added!")
  };
  const handleQty = (e) => {
    setQty(Number(e.target.value)); 
  };
const inc = (product) => {
  setCart((cart) => ({ ...cart, [product.id]: (cart[product.id] ? cart[product.id] : 0) + 1 }));
};
const dec = (product) => {
  setCart((cart) => ({ ...cart, [product.id]: (cart[product.id] ? cart[product.id] : 0) -1 }));
};
  return (
    <div>
        <BrowserRouter>
            <AppContextNew.Provider value={{cart,setCart,products,setProducts,inc,dec,addtocart,qty,setQty,handleQty}}>
                <Nav/>
                <Routes>
                    <Route path="/"element={<Productpage/>}></Route>
                    <Route path="/shop"element={<Shop/>}></Route>
                    <Route path="/cart"element={<Cartpage/>}></Route>
                    <Route path="/shop/detail" element={<ProductDetail/>} />
                </Routes>
                <Footer/>
            </AppContextNew.Provider>
        </BrowserRouter>
    </div>
  );
}
export default AppTask;
