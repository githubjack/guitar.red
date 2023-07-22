import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
function MainLayout({children}) {
  return (
    <div>
        <Header />
        <div>{children}</div>
        <Footer />
  </div>
  )
}

export default MainLayout