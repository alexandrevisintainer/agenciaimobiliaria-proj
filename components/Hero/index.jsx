import styles from './Hero.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'

function Hero () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.logo}>
                    <Image src={logo} alt="home logo" width="50" height="50"/>
                </div>
                <div className={styles.content}>
                    <h1>ORANGE <br/> MARTINI</h1>
                    <p>AGÊNCIA IMOBILIÁRIA</p>
                    <button>ENTRE EM CONTATO</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;