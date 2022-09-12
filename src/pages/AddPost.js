import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {addPost} from '../features/postsSlice'
const AddPost = () => {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const dispatch = useDispatch()

    const handlePost = () => {
        dispatch(addPost({
            id: nanoid(),
            title,
            content
        }))
    }
    return(
        <section >
            <div>
                <input className='form-control' placeholder='title' onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <textarea onChange={e => setContent(e.target.value)}/>
            </div>
            <div>
                <button onClick={handlePost}>
                    Add Post
                </button>
            </div>
        </section>
    )
}
export default AddPost