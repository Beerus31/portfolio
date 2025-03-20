import React from 'react'
import styles from  "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
       <h2>Contact</h2>
       <p>Feel free to contact me</p>
    </div>
        <ul className={styles.links}>
           <li className={styles.link}>
             <img src="/logo/gmail.png" alt="Transition Image" />
             <a href="fallerjocas@gmail.com">@fallerjocas@gmail.com</a>
           </li> 
           <li className={styles.link}>
             <img src="/logo/phonecall.png" alt="Transition Image" />
              09214061857
           </li> 
           <li className={styles.link}>
             <img src="/logo/phonecall.png" alt="Transition Image" />
             09663814246
           </li> 
        </ul>
    </footer>
  )
}
