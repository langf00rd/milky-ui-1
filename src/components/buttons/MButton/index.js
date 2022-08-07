import React from 'react'
import { StyledMButton } from './styles'

export const MButton = ({ borderColor, hoverBg, hoverTextColor, bg, textColor, label, action }) => {
    return (
        <StyledMButton
            bg={bg}
            borderColor={borderColor}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            hoverBg={hoverBg}
            onClick={action}
        >{label}</StyledMButton>
    )
}