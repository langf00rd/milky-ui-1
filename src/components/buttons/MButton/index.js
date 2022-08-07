import React from 'react'
import { StyledMButton } from './styles'

export const MButton = ({ hoverBg, hoverTextColor, bg, textColor, label, action }) => {
    return (
        <StyledMButton
            bg={bg}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            hoverBg={hoverBg}
            onClick={action}
        >{label}</StyledMButton>
    )
}