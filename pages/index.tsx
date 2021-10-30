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
              <h2>Absolute Length &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <Link href="/relative-length">
            <a href="" className={styles.card}>
              <h2>Relative length &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>

          <Link href="/difference">
            <a className={styles.card}>
              <h2>Difference &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default UnitPage;
