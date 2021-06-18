import React from 'react'

const CollectionItem = ({ id, imageUrl, name, price}) => {
    return (
        <div className='w-1/5 m-4 shadow-lg '>
        <div className='h-96 bg-no-repeat bg-cover w-full' style={{ backgroundImage: `url(${imageUrl})`}}/>
        <div className='flex justify-between items-center p-2 bg-gray-100' >
            <span >{name}</span>
            <small>${price}</small>
            
        </div>            
        </div>
    )
}

export default CollectionItem
