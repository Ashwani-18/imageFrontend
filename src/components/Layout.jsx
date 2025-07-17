import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar/>
      <main className="flex-1 flex flex-col h-full">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout