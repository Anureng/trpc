import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div>

            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div>
                    </div>
                    <div className='flex items-center text-sm space-x-3 mr-4'>
                        <p>Help</p>
                        <p>Orders & Return</p>
                        <p>Hi, Jhon</p>
                    </div>
                </div>
                <div className='flex items-center justify-evenly p-2 ' >
                    <div className='text-3xl font-bold'>
                        Ecommerce
                    </div>
                    <div className='flex list-none space-x-6 text-lg font-medium'>
                        <li>Categories</li>
                        <li>Sale</li>
                        <li>Clearance</li>
                        <li>New Stock</li>
                        <li>Trending</li>
                    </div>
                    <div className='flex items-center text-2xl space-x-8 mr-2'>
                        <CiSearch />
                        <CiShoppingCart />
                    </div>
                </div>
            </div>
            <div className='bg-[#F4F4F4] w-screen flex items-center justify-center p-2 space-x-4'>
                <FaAngleLeft />
                <p>

                    Get 10% off on business sign up
                </p>
                <FaAngleRight />
            </div>
        </div>
    )
}

export default Navbar
