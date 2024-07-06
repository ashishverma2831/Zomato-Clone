import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Photos = () => {

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const itemsPerPage = 30;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <section>
        <p className='text-2xl font-semibold'>Garden Grille & Bar - Hilton Garden Inn Photos</p>
        <div>
          <div className='flex mt-6 gap-4'>
            <button className='text-gray-500 rounded-md border py-2 px-4'>All (247)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Food (184)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Ambience (29)</button>
          </div>
          <div className='flex flex-wrap py-5 justify-start gap-2'>
            <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://b.zmtcdn.com/data/reviews_photos/2ef/0e7e1a503ccc3c7357e1be6eaf2592ef_1605062839.jpg?output-format=webp)]' /></div>
            <div className='rounded cursor-pointer overflow-hidden transition-all duration-1000'><div className='w-[200px] h-[200px] transition-all duration-1000 bg-center bg-cover hover:scale-110 bg-no-repeat rounded bg-[url(https://b.zmtcdn.com/data/reviews_photos/2ef/0e7e1a503ccc3c7357e1be6eaf2592ef_1605062839.jpg?output-format=webp)]' /></div>
          </div>
          <div>
            <p>Showing 1-30 of 247 images</p>
            <ReactPaginate
              breakLabel={'...'}
              nextLabel={'Next >'}
              previousLabel={'< Previous'}
              pageRangeDisplayed={5}
              renderOnZeroPageCount={null}
              pageCount={10}
              onPageChange={handlePageClick}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Photos