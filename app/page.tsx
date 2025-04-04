import Image from "next/image";
import styles from "./page.module.css";
import CheckboxList from "@/component/CheckList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.box}>
          <CheckboxList />
        </div>
      </main>
    </div>
  );
}
