import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Hridu is a furry cat",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download now",
                tagColor: "green"
            }
        },
        {
            desc: "Hridu is a furry cat",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download now",
                tagColor: "green"
            }
        },
        {
            desc: "Hridu is a furry cat",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download now",
                tagColor: "green"
            }
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-10 flex gap-10'>
        {data.map((item, index) => (
            <Cards data={item} reference = {ref}/>
        ))}
    </div>
  )
}

export default Foreground