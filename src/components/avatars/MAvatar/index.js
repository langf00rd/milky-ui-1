import { StyledMAvatar, StyledMAvatarWrapper, StyledMEmptyAvatar } from "./styles"

export const MAvatar = ({ alt, bg, isEmpty, fit, size, image, radius }) => {
    if (isEmpty) return (
        <StyledMAvatarWrapper>
            <StyledMEmptyAvatar
                fit={fit}
                bg={bg}
                size={size}
                radius={radius}
                src={image}
                alt={alt}
                isEmpty={isEmpty}>
            </StyledMEmptyAvatar>
        </StyledMAvatarWrapper>
    )

    return (
        <StyledMAvatarWrapper>
            <StyledMAvatar
                fit={fit}
                bg={bg}
                size={size}
                radius={radius}
                src={image}
                alt={alt}
                isEmpty={isEmpty}>
            </StyledMAvatar>
        </StyledMAvatarWrapper>
    )
}