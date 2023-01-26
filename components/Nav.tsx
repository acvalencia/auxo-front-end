import React from 'react'
import Image from 'next/image'
import { ButtonAuxo } from './ButtonAuxo'
import Link from 'next/link'

const Header = ({title}) => {
  return (
    <div className='w-full py-12 flex justify-between px-14'>
      <h2 className='text-lg'>
        {title}
      </h2>
      <div className='flex gap-5'>
        <div className='flex gap-3 content-center items-center'>
          <Image
            src="/user.png"
            alt="Auxo Logo"
            width={40}
            height={40}
            priority
          />
          <div>Camilo Valencia</div>
        </div>
        <ButtonAuxo
          variant={'primary'}
          onClick={() => { console.log('?') }}>

          <div>?</div>
        </ButtonAuxo>
      </div>
    </div>
  )
}

export const Nav = ({ title, children }) => {
  return (
    <div className="flex">
      <div className='relative min-w-[240px] w-[240px] h-screen border-r border-blueBorderAuxo my-5'>

        <Image
          className='pt-12 mx-auto'
          src="/AuxoFlights 2.png"
          alt="Auxo Logo"
          width={160}
          height={34}
          priority
        />

        <div className='flex pt-6 justify-center'>
          <ButtonAuxo
            variant={'primary'}
            onClick={() => {}}>
            <Link
              className='flex gap-1'
              href="/itineraries">
              <Image
                src="/connecting.png"
                alt="logo"
                width={24}
                height={24}
                priority
              />
              <div>Itineraries</div>
            </Link>
          </ButtonAuxo>
        </div>

        <div className='absolute w-[240px] bottom-20'>
          <hr className='mx-5' style={{ borderColor: '#426294' }} />

          <div className='flex pt-6 justify-center'>
            <ButtonAuxo variant={'secondary'} onClick={() => {}}>
              <Link
                className='flex gap-1'
                href="/">
                <Image
                  src="/out.png"
                  alt="logo"
                  width={24}
                  height={24}
                  priority
                />
                <div>Log out</div>
              </Link>
            </ButtonAuxo>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <Header title={title} />
        {children}
      </div>
    </div>
  )
}
