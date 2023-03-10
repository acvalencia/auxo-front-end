import { ButtonAuxo } from '@/components/ButtonAuxo'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Auxo DevTest Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex h-screen justify-center items-center'>
        <div className='' >
          <Image
          className='py-24'
            src="/AuxoFlights 2.png"
            alt="Auxo Logo"
            width={640}
            height={135}
            priority
          />
          <div className='flex py-4 justify-center'>
            <ButtonAuxo
              variant={'primary'}
              onClick={()=>{}}>
              <Link href="/itineraries">Start</Link>
            </ButtonAuxo>
          </div>

        </div>
      </main>
    </>
  )
}
