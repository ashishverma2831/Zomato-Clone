import React from 'react'

const FilterButton = ({text}) => {
  return (
    <>
        <button className='min-h-10 shrink-0 whitespace-nowrap text-gray-400 hover:bg-gray-100 font-normal border-[1.6px] hover:shadow px-3 py-2 rounded-lg'>
            {text}
        </button>
    </>
  )
}

export default FilterButton