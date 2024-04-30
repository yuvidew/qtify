import React from 'react'
import hero from '../assets/hero.svg'
import Card from './AlbumSection'

const HomePage = () => {

    return (
        <>
        <section className=' flex items-center justify-center h-[15rem] gap-x-3'>
            <div className=' flex items-center justify-center flex-col h-full text-white'>
                <h1 className=' text-[1.5rem]'>100 Thousand Songs, ad-free</h1>
                <h1 className=' text-[1.5rem]'>Over thousands podcast episodes</h1>
            </div>
            <div className="h-full flex items-center justify-center">
                <img 
                    src={hero} 
                    alt="" 
                    className=' h-[10rem] w-[10rem] object-contain'
                />
            </div>
        </section>
        <Card title = "Top Albums" />
        </>
    )
}

export default HomePage
