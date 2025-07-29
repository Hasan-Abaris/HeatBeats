import React from 'react'
import { FaDatabase } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
function AccountBalace() {
    return (
        <div className="bg-white shadow-md px-6 py-3 ">
            <div className='border-b border-gray-200'>
                <h2 className='text-3xl font-extrabold '>Account Balance</h2>
                <div className='flex my-3 gap-4'>
                    <span className='textBlueDark text-4xl'><FaDatabase /></span>
                    <span className='text-4xl'><FaRupeeSign /></span>
                    <span className='text-4xl font-bold'>1695.2</span>
                </div>
            </div>
            <div className='my-4'>
                <span><i>Promotional Credits</i></span>
                <div className='flex'>
                    <div className='flex'>
                        <span className='text-4xl'><FaRupeeSign /></span>
                        <span className='text-4xl font-bold'>1695.2</span>
                    </div>
                    <div className='bg-gray-300 p-2 rounded-md'>
                        <small className='line-clamp-2'>Your SLA credit <br /> worth  1695 will expire <br /> in 2 Days</small>
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <span><i>Referral & Refund Credits</i></span>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <span className='text-4xl'><FaRupeeSign /></span>
                        <span className='text-4xl font-bold'>0</span>
                    </div>
                    <div className='bg-gray-300 p-2 rounded-md'>
                        <small className='line-clamp-2'>Non-expirable<br /> in 2 Days</small>
                    </div>
                </div>
            </div>

            <div className='w-64'><Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        What is SLA Consultant of India Cash?
                    </AccordionTrigger>
                    <AccordionContent>
                        SLA Consultant of India Cash is an easy-to-use online wallet to store all your promotional, referral, cashback or refund credits with SLA Consultant of India.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        How does SLA Consultant of India Cash work?
                    </AccordionTrigger>
                    <AccordionContent>
                        Every time you make a purchase with us, refer a friend, request for a cancellation or we are simply too happy with you, we add Consultant of India Cash to your wallet. You can use this Consultant of India Cash to buy further courses with us, that align with your career.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Will my SLA Consultant of India Cash expire?
                    </AccordionTrigger>
                    <AccordionContent>
                        SLA Consultant of India Cash credited to you for bringing us referrals or as a refund will never expire. SLA Consultant of India cash earned as cashback against a purchase will expire from your account in 90 days. Besides these, we will award you every now and then with promotional credits, but keep your eyes open, as they come with variable validity!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        How to earn more SLA Consultant of India Cash?
                    </AccordionTrigger>
                    <AccordionContent>
                        This is easy : Refer a friend and earn up to 3000 SLA Consultant of India cash. Purchase a course with us, and 20% of the bill value will be credited to your account.
                    </AccordionContent>
                </AccordionItem>
            </Accordion></div>
        </div>
    )
}

export default AccountBalace
