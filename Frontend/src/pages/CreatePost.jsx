import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    await axios.post("http://localhost:3000/create-post", formData)
      .then((res) => {
        navigate('/feed')
      })
  }

  return (
    <section className='create-post-section'>
      <div className="create-post-card">
        <h1>Create Post</h1>
        <p><h5>Upload your image and write a caption.</h5></p>

        <form onSubmit={handleSubmit}>
          <label className="file-box">
            <span>Choose Image</span>
            <input type="file" name="image" accept="image/*" required />
          </label>

          <input
            type="text"
            name="caption"
            placeholder='Enter caption'
            required
          />

          <button type="submit">Create Post</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost