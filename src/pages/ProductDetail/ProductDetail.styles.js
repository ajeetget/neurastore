import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 16px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 16px;
  @media (min-width: 768px) {
    flex-direction: row; 
    justify-content:center;
    align-items: center;
    padding: 24px;
  }
`;

export const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border: 1px solid rgba(0,0,0,0.13);
    border-radius: 8px;
    overflow: hidden;
    cursor:pointer;
`;

export const Image = styled.img`
  max-width: 220px;
  height: auto;
  transition: transform 0.3s ease;
  ${ImageWrapper}:hover & {
    transform: scale(1.1); 
  }
  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

export const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    margin-top: 16px;
    align-self: flex-start;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 600;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s ease;

    &[data-active="true"] {
      background: ${({ theme }) => theme.colors.danger};
    }

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
    max-width:540px;
    width:100%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.6;
`;

export const Price = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Stars = styled.div`
  display: flex;
  color: #f5a623; /* gold stars */
  font-size: 14px;
`;

export const RatingCount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray};
`;
