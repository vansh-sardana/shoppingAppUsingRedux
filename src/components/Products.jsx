import React from 'react'
import Card from './Card'
const Products = ({posts}) => {
  return (
    posts.length <= 0? <div className='grow flex items-center justify-center'>No Posts Found</div> :
    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-2 space-x-5 space-y-10 mb-10 place-items-center'>
        {
        posts.map((post)=>(
          <Card post={post} key={post.id}/>
        ))
        }
    </div>
  )
}

export default Products
