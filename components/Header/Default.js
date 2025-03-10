import Link from 'next/link'

import LoveIcon from '@/components/Icons/MenuLove'
import ZapIcon from '@/components/Icons/MenuZap'
import MicIcon from '@/components/Icons/MenuMic'
import InfoIcon from '@/components/Icons/MenuInfo'
import MenuBook from '@/components/Icons/MenuBook'

import useLang from '@/hooks/useLang'
import useTheme from '@/hooks/useTheme'

export default function Header () {
  const { isId } = useLang()
  const { NextThemeIcon, onSwitchTheme } = useTheme()

  return (
    <header className="fixed w-full top-0 left-0 p-4 z-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-between shadow-medium border-bottom-gradient">
      <h1 className="h2 font-heading text-gradient">
        <Link href={`${isId ? '/' : '/en'}`}>
          <a>{'<Sumei-sama />'}</a>
        </Link>
      </h1>
      <div className="flex items-center justify-between">
        <Link href="/til">
          <a className="text-link hidden items-center md:flex md:mr-4 font-bold">
            <MenuBook />
            <span className="pl-2">TIL</span>
          </a>
        </Link>
        <Link href="/talks">
          <a className="text-link hidden items-center md:flex md:mr-4 font-bold">
            <MicIcon />
            <span className="pl-2">Talks</span>
          </a>
        </Link>
        <Link href="/speed">
          <a className="text-link hidden items-center md:flex md:mr-4 font-bold">
            <ZapIcon />
            <span className="pl-2">Speed</span>
          </a>
        </Link>
        <Link href="/support">
          <a className="text-link hidden items-center md:flex md:mr-4 font-bold">
            <LoveIcon />
            <span className="pl-2">Support</span>
          </a>
        </Link>
        <Link href="/about">
          <a className="text-link hidden items-center md:flex md:mr-4 font-bold">
            <InfoIcon />
            <span className="pl-2">About</span>
          </a>
        </Link>

        <button
          className="bg-gray-300 dark:bg-gray-700 dark:text-amber-500 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          onClick={onSwitchTheme}
          alt={`Switch theme`}
        >
          {NextThemeIcon}
        </button>
      </div>
    </header>
  )
}
