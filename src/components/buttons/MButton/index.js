import React from 'react'
import { StyledMButton } from './styles'

export const MButton = ({ height, width, radius, borderColor, hoverBg, hoverTextColor, bg, textColor, label, action }) => {
    return (
        <StyledMButton
            bg={bg}
            radius={radius}
            height={height}
            width={width}
            borderColor={borderColor}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            hoverBg={hoverBg}
            onClick={action}
        >{label}</StyledMButton>
    )
}