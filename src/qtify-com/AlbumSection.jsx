import { Button } from '@/components/ui/button';
import React, {useState } from 'react'
import CardComp from './CardComp';
import Spinner from '@/components/ui/Spinner';

const Cards = ({albumData , title}) => {
    const [topIsCollapse , setTopIsCollapse] = useState(false)

    return (
        <>
        <section className=' w-[95%] m-auto mb-[2rem]'>
            <div className=' flex items-center justify-between'>
                <h1 className=' text-[1.2rem] text-white' >Top Album</h1>
                <Button variant = "ghost" onClick = {() => setTopIsCollapse(!topIsCollapse)}>
                    {!topIsCollapse ? "Show All" : "Collapse"}
                </Button>
            </div>
            {albumData !==0 ?(<div className=' relative mt-5'>
                <section 
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
                <div className=' w-[30rem] m-auto h-[10rem] flex items-center justify-center'>
                    <Spinner/>
                </div>
            )}
        </section>
        </>
    )
}

export default Cards