import './Team.css'
import styles from '../style'
import Navbar from '../components/Navbar'
import TeamPage from '../components/TeamPage'
import Footer from '../components/Footer'

const Team = () => {
    return (
        <div className='bg-black w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <TeamPage />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Team