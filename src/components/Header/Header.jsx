

import logo from "../../assets/logo.svg"
import facebook from "../../assets/facebook.svg"
import twiter from "../../assets/twiter.svg"
import instagram from "../../assets/instagram.svg"
import styles from './Header.module.css'
const menu = ["Home" , "Recipes", "Blog", "Contact" , "About Us"];

const Header = () => {
  return (
    <div className={styles.header}>
        <div className="container">
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.menu}>
                {menu.map(m => (
                    <a href="">{m}</a>
                )) }
            </div>
            <div className={styles.icons}>
                <img src={facebook} alt="" />
                <img src={twiter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header