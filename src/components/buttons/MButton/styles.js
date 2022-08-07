import styledComponents from 'styled-components';

export const StyledMButton = styledComponents.button`
    padding: .7rem 1.3rem;
    border: none;
    border: 2.3px solid ${p => p.bg ? p.bg : '#007fff'};
    cursor: pointer;
    border-radius: 10px;
    background: ${p => p.bg ? p.bg : '#007fff'};
    color: ${p => p.textColor ? p.textColor : '#fff'};
    transition: 0.1s linear;

    &:hover,
    &:active {
        color: ${p => p.bg ? p.bg : p.textColor};
        background: ${p => p.hoverBg ? p.hoverBg : p.bg};
        transform: scale(0.9)
    }
`;