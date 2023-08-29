'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css'

interface ActiveLinkProps {
  path: string
  label: string
}

const ActiveLink = ({ path, label }: ActiveLinkProps) => {
  const pathName = usePathname()
  const isActive = pathName === path
  return (
    <Link href={path} className={`${style.link} ${isActive && style['active-link']}`}>{label}</Link>
  )
}

export default ActiveLink
