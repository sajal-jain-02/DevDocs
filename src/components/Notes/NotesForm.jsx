import React from 'react'
import { IoClose, IoSave, IoAdd } from "react-icons/io5"
const NotesForm = ({
  title,
  setTitle,
  description,
  setDescription,
  tags,
  setTags,
  tagInput,
  setTagInput,
  content,
  setContent,
  error,
  handleSubmit,
  handleAddTag,
  handleDeleteTag,
  handleCancel
}) => {
  return (
    <form className='w-full' onSubmit={handleSubmit}>
        <label className='text-2xl block mb-2'>
        Title
        <span className='text-red-500'>*</span>
        </label>
        <input 
        className='w-full border border-gray-300 bg-gray-900 rounded p-2 mb-4'
        type="text" 
        placeholder='Enter title' 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
        onKeyDown={(e) => {
        if(e.key === "Enter"){
            e.preventDefault();
        }
        }} />
        {
        error.title &&(
        <p className='text-red-500 p-2 rounded-sm'>
            {error.title}
        </p>)
        }

        <label className='text-2xl block mb-2'>
        Description
        <span className='text-red-500'>*</span>
        </label>
        <input 
        className='w-full border border-gray-300 bg-gray-900 rounded p-2 mb-4'
        type="text" 
        placeholder='Enter description' 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        onKeyDown={(e) => {
        if(e.key === "Enter"){
            e.preventDefault();
        }
        }} />
        {
        error.description &&(
        <p className='text-red-500 p-2 rounded-sm'>
            {error.description}
        </p>)
        }

        <label className='text-2xl block mb-2'>
        Tags
        <span className='text-red-500'>*</span>
        </label>
        <div className="flex items-center gap-2">
        <input 
        className='w-fit border border-gray-300 bg-gray-900 rounded p-2'
        type="text" 
        placeholder='Enter tags'
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter"){
            e.preventDefault();
            handleAddTag();
            }
        }} />
        
        <button 
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
        type='button'
        onClick={handleAddTag}>
            <IoAdd className='text-xl' />
            Add Tags
        </button>
        </div>
        {
        error.tags &&(
        <p className='text-red-500 p-2 rounded-sm'>
            {error.tags}
        </p>)
        }

        <div className="flex flex-row mb-8 mt-4">
        {tags.map((tag , index) => (
            <span key={index} className="flex flex-wrap items-center bg-gray-900 rounded-full pt-1 pb-1 pl-4 pr-2 mr-2">
            {tag}
            <IoClose 
                className="cursor-pointer hover:text-red-400 ml-2"
                onClick={() => handleDeleteTag(index)}/>
            </span>
        ))}
        </div>

        <label className='text-2xl block mb-2'>
        Content
        </label>
        <textarea 
        name="content" 
        id="content" 
        className='w-full h-64 border border-gray-300 bg-gray-900 rounded p-2 mb-4'
        placeholder='Enter your content here...'
        value={content}
        onChange={(e) => setContent(e.target.value)} />
        <div className='flex justify-end gap-4'>
        <button 
        type='button'
        onClick={handleCancel}
        className='bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-800 transition-colors'>
            Cancel
        </button>

        <button 
            className='bg-green-800 text-white px-4 py-2 rounded mt-4 hover:bg-green-900 transition-colors flex items-center gap-2'>
            <IoSave />
            Save Note
        </button>
        </div>
    </form>
  )
}

export default NotesForm
