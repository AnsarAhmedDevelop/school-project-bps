import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

function Header() {
  const  [open,setOpen]=useState(false)
    return (
        <div>
            {/* top bar */}
            <div className='bg-secondary py-1'>
                <div className='container w-11/12 mx-auto flex justify-between text-white text-xs'>
                    <p>xyz@gmail.com</p>
                    <p>Facebook</p>
                </div>
            </div>
            {/* logo */}
            <div className='container w-11/12 mx-auto py-1 flex justify-between items-center'>
                <img src='./images/logo-name.jpg' className='w-[300px] sm:w-auto h-[40px] sm:h-auto' alt='logo' />
                <div className='sm:hidden'>
                    <button onClick={()=>setOpen(!open)}>{open ? <X color="black"/> : <Menu color="black" />}</button>
                    
                </div>
            </div>
            {/* navigation */}
            <nav className='bg-primary '>
                <ul className={`container  w-11/12 mx-auto  divide-white sm:flex flex-col sm:flex-row items-center justify-between divide-y-2 sm:divide-y-0 gap-x-5 py-2 text-white ${open?"block":"hidden"}`}>
                    <Link to="/"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Home</li></Link>
                    <Link to="/about"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>About Us</li></Link>
                    <Link to="/admission"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Admission</li></Link>
                    <Link to="/mandatory-public-disclosure"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Mandatory Public Disclosure</li></Link>
                    <Link to="/academic"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Academic</li></Link>
                    <Link to="/achievement"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Achievement</li></Link>
                    <Link to="/infrastructure"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Infrastructure</li></Link>
                    <Link to="/gallery"><li className='sm:border-0 border-b-2 border-white sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Gallery</li></Link>
                    <Link to="/contact"><li className=' sm:py-0 font-semibold py-2' onClick={()=>setOpen(!open)}>Contact Us</li></Link>
                </ul>
               
            </nav>
        </div>
    )
}

export default Header