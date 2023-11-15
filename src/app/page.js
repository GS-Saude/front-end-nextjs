import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.first_section}>
        <div>
          <h1 className={styles.first_title}>Seja nosso cliente</h1>
          <p className={styles.first_description}>
            Mude seu estilo de vida e tenha
            mais saúde e disposição no seu
            dia-a-dia com a ajuda de
            nosso sistema de criação de
            treinos e dietas inteligênte.
          </p>
        </div>
      </section>

      <section className={styles.second_section}>
        <Image className={styles.healthy_food} src="/healthy_food.jpg" width={450} height={650} alt='Comida Saudável' />
        
        <div className={styles.information}>
          <h2 className={styles.second_title}>Dietas</h2>
          <p className={styles.second_description}>
            Crie dietas personalizadas de acordo com
            seus objetivos e necessidades.
          </p>
        </div>
      </section>
    </main>
  )
}
