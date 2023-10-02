import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <Nav className={styles.navigation}>
                <Nav.Item>
                    <Link to="/" className={styles.logoLink}>
                        <img src="/images/logo.png" width={50} alt="logo" />
                        <span className={styles.logoText}>Movie Database</span>
                    </Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}

export default Header
