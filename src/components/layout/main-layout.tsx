import React from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'

const MainLayout = ({children}:{children:any}) => {
  return (
    <>
    <Header/>
{children}
    <Footer/>
    </>
  )
}

export default MainLayout