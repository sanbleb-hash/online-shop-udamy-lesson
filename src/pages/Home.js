import React from 'react'

const Home = ({ sectionz}) => {

    return (
        <main className = 'w-full h-auto bg-red-100  '>
            <div className='px-5 grid grid-cols-3 grid-rows-2 items-center justify-between gap-2 ' >
                {sectionz.map((section)=>(
                    <div className='overflow-hidden'>
                    <div key={section.id} className='
                    overflow-hidden
                    hover:scale-110 
                    transform 
                    translate-x-2 
                    translate-y-2  
                    transition delay-300 duration-500 ease-in-out 
                    h-72 
                    bg-cover bg-no-repeat 
                    ' style={{backgroundImage: `url(${section.imageUrl})`
                    }}>
                        <h1 className='text-gray-700
                         opacity-70 
                         hover:opacity-60 
                         my-20 mx-28 
                         cursor-pointer 
                         bg-gray-50 text-center  
                         inline-block border 
                         border-white 
                         p-10 text-4xl' 
                         >{section.title}</h1>
                    </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Home
