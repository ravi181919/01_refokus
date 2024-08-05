import React from 'react'

const Marquee = ({src}) => {
  return (
    <div className='flex w-full mt-10 gap-16 whitespace-nowrap overflow-hidden'>
      {src.map((elem, index) => <img key={index} src={elem} className='flex-shrink-0 w-20'/>)}
      {src.map((elem, index) => <img key={index} src={elem} className='flex-shrink-0 w-20'/>)}
    </div>
  )
}

export default Marquee
