import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  links?: {
    github?: string
    demo?: string
    other?: { label: string; url: string }[]
  }
}

export default function ProjectCard({ title, description, tags, image, links }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-light mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs sm:text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          )}
          
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          )}
          
          {links?.other?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-blue-700 hover:text-blue-900 transition-colors underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 