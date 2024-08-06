import React, { useEffect, useReducer, useState } from 'react'

const paginationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOTAL_ITEMS':
            return {
                ...state,
                totalItem: action.payload
            }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        default:
            return state;
    }
}

const Pagination = ({ imagelist, imagePerPage }) => {

    const itemsPerPage = imagePerPage || 6;
    const [paginationState, dispatch] = useReducer(paginationReducer, {
        currentPage: 1,
        totalItem: 0
    })
    const [data, setData] = useState(imagelist);

    useEffect(() => {
        dispatch({ type: 'SET_TOTAL_ITEMS', payload: data.length })
    }, [data])
    const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = data.slice(startIndex, endIndex);

    const handlePageClick = (newPage) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage })
    }

    return (
        <>
            <section>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 py-5 justify-center gap-2'>
                    {
                        displayedItems.map((data, index) => {
                            return <div key={index} className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className={`min-w-[200px] min-h-[200px] flex-1 transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(${data.image})]`} /></div>
                        })
                    }
                </div>
                <div className=' flex justify-between p-4 items-center'>
                    <p>Showing {startIndex+1}-{endIndex} of {imagelist.length} images</p>
                    <div className='flex justify-center gap-2 text-center'>
                        <button onClick={() => { handlePageClick(paginationState.currentPage - 1) }} disabled={paginationState.currentPage === 1} className='h-10 w-10 bg-slate-200 font-bold shadow-lg hover:bg-slate-400/50 rounded-full'> {'<'} </button>
                        <button onClick={() => { handlePageClick(paginationState.currentPage + 1) }} disabled={endIndex >= data.length} className='h-10 w-10 bg-slate-200 font-bold shadow-lg hover:bg-slate-400/50 rounded-full'> {'>'} </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pagination