import React from 'react'
import { StyledMButton } from './styles'

export const MButton = ({ radius, borderColor, hoverBg, hoverTextColor, bg, textColor, label, action }) => {
    return (
        <StyledMButton
            bg={bg}
            radius={radius}
            borderColor={borderColor}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            hoverBg={hoverBg}
            onClick={action}
        >{label}</StyledMButton>
    )
}