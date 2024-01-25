import Image from "next/image";
import styles from "./page.module.css";
import MainHeader from "./components/mainHeader";
import Mainthread from "./components/mainthread";
import MainPage from "./components/mainPage";

export default function Home() {
  
  return (
    
    <main className={styles.main}>
      <MainPage></MainPage>
    </main>
  );
}
