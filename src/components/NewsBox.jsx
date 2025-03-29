import React from 'react'

const NewsBox = () => {
  return (
    <div className='w-full flex flex-col mx-auto justify-center items-center gap-4 mb-40'>
      <p className='text-xl font-semibold text-black text-center' >Subscribe now & get 20% off</p>
      <p className='text-gray-400 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form className='w-full sm:w-1/2 mx-auto flex justify-center items-center'>
        <div className='flex flex-grow'>
          <input
            type="email"
            placeholder='Enter your email'
            className='placeholder-gray-300 outline-none w-full px-4 py-4 border-2 border-r-0 border-black'
          />
        </div>
        <div className='flex-shrink-0'>
          <button 
            type="button" 
            className='px-10 py-4 bg-black text-white border-2 border-black text-center'
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsBox