import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json()
      setStatus(result.message)
      setFormData({ name: '', email: '', mobileNumber: '', message: '' })
    } catch (error) {
      setStatus('Error sending email')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center space-y-4 pb-8 bg-bgPage'>
      <div className='flex flex-col items-center justify-center space-y-4 w-[1024px]'>
        <h4 className='text-xl'>Get in Touch</h4>
        <h1 className='text-4xl'>Contact Me</h1>
        <h4 className='text-xl'>Please input your details. I will contact you shortly...</h4>

      </div><div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="number" name="mobileNumber" placeholder="Your Contact Number" required value={formData.mobileNumber} onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Send</button>
        </form>
        {status && <p className="mt-2 text-center text-sm">{status}</p>}
      </div>

    </div>
  )
}
export default Contact
