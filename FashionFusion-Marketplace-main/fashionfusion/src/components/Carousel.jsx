import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='bg-gradient-to-br from-sky-950 '>
    <div className='w-11/12 m-auto '>
      <div className='mt-1'>
        <Slider {...settings}>       
          {data.map((d, index) => (
            <div key={index} className='flex'>
              <img className='p-1 w-[100%] h-[300px] rounded-xl' src={d.img} alt="" />
            </div>
          ))}   
        </Slider>
  
      </div>
    </div>
    </div>
  );
}

const data = [
  {
    img: "https://media.istockphoto.com/id/1451343245/photo/3d-rendering-3d-red-sale-word-isolated-over-white-background.webp?b=1&s=170667a&w=0&k=20&c=9cqm13zmq4x4jVDc4i1PSYONgXppJ1c7KH8W2q61sAk="
    
  },
  {
    img: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BlY2lhbCUyMG9mZmVyc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    img: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vaXN0dXJpemVyfGVufDB8fDB8fHww"
  },
  {
    img : "https://images.unsplash.com/photo-1583573636246-18cb2246697f?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

export default Carousel;
