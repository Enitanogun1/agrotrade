import Head from "next/head"
import { JobOpening } from "@/component/JobOpenings"
import { InfoBox } from "@/component/InfoBox"


export default function Index(){



 return (
  <>
    <Head>

        <title>Agro Trade</title>
    </Head>
    <main>
    <InfoBox>
      <ul>
        <li>Watermelon</li>
        <li>Orange</li>
        <li>guava</li>
      </ul>
    </InfoBox>

    <JobOpening title='Next Js Hybrid Work' location='Nairobi'/>
    <JobOpening title='React Developer' location='Enugu'/>

    </main>
  </>
 )
}