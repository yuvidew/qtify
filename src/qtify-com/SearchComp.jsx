import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const SearchComp = () => {
    return (
        <div className=' w-[20rem] flex items-center bg-white border-[#000] border-2 rounded-md '>
            <Input className = "border-none" placeholder = "Search a album of your choice" />
            <div className='h-full w-[3rem] flex items-center justify-center border-l-2 border-[#000]'>
                <Search className=' h-5 w-4 text-[#000]' />
            </div>
        </div>
    )
}

export default SearchComp