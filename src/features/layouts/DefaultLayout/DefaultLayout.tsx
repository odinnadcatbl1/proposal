import React, { FC } from 'react'

import { Header } from './components/Header'

interface IProps {
  children: React.ReactNode
}

export const DefaultLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />

      {children}
    </>
  )
}
