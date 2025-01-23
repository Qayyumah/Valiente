import React from 'react'
import styles from '../assets/reliable.module.css'

const Reliable = () => {
  return (
    <div className={styles.reliableContainer}>
        <div className={styles.reliableAlly}>
            <h1>Your Reliable Ally in the Generation of Wealth.</h1>
            <p>We take a personalized approach to wealth creation,
            crafting strategies and solutions that are specifically Tailoredto your needs, risk tolerance
            and timeline. We take a personalized approach to wealthcreation, creating strategies and solution.</p>

            <div className={styles.services}>
                <li>
                    <img src='/images/setting-5.png'/>
                    <span>Structured Products</span>
                </li>
                <li>
                    <img src='/images/money-add.png'/>
                    <span>Liquidity Management</span>
                </li>
                <li>
                    <img src='/images/dollar-circle.png'/>
                    <span>Wealth Management</span>
                </li>
                <li>
                    <img src='/images/money-add.png'/>
                    <span>Mutual Funds - Collective Investment Schemes</span>
                </li>
            </div>

            <div className={styles.investmentLink}>
                <button>
                    Start Investing
                    <img src='/images/arrow-right.png'/>
                </button>
            </div>
        </div>

        <div style={{
            backgroundImage: `url('/images/Group 1171275800 (3).png')`,
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',

        }} className={styles.reliableImages}>
            <div className={styles.reliableShowImg}>
                <img src='/images/Rectangle 40663.png'/>
                <img src='/images/Frame 1171278342 (1).png' className={styles.relImg2}/>
            </div>
        </div>
    </div>
  )
}

export default Reliable