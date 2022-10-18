import styles from "../style"

const Gradient = () => {
    return (
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
    )
}

export default Gradient