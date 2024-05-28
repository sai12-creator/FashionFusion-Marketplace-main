
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import toast from 'react-hot-toast';
import { GiAchievement } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { SiContactlesspayment } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { IoTrophyOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { addProductInCart, addProductInWishList } from '../features/cart/cartSlice';
import DialogBox from './DialogBox';
import { MdOutlineZoomOutMap } from "react-icons/md";


const ProductDetails = () => {
    
    const products = useSelector((store) => store?.product?.products)
    const dispatch = useDispatch();
    if(!products) return null;
    const {prodId} = useParams();
    const product = products.filter((p)=>p.id == prodId);

    const [image , setImage] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setOpenDialog(true);
      };
      

    const handleAddCart = () => {
        dispatch(addProductInCart( {...product[0] , quantity:1})) 
        toast.success("Product Added in Cart");                
    }

    const handleWishList = () => {
        dispatch(addProductInWishList(product[0]))
        toast.success("Product Added in WishList");
    }

  return (
    <div className=' m-2 p-2'>
      <div className='flex justify-between gap-1'>   
            <div className='flex flex-col mt-4 m-1 gap-1'>
                {product[0].images.map((img , index)=>(
                <div key={index} className='w-14 h-14 border bg-gray-100 border-gray-400 rounded-md cursor-pointer overflow-hidden'>
                    <img className='w-full h-full p-1 rounded-md transition-transform transform-gpu hover:-translate-y-0.5' 
                    src={img} 
                    alt="sub-images"
                    onClick={()=>{setImage(index)}} />
                </div>
                ))}
            </div>
            <div className='p-2 w-3/12 h-full relative'> 
                <div className='absolute top-[40%] right-[40%] opacity-0 hover:opacity-100'>
                    <MdOutlineZoomOutMap className='text-gray-200 w-20 h-20 cursor-pointer' 
                    onClick={() => handleImageClick(product[0].images[image])}/>
                </div>
                <img className='bg-cover min-h-[380px] rounded-md cursor-pointer' 
                src={product[0].images[image]} 
                alt="" 
                onClick={() => handleImageClick(product[0].images[image])}
                />
            </div>
        <div className='w-6/12 h-full flex flex-col border border-gray-100 rounded-lg p-2'>
            <div className='w-full flex flex-col'>
                <p className='w-full font-sans text-stone-950 font-medium text-xl mb-2'>{product[0].title} -</p>
                <p className='w-7/12 font-sans text-stone-950 font-medium text-xl'>{product[0].description}</p>
            </div>

            <div className='flex mt-2 mb-2'>
                <div>
                <div className='flex items-center text-white bg-green-700 rounded-lg p-[2px] pl-[3px] font-medium'>
                <span>{product[0].rating}</span>
                <span><IoMdStar /></span>
                </div>
                </div> 
                <div className='font-medium ml-2 text-cyan-900'>
                    <h2 className='p-[1px]'>{product[0].stock}, ratings</h2>
                </div> 
            </div>

            <div className='mb-2 p-[1px] '> 
                <h2 className='text-gray-700'><span className='text-black font-medium text-base'>1K+ bought </span>in past month</h2>
            </div>
            <hr />

            <div className='flex flex-col mt-3'>
                <div className='flex just items-center'>
                    <h1 className='text-xl text-rose-900 mr-2'>-{product[0].discountPercentage}%</h1>
                    <h1 className='text-2xl text-black font-sans'>₹{product[0].price}.00</h1>
                </div>

                <div className='mt-2'> 
                {product.price > 200 ? (
                        <>
                            <p className='text-gray-600 text-sm line-through'>M.R.P.:₹{product[0].price + 200}.00</p>
                        </>
                    ) :
                        (
                            <>
                                <p className='text-gray-600 text-sm line-through'>M.R.P.:₹{product[0].price + 30}.00</p>
                            </>
                        )
                    }
                </div>
            </div>

            <div className='flex flex-col mt-2 mb-2'>
                <div><GiAchievement className='text-gray-800 text-2xl' /></div>
                 <p>Inclusive of all taxes</p>
            </div>
            <hr />

            <div className='pt-3 flex items-center'>
                <BiSolidOffer className='text-gray-600 text-2xl'/>
                <h1 className='ml-2 text-lg font-semibold  text-black'>Offers</h1>
            </div>  

            <div className='flex mt-2 mb-2'>
                <div className='w-4/12 border-2 border-gray-200 rounded-lg m-1'>
                    <div className='p-2'>
                        <h1 className='text-sm font-bold  text-black'>Bank Offer</h1>
                        <p className='w-10/12 font-sans'>10% instant discount on SBI Credit Card EMI 
                        <span className='text-blue-700 font-semibold text-sm'> T&C</span>
                        </p>
                    </div>
                </div>
                <div className='w-4/12 border-2 border-gray-200 rounded-lg m-1'>
                    <div className='p-2 '>
                    <h1 className='text-sm font-bold  text-black'>Bank Offer</h1>
                    <p className='w-10/12 font-sans'>5% Cashback on FashionFusion Axis Bank Card 
                    <span className='text-blue-700 font-semibold text-sm'> T&C</span>
                    </p>
                    </div>
                </div>
                <div className='w-4/12 border-2 border-gray-200 rounded-lg m-1'>
                    <div className='p-2 '>
                     <h1 className='text-sm font-bold  text-black'>Special Price</h1>
                     <p className='w-10/12 font-sans'>Get extra 5% off (price inclusive of cashback/coupon)
                     <span className='text-blue-700 font-semibold text-sm'> T&C</span>
                     </p>
                     </div>
                </div>
            </div>
            <hr />

            <div className='flex'>
                <div className='flex flex-col'>
                    <div className='p-2 m-2'>
                    <div>
                        <SiContactlesspayment className='text-orange-300 w-10 h-8' />
                    </div>
                    <div>
                        <p className='text-sky-950'>Pay on Delivery</p>
                    </div>
                    </div>
                </div>
                <div>
                <div className='flex flex-col'>
                    <div className='p-2 m-2'>
                    <div className=''>
                        <TbTruckDelivery  className='text-orange-300 w-10 h-8' />
                    </div>
                    <div>
                        <p className='text-sky-950'>FashionFusion <span>Delivered</span></p>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                <div className='flex flex-col'>
                    <div className='p-2 m-2'>
                    <div className=''>
                        <IoTrophyOutline className='text-orange-300 w-10 h-8' />
                    </div>
                    <div>
                        <p className='text-sky-950'>Top Brand</p>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                <div className='flex flex-col'>
                    <div className='p-2 m-2'>
                    <div className=''>
                        <CiLock className='text-orange-300 w-10 h-8' />
                    </div>
                    <div>
                        <p className='text-sky-950'>Secure <span>transaction</span></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className='w-3/12 h-screen rounded-lg flex flex-col border border-gray-200'>
        <div className='p-2 m-2'>
            <div className='p-1'>
                <h2 className='text-2xl text-black font-sans font-semibold'>₹{product[0].price}.00</h2>
            </div>

            <div className='flex flex-col p-1'>
                <div>
                    <GiAchievement className='text-gray-800 text-2xl' />
                </div>
                <div>
                    <p className='text-sky-950 font-semibold'>FREE delivery
                    <span className='text-blue-700 font-semibold text-sm'> T&C</span>
                    </p>
                </div>
            </div>

            <div className='p-1'>
                <p className='text-green-900 font-semibold text-xl'>In stock</p>
            </div>
            
            <div className='p-1'>
                <div className='text-gray-600 text-sm'>Ships from <span className='text-black text-base'>FashionFusion</span>
                </div>
            </div>{/* ship*/}

            {/* <div className='p-1 flex items-center'>
                <h1 className='text-gray-900 font-medium'>Quantity:</h1>
                <select className='ml-1 border border-gray-500 rounded-md cursor-pointer'>
                                    {[...Array(5)].map((_, index) => (
                                        <option key={index} value={index + 1}>{index + 1}</option>
                                    ))}
                                </select>
            </div> */}

            <div className='flex flex-col p-1'> 

                <div className='flex items-center justify-evenly bg-yellow-300 m-2 ml-1 rounded-lg cursor-pointer hover:bg-yellow-400' 
                onClick={handleAddCart}>
                <BsBag className='w-6 h-6'/>
                <button className='p-2 font-medium mr-1'>ADD TO CART</button>
                </div>

                <div className='flex items-center justify-evenly bg-orange-400 m-2 ml-1 rounded-lg cursor-pointer hover:bg-orange-500'
                onClick={handleWishList}>
                <CiHeart className='w-7 h-7 ml-4'/>
                <button className='p-2 font-medium'>SAVE TO WISHLIST</button>
                </div>
                
            </div>
            </div>
        </div>
      </div>
      <DialogBox open={openDialog} handleClose={() => setOpenDialog(false)} imageUrl={selectedImage} />
    </div>
  )
}

export default ProductDetails
