import React from 'react'

const CreateNotes = () => {
  return (
    <div>
      <div className='pt-6 mb-8 border-b border-white'>
        <button className='text-xl font-bold cursor-pointer'> ← Back</button>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-4'>Create Notes</h1>
      </div>
      <div className='h-auto flex flex-col items-start justify-center p-4 rounded-lg'>
        <form className='w-full'>
          <label className='text-2xl block mb-2'>
            Title
            <span className='text-red-500'>*</span>
          </label>
          <input 
          className='w-full border border-gray-300 bg-gray-900 rounded p-2 mb-4'
          type="text" 
          placeholder='Enter title' />

          <label className='text-2xl block mb-2'>
            Description
            <span className='text-red-500'>*</span>
          </label>
          <input 
          className='w-full border border-gray-300 bg-gray-900 rounded p-2 mb-4'
          type="text" 
          placeholder='Enter description' />

          <label className='text-2xl block mb-2'>
            Tags
          </label>
          <input 
          className='w-fit border border-gray-300 bg-gray-900 rounded p-2 mb-4 mr-4'
          type="text" 
          placeholder='Enter tags' />
          <button 
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors'
          type='button'>
            Add Tags
          </button>

          <label className='text-2xl block mb-2'>
            Content
          </label>
          <textarea 
          name="content" 
          id="content" 
          className='w-full h-[350px] border border-gray-300 bg-gray-900 rounded p-2 mb-4'
          placeholder='Enter your content here...'>
          </textarea>
          <div className='flex justify-end gap-4'>
            <button className='bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-800 transition-colors'>
              Cancel
            </button>

            <button 
            className='bg-green-800 text-white px-4 py-2 rounded mt-4 hover:bg-green-900 transition-colors'>
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNotes