import Intro from "@/Components/Intro";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Bankathon 
        </title>
      </Head>

      <div>
        <Intro />
      </div>
    </div>
  )
}