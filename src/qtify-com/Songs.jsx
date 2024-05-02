import Spinner from '@/components/ui/Spinner';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { SongCard } from './SongCard';

export const Songs = ({genres , albumData , title}) => {

    const [theKey , setTheKey] = useState("All")
    const [topIsCollapse , setTopIsCollapse] = useState(false)
    const topSliderRef = useRef(null)
    const filterData = albumData.filter((ele) => ele.genre.key == theKey)


    console.log(filterData);

    const topScrollBtn = (index) => {
        topSliderRef.current.scrollBy({
            left: topSliderRef.current.clientWidth * index, // Adjust this based on the slide width
            behavior: 'smooth',
        })
    }

    return (
        <div className=' w-[95%] m-auto text-white'>
            <h1 className=' mb-4 text-[1.2rem]'>{title}</h1>
            {genres != null ? (
                <section className=' relative'>
                    <div className=' flex items-center gap-x-3 mb-4'>
                        <Button 
                            variant = {theKey == 'All' ? "border" : "black"}
                            onClick = {() => setTheKey('All')}
                        >
                            All
                        </Button>
                        {genres.map((ele) => (
                            <Button 
                                variant = {theKey == ele.key ? "border" : "black"}
                                key={ele.key} 
                                onClick = {() => setTheKey(ele.key)}
                            >
                                {ele.label}
                            </Button>
                        ))}
                    </div>
                    <div className=' z-[99] absolute top-[50%] w-full flex items-center justify-between'>
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
                </div>
                <section 
                    ref = {topSliderRef}
                    className={ ' flex items-center gap-x-3 overflow-x-scroll scroll-smooth' }

                    style={{
                        scrollbarWidth : "none"
                    }}
                >
                    <div className={ ' flex items-center gap-3 py-2'}>
                        {filterData.length !== 0 ? (
                            filterData.map(ele => (
                                <SongCard key={ele.id} ele = {ele} />
                            ))
                        ) : (
                        albumData.map(ele => (
                            <SongCard key={ele.id} ele = {ele} />
                        ))
                        )} 
                    </div>
                </section>
                </section>
            ) : (
                <div className=' w-full h-[15rem] flex items-center justify-center'>
                    <Spinner/>
                </div>
            )}
        </div>
    )
}
