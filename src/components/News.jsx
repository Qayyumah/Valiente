import React from 'react'
import styles from '../assets/news.module.css'

const News = () => {
  return (
    <div className={styles.newsContainer}>
        <div className={styles.titleFlex}>
            <div className={styles.newsTitle}>
                <h1>Featured News</h1>
                <p>Explore the latest blogs and news articles showcased by our press.</p>
            </div>
            <img src='/images/Group 1171275800 (2).png'/>
        </div>
        <div className={styles.blogBox}>
            <div className={styles.blogDescriptionBox}>
                <img src='/images/Rectangle 29.png'/>
                <h4>We're Building Your Financial Future</h4>
                <p>We understand that every investor is unique, with distinct financial goals and values. That's why we offer a range of investment strategies designed. W...</p>
            </div>

            <div className={styles.blogDescriptionBox}>
                <img src='/images/Rectangle 29.png'/>
                <h4>We’re Building Your Financial Future</h4>
                <p>We understand that every investor is unique, with distinct financial goals and values. That's why we offer a range of investment strategies designed. W...</p>
            </div>

            <div className={styles.blogDescriptionBox}>
                <img src='/images/Rectangle 29.png'/>
                <h4>We’re Building Your Financial Future</h4>
                <p>We understand that every investor is unique, with distinct financial goals and values. That's why we offer a range of investment strategies designed. W...</p>
            </div>
        </div>
    </div>
  )
}

export default News