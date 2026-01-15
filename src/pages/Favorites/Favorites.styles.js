import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 20px;
h1{
text-align:center;
margin-bottom:20px
}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  background: #fff;
`;

export const Image = styled.img`
  height: 150px;
  object-fit: contain;
  margin-bottom: 12px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  min-height: 40px;
`;

export const Price = styled.p`
  font-weight: 600;
  margin: 8px 0;
`;

export const EmptyState = styled.p`
  padding: 32px;
  text-align: center;
  font-size: 18px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 8px;
  button{
    padding: 8px 12px;
    border-radius: 6px;
    border: none;
    background: #ff4d4f;
    color: #fff;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Meta = styled.div`
  margin-top: auto;
  text-align: center;
`;
