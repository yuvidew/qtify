import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"


export const SongCard = ({ele}) => {
    return (
        <Card className = "w-[15rem] h-[16rem] p-0 overflow-hidden group">
            <CardHeader className = "p-0 h-[85%]">
                <div className='h-full p-0'>
                    <img className='h-full object-cover w-full' src={ele.image} alt="" />
                </div>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}
