import React, { useState } from 'react'
import Pagination from './Pagination'

const imagesData = [
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'food',
      image: 'https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg',
    },
    {
      category: 'ambience',
      image:'https://pix10.agoda.net/hotelImages/5111608/-1/fec8668a73dfd90e5b3f2458f678bb3c.jpg?ca=16&ce=1&s=702x392'
    },

]

const Photos = () => {

  const [imagelist, setImagelist] = useState(imagesData);
  console.log(imagelist);
  const imagePerPage = 12;
  

  return (
    <>
      <section className='border-b-2'>
        <p className='text-2xl font-semibold'>Garden Grille & Bar - Hilton Garden Inn Photos</p>
        <div>
          <div className='flex mt-6 gap-4'>
            <button className='text-gray-500 rounded-md border py-2 px-4'>All (247)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Food (184)</button>
            <button className='text-gray-500 rounded-md border py-2 px-4'>Ambience (29)</button>
          </div>
        </div>
        <Pagination imagelist={imagelist} imagePerPage={imagePerPage} />
      </section>
    </>
  )
}

export default Photos