import React from 'react'
import { StyledMOutlinedButton } from './styles'

export const MOutlinedButton = ({ color, hoverColor, borderColor, hoverBg, hoverTextColor, bg, textColor, label, action }) => {
    return (
        <StyledMOutlinedButton
            hoverColor={hoverColor}
            color={color}
            onClick={action}
        >{label}</StyledMOutlinedButton>
    )
}