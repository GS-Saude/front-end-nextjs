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
        </div>
      </section>

      <section className={styles.second_section}>
        <div className={styles.second_body}>
          <div className={styles.second_description}>
            <h6>corpo</h6>
            <h3 className={styles.decorated_text}>FORTE</h3>
          </div>

          <Image
            priority={true}
            quality={40}
            style={({ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" })}
            src="/halter_bg.jpg"
            width={300}
            height={300}
            alt="Musculação com Halter" />

          <div className={styles.second_description_right}>
            <h6>corpo</h6>
            <h3 className={styles.decorated_text}>SAUDÁVEL</h3>
          </div>
        </div>
      </section>

      <section className={styles.last_section}>
        
      </section>
    </main>
  )
}
