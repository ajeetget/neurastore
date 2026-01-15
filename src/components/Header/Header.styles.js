import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  padding: ${({ theme }) => theme.spacing.sm} 20px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
`;

export const HeaderContainer = styled.div`
  max-width:1440px;
  width:100%;
  margin:0 auto;
  display: flex;
  flex-wrap:wrap;
  gap:8px;
  flex-direction: row;
  justify-content: space-between;  
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  cursor:pointer;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Highlight = styled.span`
  font-weight: 300;
  letter-spacing: 1px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const FavoritesLink = styled(NavLink)`
  position: relative;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration:none;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const Badge = styled.span`
  background: #ff3b3b;
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 999px;
`;
