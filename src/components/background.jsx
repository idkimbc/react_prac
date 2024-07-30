import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen z-[2]'>
        <div className='absolute top-[5%] w-full flex justify-center py-10 text-2xl font-semibold text-zinc-600 tracking-wide'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-zinc-900'>Docs</h1>
    </div>
  )
}

export default Background