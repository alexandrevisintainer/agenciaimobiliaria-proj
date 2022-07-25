import styles from './About.module.css'
import Image from 'next/image'
import Secondimg from '../../public/Secondimg.jpg'

function About () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <aside className={styles.aside}>
                    <div className={styles.title}>
                        <h2>Sobre nossa Empresa</h2>
                    </div>
                    <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                        <Image className={styles.image} src={Secondimg} alt="badroomimage" layout='fill' objectFit='cover' />
                    </div>
                </aside>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto, nesciunt modi earum corrupti veniam consectetur necessitatibus impedit saepe dolorum similique. Molestiae quos voluptatem laborum ea eveniet, reprehenderit cum corrupti!</p>
                    <button>SAIBA MAIS</button>
                </div>
            </div>
        </div>
    )
}
export default About;