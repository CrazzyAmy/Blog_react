import React from "react";
import Desktop from "./Desktop.jsx";
import './App.css';
import './all.css';
import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { useEffect , useState} from 'react';
import { useTransition, animated, useSpring } from '@react-spring/web'
import {
    BrowserRouter, 
    HashRouter,
    NavLink,
    Link,
    Route,
    Routes,
    useNavigate,
    useParams,
    Outlet
  } from 'react-router-dom';
// import { clear } from '@testing-library/user-event/dist/clear';
import { AuthProvider } from "./Context.js";
import CartContext from './CartContext.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function App() {
  const [CartArray, setCartArray] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"
  });
  const [token, setToken] = useState(null);
  
  return (
    <div className="app">
        <AuthProvider value={{ token, setToken }}>
          <CartContext.Provider value={{CartArray, setCartArray, cartItems,setCartItems}}>
            <Routes>
            
                <Route path="/" element={<Desktop />} />
            </Routes>
          </CartContext.Provider>
        </AuthProvider>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer" type="module"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.8/swiper-bundle.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer" type="module"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer" type="module"></script>
       <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"  type="module"></script>
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css"/>
    </div>
  );
}

export default App;
