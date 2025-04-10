"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    
    const path = usePathname();
    useEffect(()=>{
        console.log(path);
        
    })
    
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm' >
        <Image src={'/interview_logo.svg'} width={90} height={90} alt='logo' />
        <ul className=' hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'} `}>Dashboard</li>
           
            <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${path=='/dashboard/question' && 'text-primary font-bold'} `}>Question</li>
           
            <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'} `}>Feedback</li>

            <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold'} `}>About Us</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header