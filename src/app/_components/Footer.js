import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-black pt-8 pb-16 mt-8 rounded-md border-t-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <Link href={`/`} className="text-2xl font-bold text-black">EazyEats</Link>
        </div>

        <div className="flex gap-4">
           <a href="https://github.com/vvijayverma" className="hover:scale-150 transition-all" target='_blank'>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* GitHub Icon */}
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.03c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.527.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.292-1.552 3.297-1.23 3.297-1.23.653 1.649.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.103.823 2.222v3.293c0 .322.218.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

        <a href="https://www.linkedin.com/in/vijay-verma-297783218/" className="hover:scale-150 transition-all" target='_blank'>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* LinkedIn Icon */}
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.65 20h-3v-10h3v10zm-1.5-11.15c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm12.15 11.15h-3v-5.5c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.15 1.44-2.15 2.94v5.6h-3v-10h2.85v1.35h.05c.4-.75 1.4-1.55 2.85-1.55 3.05 0 3.6 2.01 3.6 4.63v5.57z" />
            </svg>
          </a>
          <a href="#" className="hover:scale-150 transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Facebook Icon */}
              <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.494v-9.294H9.691V11.41h3.128V8.9c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.793.143v3.236l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.296h-3.12V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer