import styles from '../style'
import EventsHeader from '../components/EventsHeader'
import Navbar from '../components/Navbar'
import EventsTimeline from '../components/EventsTimeline'
import Footer from '../components/Footer'

const Events = () => {
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
                    <EventsHeader />
                    <EventsTimeline />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Events