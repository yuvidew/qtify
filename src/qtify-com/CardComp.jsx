import React from 'react'
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'


const CardComp = ( {ele}) => {
    return (
        <NavLink to={'/'}>
            <Card className = "w-[15rem] h-[16rem] p-0 overflow-hidden group">
                <div className=' relative h-full'>
                    <Button variant = "default" className = "absolute top-3 left-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300">{ele.songs.length} songs</Button>
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
        </NavLink>
    )
}

export default CardComp