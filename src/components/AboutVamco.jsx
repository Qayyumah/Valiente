import React from 'react'
import styles from '../assets/about.module.css'

const AboutVamco = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
            <img src='/images/Group 1171275801.png'/>
            <div className={styles.aboutHeaderText}>
                <p>VALIENTE ASSET MANAGEMENT</p>
                <div style={{
                    backgroundImage: `url('/images/Line 125.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat:'no-repeat',
                    width: '538px',
                    height: '57.5px',
                    borderRadius: '20px 0px 0px 0px',
                    border: '1.5px 0px 0px 0px',
                    opacity: '0px'
                }}>
                    <h1>We are building your financial future.</h1>
                </div>
                <h3>We are Keeping you protected</h3>
            </div>
            <img src='/images/Group 1171275800 (2).png'/>
        </div>

        <div className={styles.protected}>
            <img src='/images/Frame 1171278342.png'/>
            <div className={styles.protectedContent}>
                <h3>We are keeping you protected, We are Simple</h3>
                <p>At Vamco, our approach is transparent, our processes
                    streamlined, and our communication clear. We believe in 
                    building trust through openness.
                </p>
            </div>
            <img src='/images/Frame 1171278347.png'/>
        </div>

        <div className={styles.aboutDescriptionBox}>
            <div className={styles.financial}>
                <img src='/images/bank.png' className={styles.financialImg}/>
                <h3>We're building your financial future</h3>
                <p>
                    At VAMCO, we are dedicated to empowering 
                    individuals and businesses to achieve their financial goals.
                </p>
                <div className={styles.investmentButton}>
                    <button>
                        Start Investing
                        <img src='/images/arrow-right.png'/>
                    </button>
                </div>
            </div>

            <div className={styles.simple}>
                <img src='/images/ranking.png' className={styles.simpleImg}/>
                <h3>We're Simple</h3>
                <p>
                    At VAMCO, our approach is transparent, our 
                    processes streamlined, and our communication clear.
                </p>
                <div className={styles.investmentButton}>
                    <button>
                        Start Investing
                        <img src='/images/arrow-right.png'/>
                    </button>
                </div>
            </div>

            <div className={styles.safeguard}>
                <img src='/images/shield-tick.png' className={styles.safeguardImg}/>
                <h3>We're Keeping you protected</h3>
                <p>
                    At VAMCO, safeguarding your financial
                    interest is our top priority. We are committed
                    to protecting and growing.
                </p>
                <div className={styles.investmentButton}>
                    <button>
                        Start Investing
                        <img src='/images/arrow-right.png'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutVamco