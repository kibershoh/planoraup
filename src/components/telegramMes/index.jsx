import React from 'react'
import {  TelegramLink, Text, TextBox } from './styles'
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const TelegramMes = () => {
    const navigate = useNavigate()

    return (
        <>
            <TextBox>
                <Text>
                    Dasturdagi kamchiliklar yoki u haqida fikrlar bo'lsa telegram orqali bog'laning. Fikringiz biz uchun muhim!

                </Text>
                 <br />
                    <TelegramLink href={'https://t.me/aziz_ismoilov'}>
                  <PiTelegramLogoDuotone/>    Telegram orqali bog'lanish
                    </TelegramLink>
            </TextBox>
        </>
    )
}

export default TelegramMes