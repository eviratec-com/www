import React from 'react'
import type { ReactDomElement } from 'react-dom'
import Link from 'next/link'

import styles from './Button.module.css'

interface Props {
  children?: ReactDomElement | ReactDomElement[]
  href?: string
  onClick?: (event: any) => void
  className?: string
}

export default function Button({ children, href, onClick, className }: Props) {
  return (
    <>
      {!href &&
        <div
          className={`${styles._} ${className ? className : ''}`}
          onClick={onClick}
        >
          {children}
        </div>
      ||
        <Link
          href={href}
          onClick={onClick}
          scroll={false}
          prefetch={false}
          className={`${styles._} ${className ? className : ''}`}
        >
          <span>{children}</span>
        </Link>
      }
    </>
  )
}
