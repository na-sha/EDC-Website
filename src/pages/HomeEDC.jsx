import React from 'react'

import styles from '../style'

import Stats from '../components/Stats'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Values from '../components/Values'
import Footer from '../components/Footer'

const HomeEDC = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <Values />
          <Footer />

        </div>
      </div>
    </div>
  )
}

export default HomeEDC