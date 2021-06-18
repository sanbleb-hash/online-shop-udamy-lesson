import React from 'react'
import CollectionItem from './CollectionItem'

const PreviewCollection = ({title, items}) => {
    return (
        <div className='mx-auto w-big'>
            <h1 className='font-semibold text-gray-600 text-3xl mt-12'>{title.toUpperCase()}</h1>
            <div className='flex items-center justify-between'>
                {
                   items.filter((item, indx) => indx < 4).map(({id, ...otherItemProps})=> (
                       <CollectionItem key={id} {...otherItemProps} />
                   )) 
                }
            </div>
        </div>
    )
}

export default PreviewCollection
