import React from 'react'

const Stripe = ({dataValues}) => {
  return (
    <div className='w-80 h-10 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] border-zinc-600 px-4 py-3 flex items-center justify-between'>
      <img src={dataValues.url} alt="" className='w-24 object-cover' />
      <span className='font-medium text-xs'>{dataValues.number}</span>
    </div>
  )
}

export default Stripe
