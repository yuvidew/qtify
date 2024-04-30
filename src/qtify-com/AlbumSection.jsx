import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react'
import CardComp from './CardComp';
import Spinner from '@/components/ui/Spinner';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const AlbumSection = ({AlbumData , title}) => {
    const [isCollapse , setIsCollapse] = useState(false)
    const sliderRef = useRef(null)

    const scrollBtn = (index) => {
        sliderRef.current.scrollBy({
            left: sliderRef.current.clientWidth * index, // Adjust this based on the slide width
            behavior: 'smooth',
        })
    }

    return (
        <section className=' w-[95%] m-auto mb-[2rem]'>
            <div className=' flex items-center justify-between'>
                <h1 className=' text-[1.2rem] text-white' >{title}</h1>
                <Button variant = "ghost" onClick = {() => setIsCollapse(!isCollapse)}>
                    {!isCollapse ? "Show All" : "Collapse"}
                </Button>
            </div>
            {AlbumData !==0 ?(<div className=' relative mt-5'>
                {!isCollapse && <div className=' z-[99] absolute top-[45%] w-full flex items-center justify-between'>
                    <Button 
                        variant = "green"  
                        className = "rounded-[100rem] w-[2.5rem] h-[2.5rem] ml-[-1rem]" 
                        size = "sm"
                        onClick={() => scrollBtn(-1)}
                    >
                        <ArrowLeft/>
                    </Button>
                    <Button 
                        variant = "green" 
                        className = "rounded-[100rem] w-[2.5rem] h-[2.5rem] mr-[-1rem]" 
                        size = "sm"
                        onClick={() => scrollBtn(1)}
                    >
                        <ArrowRight className=' h-10 w-10'/>
                    </Button>
                </div>}
                <section 
                    ref = {sliderRef}
                    className={ 
                        !isCollapse 
                        ? ' flex items-center gap-x-3 overflow-x-scroll scroll-smooth' 
                        : " flex w-full items-center gap-x-3"
                    }

                    style={{
                        scrollbarWidth : "none"
                    }}
                >
                    <div className={!isCollapse ? ' flex items-center gap-3 py-2' : "grid grid-cols-6 gap-y-2 gap-x-2"}>
                        {AlbumData !== null ? (
                            AlbumData.map(ele => (
                                <CardComp key={ele.id} ele = {ele} />
                            ))
                        ) : (
                            <Spinner/>
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
    )
}

export default AlbumSection