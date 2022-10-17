import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/atoms";
import { useEffect, useState } from "react";

function Cart() {
  const [fadeState, setFadeState] = useState("fadeout");
  const [itemList, setItemList] = useRecoilState(cartState);

  //fade inout message setting
  useEffect(() => {
    if (fadeState === "fadeout") {
      return;
    }
    if (fadeState === "fadein") {
      setTimeout(() => setFadeState("fadeout"), 1500);
    }
  }, [fadeState]);

  // delete to cart
  function deleteToCart(event) {
    const cartList = [...itemList].filter(
      (elem) => elem.id !== Number(event.target.id)
    );
    if (cartList.length === 0) {
      setItemList([]);
    } else {
      setItemList(cartList);
    }
    if (fadeState !== "fadein") {
      setFadeState("fadein");
    }
  }

  return (
    <>
      {fadeState === "fadein" ? (
        <StNoticeMessage>Products successly delete in cart.</StNoticeMessage>
      ) : (
        <></>
      )}
      <StContainer>
        <StCartLabel>Cart</StCartLabel>
        <StCartList>
          {Object.keys(itemList).length !== 0 ? (
            itemList.map((elem, idx) => (
              <StCartBlock key={idx}>
                <StThumbnailImg>
                  <img src={elem.itemImage} alt="" />
                </StThumbnailImg>
                <StProductInfo>
                  <label>
                    {elem.products.length > 20
                      ? elem.products.substring(0, 20) + "..."
                      : elem.products}
                  </label>
                  <label>
                    ${elem.price.toFixed(2) + " x " + elem.count}
                    <span>${(elem.price * elem.count).toFixed(2)}</span>
                  </label>
                </StProductInfo>
                <StDeleteBtn id={elem.id} onClick={deleteToCart}>
                  <DeleteIcon />
                </StDeleteBtn>
              </StCartBlock>
            ))
          ) : (
            <StEmptyText>Your cart is empty.</StEmptyText>
          )}
        </StCartList>
        {Object.keys(itemList).length !== 0 ? (
          <StCheckOutBtn>Checkout</StCheckOutBtn>
        ) : (
          <></>
        )}
      </StContainer>
    </>
  );
}

export default Cart;

const StContainer = styled.div`
  background: var(--base--white);

  display: flex;
  flex-direction: column;
  position: fixed;

  border-radius: 0.5rem;
  padding: 0.5rem 0;
  margin: 0 5%;

  width: 90%;
  margin: 0 5%;

  top: 5rem;
  z-index: 5;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px 0px var(--modalBG--black);
`;

const StCartLabel = styled.label`
  display: block;

  font-weight: 700;

  padding: 1rem;
  padding-top: 0.5rem;

  border-bottom: 1px solid var(--basePrice--blue);
`;

const StCartList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StCartBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0.5rem;
`;

const StThumbnailImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  width: 3rem;

  margin: 0.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;

  overflow: hidden;

  & img {
    height: 3rem;
    width: 3rem;
  }
`;

const StProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    color: var(--mainP--blue);
  }
  & span {
    color: var(--mainHead--blue);
    font-weight: 700;
    margin: 0 0.5rem;
  }
`;

const StDeleteBtn = styled.button`
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  padding: 0;
  margin: 0 0.5rem 0 auto;

  transition: ease 0.1s;
  cursor: pointer;

  & svg {
    margin: 0 0.5rem;
  }

  &:hover path {
    fill: var(--mainHead--blue);
  }

  & svg,
  & path,
  & use {
    pointer-events: none;
  }
`;

const StCheckOutBtn = styled.button`
  background: var(--base--orange);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--base--white);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05rem;

  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 1rem 0;
  margin: 0.5rem 1rem 1rem 1rem;

  transition: ease 0.1s;
  cursor: pointer;

  &:hover {
    background: hsl(26, 100%, 74%);
  }
`;

const StEmptyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  color: var(--mainP--blue);

  margin: 4rem 0;
`;

const StNoticeMessage = styled.div`
  background: hsla(0, 0%, 0%, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  color: var(--base--white);
  font-weight: 700;

  border: none;
  border-radius: 1rem;
  padding: 2rem;
  margin: 40vh 0;

  z-index: 20;

  transform: translateX(5%);
`;
