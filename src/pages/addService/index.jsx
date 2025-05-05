import React from 'react'
import { PiTelegramLogoDuotone } from 'react-icons/pi'
import { AddServices, TelegramLink, TitleText } from './styles'

const AddService = () => {
    return (
        <AddServices>
            <TitleText>O'z xizmatingizni dasturga qo'shmoqchi
                bo'lsangiz Administrator bilan bog'laning
            </TitleText>
              <TelegramLink href={'https://t.me/aziz_ismoilov'}>
                  <PiTelegramLogoDuotone/>    PlanoraUp Administratori
                    </TelegramLink>
        </AddServices>
    )
}

export default AddService;