import React from 'react'
import menuImg from '../../assets/images/menuImg.webp'
import { Headers, Image, Text } from './styles'
import Categories from '../categories'
import TelegramMes from '../telegramMes'
const Header = () => {
  return (
   <>
    <Headers>
            <Image src={menuImg} alt="logo"/>
             <Text>Tadbir va bayramlaringiz uchun kerakli xizmatlarni osongina toping!
             </Text> 
             <Categories/> 
             <TelegramMes/> 
     </Headers>
   </>
  )
}

export default Header;