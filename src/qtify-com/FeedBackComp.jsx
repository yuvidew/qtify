import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'


export const FeedBackComp = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className = "text-[#34C94B] bg-[#121212] hover:bg-[#121212e8] ">
                    Give Feedback
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className = "text-center">
                    Feedback
                </DialogTitle>
                <DialogDescription>
                    <Input placeholder = "Full name" className = "border-[#34C94B] mb-4 mt-5" />
                    <Input placeholder = "Email Id" className = "border-[#34C94B] mb-4" />
                    <Input placeholder = "Subject" className = "border-[#34C94B] mb-4" />
                    <Textarea className = "border-[#34C94B] border-2 resize-none h-[8rem] mb-3" placeholder = "Description"></Textarea>
                    <Button className = "bg-[#34C94B] hover:bg-[#2caa3f] block m-auto text-center">
                        Submit Feedback
                    </Button>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
