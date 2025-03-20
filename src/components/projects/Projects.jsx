import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>PROJECTS</h2>
      <div className={styles.projectList}>
        <div className={styles.projectCard}>
          <img src="/projfold/christmas.png" alt="Project A" className={styles.projectImage} />
          <div className={styles.projectContent}>
            <h3>Christmas Photocollage</h3>
            <p>A christmas and company party that i made recently.</p>
            <a 
              href="/projfold/christmas.png" 
              download="christmas-photocollage.png"
              className={styles.downloadButton}
            >
              Download
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src="/projfold/finalhbd.png" alt="Project B" className={styles.projectImage} />
          <div className={styles.projectContent}>
            <h3>Final HBD Collage</h3>
            <p>A kid friendly design that i made for birthdays.</p>
            <a 
              href="/projfold/finalhbd.png" 
              download="final-hbd-collage.png"
              className={styles.downloadButton}
            >
              Download
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src="/projfold/valentines.png" alt="Project C" className={styles.projectImage} />
          <div className={styles.projectContent}>
            <h3>Valentine's Collage</h3>
            <p>My valentines Collage that i made recently.</p>
            <a 
              href="/projfold/valentines.png" 
              download="valentines-collage.png"
              className={styles.downloadButton}
            >
              Download
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src="/projfold/Summerbreak.png" alt="Project D" className={styles.projectImage} />
          <div className={styles.projectContent}>
            <h3>Project D</h3>
            <p>My Summerbreak graphic design that i made during ojt.</p>
            <a 
              href="/projfold/project-d.png" 
              download="project-d.png"
              className={styles.downloadButton}
            >
              Download
            </a>
          </div>
        </div>

        {/* Updated Last Project to Link to YouTube */}
        <div className={styles.projectCard}>
          <img src="/projfold/Youtube_logo.png" alt="Project E" className={styles.projectImage} />
          <div className={styles.projectContent}>
            <h3>Video Short Sample</h3>
            <p>My youtube Short and sample of my editing</p>
            <a 
              href="https://www.youtube.com/shorts/3VWlUYjj55c" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
