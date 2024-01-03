import React from 'react'

const HeroSecond = () => {
  return (
    <>
        <div className='bg-[#f4f4f4] pb-5'>
            <div className='bg-white rounded-lg w-full md:max-w-3xl mx-auto py-5 -translate-y-8'>
                <p className='text-3xl font-semibold text-center tracking-wide my-2'>Get started with online ordering</p>
                <p className='text-lg font-normal text-gray-500 text-center'>Please keep the documents ready for a smooth signup</p>
                <div className='flex mx-auto w-full my-8 px-10'>
            <ul className='flex-1 flex flex-col gap-4'>
                <li className='flex gap-2 items-center'><img width={20} src='Eo_circle_green_checkmark.svg'/>FSSAI license copy <a href="#" className='text-blue-600'>(apply now)</a></li>
                <li className='flex gap-2 items-center'><img width={20} src='Eo_circle_green_checkmark.svg'/>Regular GSTIN (if applicable)</li>
                <li className='flex gap-2 items-center'><img width={20} src='Eo_circle_green_checkmark.svg'/>Your restaurant menu</li>
            </ul>
            <ul className='flex-1 flex flex-col gap-4'>
                <li className='flex gap-2 items-center'><img width={20} src='Eo_circle_green_checkmark.svg'/>PAN card copy</li>
                <li className='flex gap-2 items-center'><img width={20} src='Eo_circle_green_checkmark.svg'/>Bank account details</li>
                <li className='flex gap-2 items-center'><img width={20} src='Eo_circle_green_checkmark.svg'/>Dish images for top 5 items</li>
            </ul>
            </div>
            </div>
        </div>
    </>
  )
}

export default HeroSecond