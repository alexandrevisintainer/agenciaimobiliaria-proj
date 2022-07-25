import styles from './Locations.module.css'
import Image from 'next/image'
import place1 from '../../public/place1.jpg'
import place2 from '../../public/place2.jpg'
import place3 from '../../public/place3.jpg'
import seta from '../../public/seta.png'

function Locations () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.title}>
                    <h2>Propriedades Disponíveis</h2>
                </div>
                <div className={styles.cards}>
                    <div className={styles.Card1}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}> 
                            <Image src={place1} alt="First Place" layout='fill' objectFit='cover' />
                        </div>
                        <h3>Place 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <Image className={styles.seta} src={seta} alt="link" height="25" width="25" />
                    </div>
                    <div className={styles.Card2}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={place2} alt="First Place" layout='fill' objectFit='cover' />
                        </div>
                        <h3>Place 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <Image className={styles.seta} src={seta} alt="link" height="25" width="25" />
                    </div>
                    <div className={styles.Card3}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={place3} alt="First Place" layout='fill' objectFit='cover' />
                        </div>
                        <h3>Place 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <Image className={styles.seta} src={seta} alt="link" height="25" width="25" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations;