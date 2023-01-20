import Intro from "@/Components/Intro";
import Head from "next/head";
import Qualifications from "./Qualifications";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Bankathon 
        </title>
      </Head>

      {/* <section id='intro'>
        <Intro />
      </section> */}

      <section id ="qualifications">
        <Qualifications />
      </section>
    </div>
  )
}