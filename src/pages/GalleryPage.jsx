import styles from '../style'
import Gallery from '../components/Gallery'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GalleryPage = () => {
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
                    <Gallery />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default GalleryPage