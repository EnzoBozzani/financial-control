import { NextPage } from "next";
import styles from './page.module.scss';
import Image from "next/image";

const Home: NextPage = async () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>Manage your money</p>
      <div>
        <Image src={'/bg1.svg'} alt="undraw image" width={270} height={500}/>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fugit ratione consequuntur sed, suscipit nostrum aspernatur exercitationem expedita dicta et aperiam, doloribus molestias cumque inventore? Enim voluptates voluptatibus saepe quaerat omnis et sint laboriosam, non illo iure fugit tempora quae ex dignissimos necessitatibus natus praesentium ducimus? Sunt quaerat veniam numquam!
        </p>
      </div>
    </section>
  )
}

export default Home;