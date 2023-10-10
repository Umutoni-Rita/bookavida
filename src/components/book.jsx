
import React from 'react';

export default function Book ({ id, coverSrc, title, author, releaseYear, bookLink }) {
    return (
        <div key={id} className='flex items-start max-w-[300px] mb-3 p-3 border border-gray-300 rounded-md'>
            <img src={coverSrc} alt="Book cover" className='w-[100px] h-auto mr-3'/>
            <div className='flex flex-col flex-1'>
                <h1 className='font-semibold text-lg overflow-hidden whitespace-nowrap overflow-ellipsis mb-1'>{title}</h1>
                <h2 className='font-medium text-base mb-1'>{author}</h2>
                {releaseYear && <p className='font-normal text-sm mb-1'>Release Year: {releaseYear}</p>}
                <a href={bookLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline hover:text-blue-700'>Go to book</a>
            </div>
        </div>
    );
}
