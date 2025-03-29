import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className={`flex  items-center space-x-1 font-semibold mt-8 flex-wrap p-1 xs:p-0`}>
      <p className='text-3xl text-gray-500'>{text1}</p>
      <p className='text-3xl text-gray-800'>{text2}</p>
      <hr className='w-[50px] border-none bg-gray-800 h-[2px]'/>
    </div>
  )
}

export default Title
