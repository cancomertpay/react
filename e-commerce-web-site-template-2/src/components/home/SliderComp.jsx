import React from 'react'
import Slider from 'react-slick/lib/slider';

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
            <div className='text-6xl font-bold' >Kalite Tesadüf Değildir</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quos, nostrum corporis tempore expedita dignissimos debitis ad aspernatur soluta est eos nulla modi saepe animi repudiandae repellat deserunt quod? Assumenda?</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'  >İncele</div>
          </div>
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_455,c_limit/c8460b67-10d2-4c07-8307-95aa986e8287/dunk-low-ayakkabısı.png" alt="" />
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
            <div className='text-6xl font-bold' >Kalite Tesadüf Değildir</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quos, nostrum corporis tempore expedita dignissimos debitis ad aspernatur soluta est eos nulla modi saepe animi repudiandae repellat deserunt quod? Assumenda?</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'  >İncele</div>
          </div>
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_455,c_limit/f88208a2-2ecf-4307-b702-78fe522814a5/air-jordan-low-se-ayakkabısı-2KPKH3.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp