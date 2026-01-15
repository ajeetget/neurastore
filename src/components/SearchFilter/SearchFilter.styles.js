import styled from "styled-components";

export const SearchWrapper = styled.section`
display:flex;
 flex-wrap:wrap;
justify-content:center;
align-items:center;
backbround: ${({ theme }) => theme.colors.white};
padding:10px 20px;
box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .16);
margin-bottom:10px;
gap:10px;
`;

export const Input = styled.input`
  max-width: 200px;
  width:100%;
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.2);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: all 0.2s ease;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  }
`;

export const Select = styled.select`
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.2);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  }    
`;
