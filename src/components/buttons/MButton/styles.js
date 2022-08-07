import styledComponents from 'styled-components';

export const StyledMButton = styledComponents.button`
    padding: .7rem 1.3rem;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background: ${p => p.bg ? p.bg : '#007fff'};
    color: ${p => p.textColor ? p.textColor : '#fff'};
    transition: 0.1s linear;

    &:hover,
    &:focus {
        color: ${p => p.bg ? p.bg : p.textColor};
        background: ${p => p.hoverBg ? p.hoverBg : p.bg}
    }

    &:active {
        transform: scale(0.9)
    }
`;