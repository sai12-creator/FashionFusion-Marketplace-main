
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct';
import EmptyCart from './EmptyCart';

const Cart = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store?.user?.userDetails)
    const cart = useSelector((s)=>s?.cart?.cartProduct)
    
    useEffect(() => {
        if(!user){
          navigate("/")
        }
      } , [])

  if(cart.length === 0) return (<><EmptyCart/></>);
  return (
    <div>
      {cart.map((cart , index) => (
        <CartProduct key={cart.id} cart={cart} index={index}/>
      ))}
    </div>
  )
}

export default Cart
