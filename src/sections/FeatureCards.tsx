import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
        <div className='mx-auto grid-3-cols'>
            {abilities.map(({imgPath,title,desc})=>(
                <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4 items-center text-center hover:scale-105 transition-all duration-300 ease-out relative overflow-hidden group'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='relative z-10'>
                        <div className='size-14 flex items-center justify-center rounded-full'>
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                        <p className='text-white-50 text-lg'>{desc}</p>
                    </div>
                </div>
                
            ))}

        </div>
        
    </div>
  )
}

export default FeatureCards