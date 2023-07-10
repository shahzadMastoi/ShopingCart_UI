
import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
import { useState } from "react";
import CartList from "./CartList";
import Navbar from "./Navbar";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;`;

const Products = () => {
  const [cart,setCart] = useState([]);
  const [showCart,setshowCart] = useState(false)
  localStorage.setItem("cart", JSON.stringify(cart));
  const addToCart = (deta)=>{
    setCart([...cart,deta])
    window.dispatchEvent(new Event("storage"));
    console.log(cart.length);
  }
    return (
      
      <Container>
         <CartList cart = {cart}/>
        {popularProducts.map((item) => {
            return(
            <>
            <Product items={item}  addToCart={addToCart} />
           
            </>)
        })}
        
      </Container>
    );
  };
  
  export default Products;