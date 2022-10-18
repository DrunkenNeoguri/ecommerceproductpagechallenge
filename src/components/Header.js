import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { cartState } from "../atoms/atoms";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import Cart from "./Cart";

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const itemList = useRecoilValue(cartState);

  function openCartList() {
    setOpenCart(!openCart);
  }

  function openMenuBox() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      {openCart === true ? <Cart setOpenCart={setOpenCart} /> : <></>}
      {openMenu === true ? (
        <StMenuContainer>
          <StModalBackground onClick={openMenuBox}></StModalBackground>
          <StColumnMenuBox>
            <StCloseButton onClick={openMenuBox}>
              <CloseIcon />
            </StCloseButton>
            <StMenuButton>Collections</StMenuButton>
            <StMenuButton>Men</StMenuButton>
            <StMenuButton>Women</StMenuButton>
            <StMenuButton>About</StMenuButton>
            <StMenuButton>Contact</StMenuButton>
          </StColumnMenuBox>
        </StMenuContainer>
      ) : (
        <></>
      )}
      <StBarContainer>
        <StBarButton onClick={openMenuBox}>
          <MenuIcon />
        </StBarButton>
        <StLogoImg>
          <img src={process.env.PUBLIC_URL + `/images/logo.svg`} alt="" />
        </StLogoImg>
        <StRowMenuBox>
          <StTabButton>Collections</StTabButton>
          <StTabButton>Men</StTabButton>
          <StTabButton>Women</StTabButton>
          <StTabButton>About</StTabButton>
          <StTabButton>Contact</StTabButton>
        </StRowMenuBox>
        <StCartButton active={openCart} onClick={openCartList}>
          <CartIcon onClick={() => openCartList} />
          {itemList.length > 0 ? (
            <StCountIcon>{itemList.length}</StCountIcon>
          ) : (
            <></>
          )}
        </StCartButton>
        <StProfileImg>
          <img
            src={process.env.PUBLIC_URL + `/images/image-avatar.png`}
            alt=""
          />
        </StProfileImg>
      </StBarContainer>
    </>
  );
}
//Collections Men Women About Contact
export default Header;

// base header
const StBarContainer = styled.header`
  background: var(--base--white);

  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;

  border-bottom: none;

  width: 100%;
  height: 4.5rem;
  max-width: 415px;

  top: 0;
  z-index: 5;
  box-sizing: border-box;

  @media screen and (min-width: 960px) {
    border-bottom: 1px solid var(--basePrice--blue);

    margin: auto;

    height: 7rem;
    width: 90%;
    max-width: 70rem;
  }
`;

const StLogoImg = styled.div`
  @media screen and (min-width: 960px) {
    margin-right: 2.5rem;
  }
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

  &:hover path {
    fill: var(--base--orange);
  }

  @media screen and (min-width: 960px) {
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

  &:hover path {
    fill: var(--base--orange);
  }

  & path {
    fill: ${(props) =>
      props.active === false ? "hsl(219,8.7%,45.1%)" : "var(--mainHead--blue)"};
  }

  @media screen and (min-width: 960px) {
    margin: 1rem 2rem 1rem auto;
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

  @media screen and (min-width: 960px) {
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

const StCountIcon = styled.div`
  background: var(--base--orange);

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  font-size: 0.7rem;
  color: var(--base--white);

  border: none;
  border-radius: 2rem;
  width: 0.8rem;
  height: 0.8rem;
  padding: 0 0.2rem;
  margin: 0;

  transform: translateX(50%) translateY(-50%);
`;

// modal menu bar
const StMenuContainer = styled.div`
  background: none;

  display: block;
  position: fixed;

  width: 100%;
  max-width: 415px;
  height: 100vh;

  z-index: 6;

  @media screen and (min-width: 415px) {
    border-left: 1px solid var(--basePrice--blue);
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const StModalBackground = styled.button`
  background: var(--modalBG--black);

  display: block;
  position: absolute;

  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;

  z-index: 6;

  cursor: pointer;
`;

const StColumnMenuBox = styled.div`
  background: var(--base--white);

  display: flex;
  flex-direction: column;
  position: absolute;

  width: 70%;
  height: 100vh;

  z-index: 7;
`;

const StCloseButton = styled.button`
  background: none;

  font-weight: 700;

  border: none;
  outline: none;
  margin: 1.5rem auto 2rem 1rem;
  padding: none;

  cursor: pointer;

  & svg,
  & path {
    pointer-events: none;
  }

  &:hover path {
    fill: var(--base--orange);
  }
`;

const StMenuButton = styled.button`
  background: none;

  color: var(--mainHead--blue);
  font-weight: 700;

  border: none;
  outline: none;
  margin: 0.8rem auto 0.8rem 1rem;
  padding: none;

  cursor: pointer;

  &:hover {
    color: var(--base--orange);
  }
`;

// PC ver Menu bar

const StRowMenuBox = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StTabButton = styled.button`
  background: none;

  color: var(--mainP--blue);

  border: none;
  outline: none;
  margin: 1rem;
  height: 7rem;

  cursor: pointer;

  &:hover {
    color: var(--base--orange);
  }

  &:focus {
    color: var(--mainHead--blue);
    padding-top: 4px;
    border-bottom: 3px solid var(--base--orange);
  }
`;
