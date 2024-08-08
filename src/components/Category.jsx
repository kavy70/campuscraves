import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
export default function Category() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    
    if(categories.length - 6 === slide){
      return false;
    }
    setSlide(slide + 3);
  }
  const prevSlide = () => {
   
    if(slide===0){
      return false;
    }
    setSlide(slide - 3);
  }

  const categories = [
    {
      img: "images/category/Pizzas.png"
    }, {
      img: "images/category/Pav Bhaji.png"
    },
    {
      img: "images/category/burger.png"
    }, {
      img: "images/category/cake.png"
    },
    {
      img: "images/category/chocolate icecream.png"
    }, {
      img: "images/category/chole bhature.png"
    },
    {
      img: "images/category/Dosa.png"
    }, {
      img: "images/category/Khichdi.png"
    },
    {
      img: "images/category/Momos.png"
    }, {
      img: "images/category/Noodles.png"
    },
    {
      img: "images/category/North indian.png"
    }, {
      img: "images/category/Paratha.png"
    }, {
      img: "images/category/pasta.png"
    }
    , {
      img: "images/category/Pure Veg.png"
    }
    , {
      img: "images/category/Rolls1.png"
    }
    , {
      img: "images/category/Salad-1.png"
    }
    , {
      img: "images/category/Salad.png"
    }
    , {
      img: "images/category/Chinese.png"
    }
  ]


  return (
    <div className='max-w-[1200px] overflow-hidden mx-auto '>
      <div className='flex my-3 justify-between items-center'>
        <div className=' text-[25px] font-bold'>Whats Your Mind ?</div>
        <div className='flex '>
          <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><FaArrowLeft />
          </div>
          <div className='flex justify-center  items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRight />
          </div>
        </div>
      </div>

      <div className='flex duration-500'>{
        categories.map(
          (category, index) => {
            return (
              <div style={{
                transform: `translateX(-${slide * 100}%)`,
                // transform:`translateX(-600%)`
              }} key={index} className='w-[150px] shrink-0 duration-500'>
                <img src={category.img} alt="" />
              </div>
            )
          }
        )

      }

      </div>
      <hr className='my-6 border-[1px]' />
    </div>
  )
}
