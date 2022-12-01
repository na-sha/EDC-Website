import './Team.css'
import styles from '../style'
import Navbar from '../components/Navbar'
import TeamPage from '../components/TeamPage'

const Team = () => {
    return (
        <div className='bg-black w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <TeamPage />
        </div>
    )
}

export default Team