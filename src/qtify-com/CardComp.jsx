import React from 'react'
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
import { NavLink } from 'react-router-dom'



const CardComp = ( {ele}) => {
    return (
        <NavLink to={'/'}>
            <Card className = "w-[15rem] h-[16rem] p-0 overflow-hidden group">
                <div className=' relative h-full'>
                    <CardHeader className = "p-0 h-[85%]">
                        <div className='h-full p-0'>
                            <img className='h-full object-cover w-full' src={ele.image} alt="" />
                        </div>
                    </CardHeader>
                    <CardFooter className = "py-1 h-[15%]">
                        <p className=' bg-[#121212] text-white py-1 px-5 text-sm rounded-xl'>
                            {ele.follows} Follows
                        </p>
                    </CardFooter>
                </div>
            </Card>
            <h2 className=' mt-3 text-white'>{ele.title}</h2>
        </NavLink>
    )
}

export default CardComp