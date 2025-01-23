import React from 'react'
import styles from '../assets/join.module.css'

const JoinUs = () => {
  return (
    <div className={styles.joinContainer}>
        <div className={styles.joinUsBox}>
            <h1>Join the family of investors today!</h1>
            <h1>and let's build your finance together!</h1>
            <p>Embark on your journey to financial success by signing up with VAMCO today.
             Our team is dedicated to guiding you every step of the way as you build a secure and prosperous future. </p>

            <div className={styles.joinBtn}>
                <button>
                    Start Investing
                    <img src='/images/arrow-right (1).png'/>
                </button>
                <button>Chat With Us</button>
            </div>
        </div>
    </div>
  )
}

export default JoinUs