import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <section>
        <p className='text-2xl font-semibold'>Garden Grille & Bar - Hilton Garden Inn Menu</p>
        <div className='py-8 border-b-2'>
          <div className='overflow-hidden w-fit my-2'>
            <img className='rounded-xl shadow-lg hover:scale-110 transition-all duration-1000' src='https://b.zmtcdn.com/data/menus/733/18614733/2f28e9a9f3ac0390859dfa253e912235.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A' />
          </div>
          <div className='my-2'>
            <p>Menu</p>
            <p className='text-gray-500 text-[12px]'>6 pages</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu