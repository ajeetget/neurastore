import styled from "styled-components";

export const Grid = styled.div`
max-width:1440px;
width:100%;
margin:0 auto;
padding:20px;
  display: grid;
  grid-template-columns: 1fr;
  gap:10px;

   @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

   @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

   @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
