import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(63, 62, 66, 0.8);
    opacity: 1;    
    padding: ${({ theme }) => theme.spacing.md} 0;
`;

export const FooterPara = styled.p`  
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
`;
