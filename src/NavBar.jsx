import React from 'react'
import logo from './assets/logo.svg'
import SearchComp from './qtify-com/SearchComp'
import { FeedBackComp } from './qtify-com/FeedBackComp'

const NavBar = () => {
    return (
        <header className=' bg-[#34C94B] h-[52px]'>
            <div className=' w-[95%] m-auto h-full'>
                <main className='flex items-center justify-between h-full'>
                    <div className=' w-[33.3%] flex items-center h-full justify-start'>
                        <img src={logo} alt="" />
                    </div>
                    <div className=' flex items-center justify-center h-full w-[33.3%]'>
                        <SearchComp/>
                    </div>
                    <div className=' flex items-center justify-end w-[33.3%]'>
                        <FeedBackComp/>
                    </div>
                </main>
            </div>
        </header>
    )
}

export default NavBar