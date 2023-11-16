import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/Card/page'
import ButtonPrimary from '@/components/Button/variants/primary'

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.first_section}>
        <div className={styles.background_info}>
          <h1 className={styles.first_title}>Seja um de nós!</h1>
          <p className={styles.first_description}>
            Mude seu estilo de vida e tenha
            mais saúde e disposição no seu
            dia-a-dia com a ajuda de
            nosso sistema de criação de
            treinos e dietas inteligênte.
          </p>
          <ButtonPrimary redirect='/pages/auth/login'>Começe Agora</ButtonPrimary>
        </div>
        <div className={styles.cards}>
          <Card icon='halter' iconSize={64} backgroundImage="/woman_and_string2.jpg">
            <p style={({ fontWeight: "700", fontSize: "18px" })}>Treinos Personalizados</p>
          </Card>
          <Card icon='comida' iconSize={64} backgroundImage="/diet.jpg">
            <p style={({ fontWeight: "700", fontSize: "18px" })}>Dietas Exclusivas</p>
          </Card>
          <Card icon='longevidade' iconSize={64} backgroundImage="longevity.jpg">
            <p style={({ fontWeight: "700", fontSize: "18px" })}>Longevidade</p>
          </Card>
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
