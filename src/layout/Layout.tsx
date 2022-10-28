import React, { FC, ReactNode } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout