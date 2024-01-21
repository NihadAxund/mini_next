import Image from "next/image";
import styles from "./page.module.css";
import MainHeader from "./components/mainHeader";
import Mainthread from "./components/mainthread";

export default function Home() {
  
  return (
    
    <main className={styles.main}>
      <MainHeader>

      </MainHeader>

      <Mainthread>

      </Mainthread>
    </main>
  );
}
