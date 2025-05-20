import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          
          <div className="bg-secondary rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 bg-primary rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <a
                href="mailto:contact@example.com"
                className="text-accent hover:underline"
              >
                contact@example.com
              </a>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 