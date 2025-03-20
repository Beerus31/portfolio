import {Navbar} from "./components/Navbar/Navbar"
import styles from './App.module.css'
import {Profile} from './components/profile/Profile'
import {About} from './components/about/About'
import {Projects} from './components/projects/Projects'
import { Transition } from "./transition/transition"
import {Contact} from "./components/contact/Contact"
function App() {

  return ( 
  <div className={styles.App}>
    <Navbar/>
    <Profile/>
    <About/>
    <Transition/>
    <Projects/>
    <Contact/>
  </div>
);
}

export default App
