import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '@/components/'

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/pricing', label: 'Pricing' },
]

const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded justify-between'>
      <Link href='/' className='text-white font-bold flex gap-1 items-center'>
        <HomeIcon />
        <span>Next 13</span>
      </Link>
      <ul className='flex gap-3'>
        {
          navItems.map(({ path, label }) => (
            <li key={path}>
              <ActiveLink path={path} label={label} />
            </li>
          ))
        }
      </ul>
    </nav >
  )
}

export default Navbar
