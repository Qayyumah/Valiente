import React from 'react'
import styles from '../assets/body.module.css'
import Header from './Header'
import AboutVamco from './AboutVamco'
import Services from './Services'
import Reliable from './Reliable'
import News from './News'
import JoinUs from './JoinUs'
import Footer from './Footer'
import Portfolio from './Portfolio'

const 

Body

= () => {
  return (
    <div>
        <Header/>

        <body className={styles.bodyContainer}>
            <div style={{
                backgroundImage: `url('/images/back-img.png')`,
                // opacity:'0.15',
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                minHeight: 'minContent',
                backgroundColor:'black',
            }} className={styles.hero}>

                <div className={styles.content}>
                    <div className={styles.contentFlex}>
                        <div className={styles.building}>
                            <h1>Building Wealth, Securing Futures: Companion Through Life</h1>
                        </div>
                        <img src='/images/Group 1171275800.png'/>
                    </div>

                    <div className={styles.content2}>

                        <div className={styles.vamcoInnovative}
                            style={{
                                backgroundImage: `url('/images/Rectangle 40675.png')`,
                                backgroundSize: 'cover',
                                backgroundRepeat:'no-repeat',
                                
                            }}
                        >
                            <p>
                                Valiente Asset Management Company (VAMCO) is an innovative, proactive and clientcentered asset management 
                                firm, incorporated in Nigeria, and licensed by the Securities & Exchange Commission (SEC) 
                                as a Fund/Portfolio Manager to offer the following broad products and services:
                            </p>
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
                            <p>
                                We offer diverse asset management solutions to our diverse range of clients: retail, institutional and HNI 
                                clients through our expertise in Portfolio/Fund Management and Investment Advisory Services.
                            </p>
                        </div>

                        <div className={styles.innovativeImg}>
                            <img src='/images/innovative.png'/>
                        </div>
                    </div>
                    
                </div>
            </div>

            <section>
                <AboutVamco/>
                <Services/>
                <Reliable/>
                <Portfolio/>
                <News/>
                <JoinUs/>
            </section>
        </body>

        <Footer/>
    </div>
  )
}

export default 

Body

