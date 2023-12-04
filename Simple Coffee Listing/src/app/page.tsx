"use client"
import OurCollection from "@/pages/OurCollection"
import styles from "./page.module.css"


export default function Home() {
  return (
    <>
      <main className={styles.main} >
        <OurCollection />

      </main>
      <footer className={styles.footer}>
        Challenge by <a href="https://devchallenges.io/challenge/45" target="_blank">DevChallenges</a>.
        Coded by <a href="#">Yuri Gabriel Constantino</a>.
      </footer>
    </>

  )
}
