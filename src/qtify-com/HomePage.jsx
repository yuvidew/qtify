import React, { useEffect, useState } from 'react'
import hero from '../assets/hero.svg'
import AlbumSection from './AlbumSection'
import useFetch from '@/hook/useFetch'

const HomePage = () => {
    const [ getSongs] = useFetch()

    const [topAlbumData , setTopAlbumData] = useState([])
    const [newAlbumData , setNewAlbumData] = useState([])

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
        <AlbumSection AlbumData = {topAlbumData} title = "Top Albums" />
        <AlbumSection AlbumData = {newAlbumData} title = "New Albums" />
        </>
    )
}

export default HomePage