import React from 'react'
import styles from '../assets/footer.module.css'

const Footer = () => {
  return (
    <footer>
        <div className={styles.footerList}>
            <div className={styles.footerLogo}>
                <img src='/images/footer-img.png'/>
            </div>

            <div className={styles.company}>
                <h3>Company</h3>
                <p>Products</p>
                <p>Business</p>
                <p>Investor Relations.</p>
            </div>

            <div className={styles.career}>
                <h3>Career</h3>
                <p>Join Our Team</p>
                <p>Work Life Balance</p>
                <p>Growth and Development</p>
            </div>

            <div className={styles.legal}>
                <h3>Legal</h3>
                <p>Terms & Conditions</p>
                <p>Privacy</p>
                <p>Cookies</p>
                <p>FAQs</p>
            </div>

            <div className={styles.getInTouch}>
                <h3>Get In Touch</h3>
                <p>2, Raymond Njoku Street, Ikoyi, Lagos</p>
                <p>0913-000-5503-5</p>
                <p>info@valientecapital.com</p>
                <div className={styles.socials}>
                    <img src='/images/uil_twitter.png'/>
                    <img src='/images/ri_linkedin-fill.png'/>
                    <img src='/images/mdi_facebook.png'/>
                    <img src='/images/basil_instagram-solid.png'/>
                </div>
            </div>
        </div>

        <div className={styles.copyright}>
            <img src='/images/Line 4.png'/>
            <p>2024 © Valiente Asset Management Limited RC 1489623. All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer