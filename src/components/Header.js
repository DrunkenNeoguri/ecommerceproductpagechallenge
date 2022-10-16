import styled from "styled-components";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";

function Header() {
  return (
    <BarContainer>
      <StBarButton>
        <img src={process.env.PUBLIC_URL + `/images/icon-menu.svg`} />
      </StBarButton>
      <StLogoImg>
        <img src={process.env.PUBLIC_URL + `/images/logo.svg`} />
      </StLogoImg>
      <StCartButton>
        <CartIcon />
      </StCartButton>
      <StProfileImg>
        <img src={process.env.PUBLIC_URL + `/images/image-avatar.png`} />
      </StProfileImg>
    </BarContainer>
  );
}
//Collections Men Women About Contact
export default Header;

const BarContainer = styled.div`
  background: var(--base--white);

  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;

  border-bottom: none;

  width: 100%;
  height: 4.5rem;

  top: 0;
  z-index: 5;
  box-sizing: border-box;

  @media screen and (min-width: 375px) {
    height: 7rem;
    width: 90%;
    border-bottom: 1px solid var(--basePrice--blue);

    box-sizing: border-box;
  }
`;

const StLogoImg = styled.div`
  /* @media screen and (min-width: 375px) {
    margin: 1rem;
  } */
`;

const StBarButton = styled.button`
  background: none;
  display: flex;

  border: none;
  outline: none;
  margin: 1rem;
  padding: 0;

  height: 1rem;
  cursor: pointer;

  & img,
  & svg,
  & path {
    pointer-events: none;
  }

  @media screen and (min-width: 375px) {
    display: none;
  }
`;

const StCartButton = styled.button`
  background: none;
  display: flex;

  border: none;
  outline: none;
  margin: 1rem 0.5rem 1rem auto;
  padding: 0;

  height: 1.25rem;
  cursor: pointer;

  & svg,
  & path {
    pointer-events: none;
  }

  & path {
    fill: #69707d;
  }

  @media screen and (min-width: 375px) {
    & path {
      fill: #000000;
    }
  }
`;

const StProfileImg = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  border-radius: 50%;
  padding: 0;
  margin: 1rem 1rem 1rem 0.5rem;
  overflow: hidden;

  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  & img {
    pointer-events: none;
    height: 1.5rem;
    width: 1.5rem;
  }

  &:hover {
    border: 2px solid var(--base--orange);
  }

  @media screen and (min-width: 375px) {
    height: 3rem;
    width: 3rem;
    & img {
      pointer-events: none;
      height: 3rem;
      width: 3rem;
    }

    &:hover {
      border: 3px solid var(--base--orange);
    }
  }
`;
