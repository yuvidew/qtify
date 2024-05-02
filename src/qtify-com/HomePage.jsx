import React, { useEffect, useState } from 'react'
import hero from '../assets/hero.svg'
import Card from './AlbumSection'
import useFetch from '@/hook/useFetch'
import { Songs } from './Songs'

const HomePage = () => {
    const [getSongs] = useFetch()
    const [topAlbumData , setTopAlbumData] = useState([])
    const [newAlbumData , setNewAlbumData] = useState([])
    const [songGenres , setSongGenres] = useState([])
    const [songs , setSongs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const topAlbumData = await getSongs('https://qtify-backend-labs.crio.do/albums/top')
            const newAlbumData = await getSongs('https://qtify-backend-labs.crio.do/albums/new')
            const genres = await getSongs('https://qtify-backend-labs.crio.do/genres')
            const songs = await getSongs('https://qtify-backend-labs.crio.do/songs')

            setTopAlbumData(topAlbumData)
            setNewAlbumData(newAlbumData)
            setSongGenres(genres)
            setSongs(songs)
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
        <Card albumData = {topAlbumData} title={"Top"} />
        <Card albumData = {newAlbumData} title={"New"} />
        <Songs genres = {songGenres.data} albumData = {songs} title={"Songs"} />
        </>
    )
}

export default HomePage
