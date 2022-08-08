import React from 'react'
import { StyledMOutlinedButton } from './styles'

export const MOutlinedButton = ({ radius, color, hoverColor, label, action }) => {
    return (
        <StyledMOutlinedButton
            hoverColor={hoverColor}
            radius={radius}
            color={color}
            onClick={action}
        >{label}</StyledMOutlinedButton>
    )
}