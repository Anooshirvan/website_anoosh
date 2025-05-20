import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:anooshirvan.mostmand@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
                <span>anooshirvan.mostmand@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anooshiravan-mostmand/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/Anooshirvan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-600 hover:text-gray-900">About</a>
              <a href="/academia" className="block text-gray-600 hover:text-gray-900">Academia</a>
              <a href="/projects" className="block text-gray-600 hover:text-gray-900">Projects</a>
              <a href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Location</h3>
            <p className="text-gray-600">Turin, Italy</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Anooshirvan Mostmand. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 