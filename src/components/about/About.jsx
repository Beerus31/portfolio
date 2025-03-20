import React from 'react'
import styles from './about.module.css'
export const About = () => {
  return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
            </div>
            <ul className={styles.Aitems}>
                <li className={styles.Aitem}>
                   <img src="/aboutfold/camerapic.png"/>
                   <div className={styles.AText}>
                    <h3>Graphics Design</h3>
                    <p> I have experience on graphic designing and can design high quality designs.</p>
                   </div>
                </li >
                <li className={styles.Aitem}>
                   <img src="/aboutfold/code.png"/>
                   <div className={styles.AText}>
                    <h3>BackEnd Programmer</h3>
                    <p> I have experience on programming and i specialize in database manipulation.</p>
                   </div>
                </li>
                <li className={styles.Aitem}>
                   <img src="/aboutfold/cameraedit.png"/>
                   <div className={styles.AText}>
                    <h3>Video Editor</h3>
                    <p> I Have experience in video editing and made it my hobby to edit videos because i like making videos</p>
                   </div>
                </li>
            </ul>
        </section>
  )
}
