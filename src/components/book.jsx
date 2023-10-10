import React from 'react';

export default function Book ({key, coverSrc, title, author, releaseYear, bookLink}) {

    return(
        <div key={key}>
            <img src={coverSrc} alt="Book cover" />
            <h1 className=' font-semibold text-xl'>{title}</h1>
            <h1 className=' font-medium text-lg'>{author}</h1>
            <p className=' font-normal text-base'>{releaseYear}</p>
            <a href={bookLink} target='_blank'>Go to book</a>

            
        </div>
    )
}