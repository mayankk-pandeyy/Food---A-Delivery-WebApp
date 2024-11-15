import React from 'react'
import menu from "../assets/menu.png"
import {menuData} from "../../src/data"

const ExploreMenu = ({category, setCategory}) => {

    function categoryHandler(value){
        if(category === value){
            setCategory("All");
        }else{
            setCategory(value);
        }
    }

  return (
    <div className='w-[90%] mx-auto font-dm-sans'>
        <div className='flex items-center gap-2'>
            <img src={menu} className='w-[40px]'/>
            <span className='text-3xl font-bold text-[#03081F]'>
                Explore Our Menu
            </span>
        </div>

        <div className='text-xl text-[#03081F]'>
            Indulge in flavors crafted to satisfy every craving—discover the full menu and find your next favorite bite! 
        </div>

        <div className='flex justify-between mt-5'>
            {menuData.map((item, index)=>{
                return (
                    <div key={index} className='flex flex-col items-center cursor-pointer' onClick={()=>categoryHandler(item.menuName)}>
                        <div className={category===item.menuName ? "w-[100px] h-[100px] rounded-full overflow-hidden transition-all border-[3px] border-[#FC8A06]" : "w-[100px] h-[100px] rounded-full overflow-hidden"}>
                            <img src={item.menuImg} className='w-[100%] h-[100%] object-cover'/>
                        </div>
                        <span className='font-semibold'>
                            {item.menuName}
                        </span>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default ExploreMenu