import React from 'react'
import styles from '../assets/service.module.css'

const Services = () => {
  return (
    <div className={styles.serviceContainer}>
        <div className={styles.offer}>
            <div className={styles.offerImg}>
                <img src='/images/Rectangle 40658.png'/>
            </div>
            <div className={styles.offerText}>
                <div className={styles.textImg}>
                    <img src='/images/image 18.png' style={{marginTop:'-80px'}}/>
                    <img src='/images/Group 1171275797.png' style={{marginRight:'-19px', marginTop:'-75px'}}/>
                </div>
                <p>
                    VAMCO offers a wide range of investment solution accross
                    classes including cas, fixed income and equities on both
                    a pooled and segregated basis. We oversee and manage thei
                    assets of High Net Worth Individual(HNIs) investors and coporate
                    organizations.
                </p>
                <a>
                    Learn More
                    <img src='/images/arrow-right.png'/>
                </a>
            </div>
        </div>

        <div className={styles.investmentStrategies}>
            <div className={styles.strategiesHeader}>
                <img src='/images/Group 1171275801.png'/>
                <div className={styles.strategiesText}>
                    <p>OUR INVESTMENT STRATEGIES</p>
                        <h1>Tailored Solutions for Every Investor.</h1>
                </div>
                <img src='/images/Group 1171275800 (2).png'/>
            </div>
        </div>

        <div className={styles.funds}>
            <img src='/images/Group 1171275791.png'/>
            <div className={styles.mutualFunds}>
                <h3>Mutual Funds</h3>
                <p>We believe in empowering investors to achieve their financial 
                goals through strategic and diversified investment solutions.</p>
            </div>
            <img src='/images/Frame 1171278347 (1).png'/>
        </div>

        <div className={styles.serviceDescriptionBox}>
            <div className={styles.wealth}>
                <img src='/images/status-up (1).png' className={styles.wealthImg}/>
                <h3>Wealth Management</h3>
                <p>
                    Advisory services to HNI clients  to enable them make 
                    the most informed investment decisions.
                </p>
                <div className={styles.investmentButton}>
                    <button>
                        Start Investing
                        <img src='/images/arrow-right.png'/>
                    </button>
                </div>
            </div>

            <div className={styles.liquidity}>
                <img src='/images/empty-wallet-add.png' className={styles.liquidityImg}/>
                <h3>Liquidity Management</h3>
                <p>
                    At VAMCO, we are dedicated to helping you optimize your 
                    cash flow with precision and foresight.
                </p>
                <div className={styles.investmentButton}>
                    <button>
                        Start Investing
                        <img src='/images/arrow-right.png'/>
                    </button>
                </div>
            </div>

            <div className={styles.products}>
                <img src='/images/receipt-add.png' className={styles.productsImg}/>
                <h3>Structured Products</h3>
                <p>
                    We help in providing innovative investment solutions 
                    designed to meet the diverse needs of investors in today's market environment.
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

export default Services