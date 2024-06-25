import React from 'react'

const FilterButton = ({text}) => {
  return (
    <>
        <button className='text-gray-400 hover:bg-gray-100 font-normal border-[1.6px] hover:shadow px-2 py-1 rounded-lg'>
            {text}
        </button>
    </>
  )
}

export default FilterButton