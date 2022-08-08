import styledComponents from 'styled-components';

export const StyledMOutlinedButton = styledComponents.button`
    padding: .7rem 1.3rem;
    border: 2.3px solid ${p => p.color ? p.color : '#007fff'};
    cursor: pointer;
    border-radius: ${p => p.radius ? p.radius : '10px'};
    background: transparent;
    color: ${p => p.color ? p.color : '#007fff'};
    transition: 0.1s linear;

    &:hover,
    &:active {
        color: ${p => p.hoverColor ? p.hoverColor : p.hoverColor};
        border-color: ${p => p.hoverColor ? p.hoverColor : p.hoverColor};
        transform: scale(0.9)
    }
`;