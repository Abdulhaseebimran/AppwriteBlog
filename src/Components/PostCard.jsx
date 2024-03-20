import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/conf'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4 '>
              <img className='rounded-xl '
              src={appwriteService.getFilesPreview(featuredImage)} alt={title} />
            </div>
            <h2 className='font-bold text-xl'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
