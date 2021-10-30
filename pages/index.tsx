import Link from "next/link";
import styles from "../styles/Home.module.css";

const UnitPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length">
            Units!
          </a>
        </h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <Link href="/absolute-length">
            <a className={styles.card}>
              <h2 className="font-semibold">Absolute Length &rarr;</h2>
              <p>
                หน่วยประเภทนี้จะมีความยาวที่มีขนาดตามที่กำหนด
                ไม่มีการเปลี่ยนแปลง
              </p>
            </a>
          </Link>

          <Link href="/relative-length">
            <a href="" className={styles.card}>
              <h2 className="font-semibold">Relative length &rarr;</h2>
              <p>หน่วยที่มีขนาดขึ้นอยู่กับขนาดของ property ตัวอื่นๆ </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default UnitPage;
