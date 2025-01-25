import React from 'react';
import styles from '../assets/portfolio.module.css';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className={styles.portfolioContainer}>
            <Carousel {...settings}>
                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>PORTFOLIO MANAGEMENT</h1>
                        <p>
                            Managing investment portfolio for clients, which affords them the opportunity of enjoying the returns and benefits of both the capital and 
                            money markets. It cuts across Equities Investment in blue-chip quoted/unquoted companies...
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro.png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>Fund Management/Tenored Investment Plans</h1>
                        <p>
                            This is a short-term placement of funds with a guarantee on capital plus a pre-agreed rate of return tied to the prevailing money 
                            market rates. This offers investors attractive and fixed return on their investments from tenors ranging from 30 to 365 days. 
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (1).png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>VAMCO Fixed Rate Note</h1>
                        <p>
                        A short term investment product that offers competitive guaranteed return on capital. It is a non-unitised fund that pools 
                        investor’s funds and invest in various fixed income securities. 
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (2).png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>Dollar-Denominated Investments</h1>
                        <p>
                            As a way of mitigating investment risks while enhancing earnings, we invest in dollar-denominated assets (like Sovereign Eurobonds and other quoted 
                            Corporate Eurobonds e.t.c.) that help to hedge against naira depreciation and devaluation risks.
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (3).png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>Real Estate Investments</h1>
                        <p>
                            We actively manage real estate assets, conduct feasibility studies, 
                            help make purchase decisions and help purchase real estate assets. 
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (4).png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>Wealth Recoveries & Management</h1>
                        <p>
                            This has to do with assisting State Governments, Federal Institutions and High Networth Individuals (HNIs) to unlock liquidity from so many 
                            outstanding and hanging income/benefits and other recoverable from past investments.
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (5).png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>VAMCO Ethical Investment Plan/Product</h1>
                        <p>
                            This is for ethical investors with strong religious bias. For instance, those that pay high 
                            attention/place a high premium on certain ethics, social welfare and moral standards when investing. 
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (6).png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>Wealth Management & Advisory Services</h1>
                        <p>
                            Advisory services to HNI clients to enable them make the most informed investment decisions, take 
                            advantage of a wide range of our wealth management investment opportunities and offering wealthy clients advisory services...
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (7).png' alt="portfolio" />
                    </div>
                </div>

                <div className={styles.portManagement}>
                    <div className={styles.portContent}>
                        <h1>Our Companion through Life Products</h1>
                        <p>
                            These products are unique and distinctive solutions, geared specifically towards clients’ specific investment objectives. This is why our approach is targeted at meeting 
                            the identified needs of various clients, at different stages of human life cycle through life. 
                        </p>
                        <button>
                            Learn More
                            <img src='/images/arrow-right (1).png' alt="arrow" />
                        </button>
                    </div>
                    <div className={styles.portImg}>
                        <img src='/images/iPhone 12 Pro (8).png' alt="portfolio" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            <img src="/images/arrow-right (2).png" alt="Previous" />
        </div>
    );
};

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow custom-next" onClick={onClick}>
            <img src="/images/arrow-right.png" alt="Next" />
        </div>
    );
};

export default Portfolio;

const Carousel = styled(Slider)`
    /* padding-top: 100px; */

    ul li {
        margin: -4px;
    }

    ul li button {
        &:before {
            font-size: 7px;
            color: white;
            margin-top: -200px;
            margin-left: -580px;
        }
    }

    li.slick-active button:before {
        color: #ea2328;
    }

    button {
        z-index: 1;
    }

    .custom-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        cursor: pointer;
    }

    .custom-prev {
        margin-top: 120px;
        margin-left: 400px;
        border: 1px solid #FFFFFF;
        background: rgb(52, 20, 20);
        border-radius: 100%;
        padding: 8px 9px;
    }

    .custom-next {
        margin-top: 120px;
        margin-left: 450px;
        border-radius: 100%;
        padding: 8px 9px;
        border: 1px solid #FFFFFF;
        background: #EA2328;
    }

    @media (max-width: 1024px) {
        ul li button:before {
            font-size: 6px;
            margin-top: -130px;
            margin-left: -360px;
        }

        .custom-prev {
            margin-left: 200px;
            margin-top: 185px;
            padding: 6px 7px;
        }

        .custom-next {
            margin-left: 250px;
            margin-top: 185px;
            padding: 6px 7px;
        }
    }

    @media (max-width: 768px) {
        ul li button:before {
            display: none;
        }

        .custom-prev {
            display: none;
        }

        .custom-next {
            display: none;
        }
    }
`