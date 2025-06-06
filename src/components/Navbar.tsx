import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-light text-blue-700 hover:text-blue-900 transition-colors">
              ANOOSHIRVAN MOSTMAND
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-700 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-700 transition-colors">
              About
            </Link>
            <Link to="/academia" className="text-gray-600 hover:text-blue-700 transition-colors">
              Academia
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-700 transition-colors">
              Projects
            </Link>
            <a
              href="/Anooshirvan_Mostmand_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-blue-300 rounded-lg hover:bg-blue-50 text-blue-700 hover:text-blue-900 transition-colors"
            >
              <span>CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/academia"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Academia
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <a
              href="/Anooshirvan_Mostmand_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              CV
            </a>
          </div>
        </div>
      )}
    </nav>
  )
} 