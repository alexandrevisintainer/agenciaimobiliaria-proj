import styles from'./Contact.module.css';

function Contact () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.content}>
                    <h2>Entre em contato</h2>
                    <h4>Endereço</h4>
                    <p>Rua Dois zero zero 2000,<br/>
                        Centro - Cidade Zero
                    </p>

                    <h4>E-mail</h4>
                    <p>suaempresa@gmail.com</p>

                    <h4>Telefone</h4>
                    <p>+55 00 2000-2000</p>
                </div>
                <aside className={styles.image}>
                    
                </aside>
            </div>
        </div>
    )
}
export default Contact;