import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'
import CardComp from './CardComp';
import Spinner from '@/components/ui/Spinner';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const Cards = ({ albumData , title}) => {
    const [topIsCollapse , setTopIsCollapse] = useState(false)
    const topSliderRef = useRef(null)

    const topScrollBtn = (index) => {
        topSliderRef.current.scrollBy({
            left: topSliderRef.current.clientWidth * index, // Adjust this based on the slide width
            behavior: 'smooth',
        })
    }

    return (
        <>
        
        <section className=' w-[95%] m-auto mb-[2rem]'>
                {title !== null && 
                    <div className=' flex items-center justify-between'>
                        <h1 className=' text-[1.2rem] text-white' >{title} Album</h1>
                        <Button variant = "ghost" onClick = {() => setTopIsCollapse(!topIsCollapse)}>
                            {!topIsCollapse ? "Show All" : "Collapse"}
                        </Button>
                    </div>
                }
            {albumData !==0 ?(<div className=' relative mt-5'>
                {!topIsCollapse && <div className=' z-[99] absolute top-[45%] w-full flex items-center justify-between'>
                    <Button 
                        variant = "green"  
                        className = "rounded-[100rem] w-[2.5rem] h-[2.5rem] ml-[-1rem]" 
                        size = "sm"
                        onClick={() => topScrollBtn(-1)}
                    >
                        <ArrowLeft/>
                    </Button>
                    <Button 
                        variant = "green" 
                        className = "rounded-[100rem] w-[2.5rem] h-[2.5rem] mr-[-1rem]" 
                        size = "sm"
                        onClick={() => topScrollBtn(1)}
                    >
                        <ArrowRight className=' h-10 w-10'/>
                    </Button>
                </div>}
                <section 
                    ref = {topSliderRef}
                    className={ 
                        !topIsCollapse 
                        ? ' flex items-center gap-x-3 overflow-x-scroll scroll-smooth' 
                        : " flex w-full items-center gap-x-3"
                    }

                    style={{
                        scrollbarWidth : "none"
                    }}
                >
                    <div className={!topIsCollapse ? ' flex items-center gap-3 py-2' : "grid grid-cols-6 gap-y-2 gap-x-2"}>
                        {albumData.length !== 0 ? (
                            albumData.map(ele => (
                                <TooltipProvider key={ele.id} >
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CardComp ele = {ele} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {ele.songs.length} songs
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>

                            ))
                        ) : (
                            <div className=' flex items-center justify-center w-full h-full'>
                            <Spinner/>
                            </div>
                        )}
                    </div>
                </section>
            </div>)
            : (
                <div>
                    <Spinner/>
                </div>
            )}
        </section>
        </>
    )
}

export default Cards