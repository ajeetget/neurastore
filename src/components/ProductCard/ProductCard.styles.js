import styled from "styled-components";

export const ItemWrapper = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;  
  cursor:pointer;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`;
export const ImageBox = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 8px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color:${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-align: center;
  min-height: 2.8em; 
  overflow: hidden;
`;

export const Meta = styled.div`
  margin-top: auto;
  text-align: center;
`;

export const Category = styled.p`
font-size: ${({ theme }) => theme.fontSizes.xs};
 color:${({ theme }) => theme.colors.gray};
`;

export const Price = styled.p`
font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  color:${({ theme }) => theme.colors.primary};
`;
