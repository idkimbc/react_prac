import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";


function Cards({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
            <FaRegFileAlt size="1.5em" />
            <p className='text-sm mt-5 font-semibold'>{data.desc}</p>
            <div className='absolute footer bottom-0 left-0 w-full'>
                <div className='flex justify-between items-center mb-4 px-8'>
                    <h5 className='tracking-wider font-semibold text-sm'>{data.filesize}</h5>
                    {data.close ? <IoClose size="1.5em" /> : <MdFileDownload size="1.5em" />}
                </div>
                {
                    data.tag.isOpen ? (
                        <div className={`tag w-full bg-${data.tag.tagColor}-500 py-3 flex justify-center items-center`}>
                            <h3 className='text-sm font-semibold tracking-wide'>{data.tag.tagTitle}</h3>
                        </div>
                    ) : null
                }
            </div>
        </motion.div>
    )
}

export default Cards