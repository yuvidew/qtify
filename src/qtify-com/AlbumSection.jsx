import { Button } from '@/components/ui/button';
import React, { useEffect, useRef, useState } from 'react'
import CardComp from './CardComp';
import Spinner from '@/components/ui/Spinner';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useFetch from '@/hook/useFetch';

const Cards = ({title}) => {
    const [topIsCollapse , setTopIsCollapse] = useState(false)
    const [topAlbumData , setTopAlbumData] = useState([])
    const [newAlbumData , setNewAlbumData] = useState([])
    const [getSongs] = useFetch()
    const topSliderRef = useRef(null)
    const newSliderRef = useRef(null)

    const topScrollBtn = (index) => {
        topSliderRef.current.scrollBy({
            left: topSliderRef.current.clientWidth * index, // Adjust this based on the slide width
            behavior: 'smooth',
        })
    }

    const newScrollBtn = (index) => {
        newSliderRef.current.scrollBy({
            left: newSliderRef.current.clientWidth * index, // Adjust this based on the slide width
            behavior: 'smooth',
        })
    }


    useEffect(() => {
        const fetchData = async () => {
            const topAlbumData = await  getSongs('https://qtify-backend-labs.crio.do/albums/top')
            const newAlbumData = await getSongs('https://qtify-backend-labs.crio.do/albums/new')

            setTopAlbumData(topAlbumData)
            setNewAlbumData(newAlbumData)
        }

        fetchData()
    }, [])

    return (
        <>
          <section className=' w-[95%] m-auto mb-[2rem]'>
            <div className=' flex items-center justify-between'>
                <h1 className=' text-[1.2rem] text-white' >{title}</h1>
                <Button variant = "ghost" onClick = {() => setTopIsCollapse(!topIsCollapse)}>
                    {!topIsCollapse ? "Show All" : "Collapse"}
                </Button>
            </div>
            {topAlbumData !==0 ?(<div className=' relative mt-5'>
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
                        {topAlbumData.length !== 0 ? (
                            topAlbumData.map(ele => (
                                <CardComp key={ele.id} ele = {ele} />
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
        <section className=' w-[95%] m-auto mb-[2rem]'>
            <div className=' flex items-center justify-between'>
                <h1 className=' text-[1.2rem] text-white' >{title}</h1>
                <Button variant = "ghost" onClick = {() => setTopIsCollapse(!topIsCollapse)}>
                    {!topIsCollapse ? "Show All" : "Collapse"}
                </Button>
            </div>
            {newAlbumData !==0 ?(<div className=' relative mt-5'>
                {!topIsCollapse && <div className=' z-[99] absolute top-[45%] w-full flex items-center justify-between'>
                    <Button 
                        variant = "green"  
                        className = "rounded-[100rem] w-[2.5rem] h-[2.5rem] ml-[-1rem]" 
                        size = "sm"
                        onClick={() => newScrollBtn(-1)}
                    >
                        <ArrowLeft/>
                    </Button>
                    <Button 
                        variant = "green" 
                        className = "rounded-[100rem] w-[2.5rem] h-[2.5rem] mr-[-1rem]" 
                        size = "sm"
                        onClick={() => newScrollBtn(1)}
                    >
                        <ArrowRight className=' h-10 w-10'/>
                    </Button>
                </div>}
                <section 
                    ref = {newSliderRef}
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
                        {newAlbumData.length !== 0 ? (
                            newAlbumData.map(ele => (
                                <CardComp key={ele.id} ele = {ele} />
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