import styles from './Clients.module.css'
import client1 from '../../public/client1.jpg'
import client2 from '../../public/client2.jpg'
import client3 from '../../public/client3.jpg'
import stars from '../../public/stars.png'

import Image from 'next/image'

function Clients () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.title}>
                    <h2>Clientes Satisfeitos</h2>
                </div>
                <div className={styles.cards}>
                    <div className={styles.Card1}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={client1} alt="First Client" layout='fill' objectFit='cover' />
                        </div>
                        <h3>First Client</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur</p>
                        <div className={styles.stars} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={stars} alt="Stars" layout='fill' objectFit='cover'/>
                        </div>    
                    </div>
                    <div className={styles.Card2}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={client2} alt="First Client" layout='fill' objectFit='cover' />
                        </div>
                        <h3>Second Client</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur,Lorem ipsum, consectetur. Lorem ipsum dolor sit amet, consectetur</p>
                        <div className={styles.stars} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={stars} alt="Stars" layout='fill' objectFit='cover' />
                        </div> 
                    </div>
                    <div className={styles.Card3}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={client3} alt="First Client" layout='fill' objectFit='cover' />
                        </div>
                        <h3>Third Client</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur,Lorem ipsum, consectetur. Lorem ipsum dolor sit amet, consectetur</p>
                        <div className={styles.stars} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={stars} alt="Stars" layout='fill' objectFit='cover' />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clients;