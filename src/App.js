import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "./layout/layout";
import { ReactComponent as CartIcon } from "./images/icon-cart.svg";
import { ReactComponent as PlusIcon } from "./images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "./images/icon-minus.svg";
import { ReactComponent as PreviousIcon } from "./images/icon-previous.svg";
import { ReactComponent as NextIcon } from "./images/icon-next.svg";
import { useRecoilState } from "recoil";
import { cartState } from "./atoms/atoms";

//https://vaadarsh8178.medium.com/handling-custom-svgs-in-react-using-styled-components-30d2739ff4cb

function App() {
  const [imageIndex, setImageIndex] = useState(1);
  const [itemCount, setItemCount] = useState(1);
  const [fadeState, setFadeState] = useState("fadeout");
  const [addCart, setAddCart] = useRecoilState(cartState);
  const thumbnailList = [
    process.env.PUBLIC_URL + `/images/image-product-1-thumbnail.jpg`,
    process.env.PUBLIC_URL + `/images/image-product-2-thumbnail.jpg`,
    process.env.PUBLIC_URL + `/images/image-product-3-thumbnail.jpg`,
    process.env.PUBLIC_URL + `/images/image-product-4-thumbnail.jpg`,
  ];

  //fade inout message setting
  useEffect(() => {
    if (fadeState === "fadeout") {
      return;
    }
    if (fadeState === "fadein") {
      setTimeout(() => setFadeState("fadeout"), 1500);
    }
  }, [fadeState]);

  // initial data -> receive App func's props?
  const initialProductData = {
    company: "Sneaker Company",
    itemImage: process.env.PUBLIC_URL + `/images/image-product-1-thumbnail.jpg`,
    products: "Fall Limited Edition Sneakers",
    originPrice: 250.0,
    nowPrice: 125.0,
    discountRate: "50%",
  };

  //change slice image
  function changeToSliceImage(int) {
    if (int === 1) {
      if (imageIndex === 4) {
        return setImageIndex(1);
      } else {
        return setImageIndex(imageIndex + 1);
      }
    } else if (int === -1) {
      if (imageIndex === 1) {
        return setImageIndex(4);
      } else {
        return setImageIndex(imageIndex - 1);
      }
    }
  }

  function changeImageIndex(idx) {
    setImageIndex(idx + 1);
  }

  //change item count
  function changeItemCount(int) {
    if (int === -1 && itemCount === 1) {
      return;
    } else {
      return setItemCount(itemCount + int);
    }
  }

  // add to cart func
  function addToCart() {
    setAddCart([
      ...addCart,
      {
        id: new Date().getTime(),
        products: initialProductData.products,
        itemImage: initialProductData.itemImage,
        price: initialProductData.nowPrice,
        count: itemCount,
      },
    ]);
    setItemCount(1);
    if (fadeState !== "fadein") {
      setFadeState("fadein");
    }

    /** legacy code */
    // const shopItemList = [...addCart];
    // // if itemCount isn't 0
    // if (itemCount !== 0) {
    //   // if the itemlist is not empty
    //   if (shopItemList.length !== 0) {
    //     const itemIdx = shopItemList.findIndex(
    //       (element) => element.products === initialProductData.products
    //     );
    //     // if the user already add items into the itemlist
    //     if (itemIdx !== -1) {
    //       shopItemList[itemIdx] = {
    //         products: initialProductData.products,
    //         itemImage: initialProductData.itemImage,
    //         price: initialProductData.nowPrice,
    //         count: itemCount,
    //       };
    //       setAddCart(shopItemList);
    //       // if the user don't add this item
    //     } else {
    //       setAddCart([
    //         ...shopItemList,
    //         {
    //           products: initialProductData.products,
    //           itemImage: initialProductData.itemImage,
    //           price: initialProductData.nowPrice,
    //           count: itemCount,
    //         },
    //       ]);
    //     }
    //     // if the itemlist is empty
    //   } else {
    //     setAddCart([
    //       ...shopItemList,
    //       {
    //         products: initialProductData.products,
    //         itemImage: initialProductData.itemImage,
    //         price: initialProductData.nowPrice,
    //         count: itemCount,
    //       },
    //     ]);
    //   }
    //   // if itemCount is 0
    // } else {
    //   if (shopItemList.length !== 0) {
    //     const newCartList = [...shopItemList].filter(
    //       (elem) => elem.products !== initialProductData.products
    //     );
    //     if (newCartList.length === 0) {
    //       setAddCart([]);
    //     } else {
    //       setAddCart(newCartList);
    //     }
    //   } else {
    //     setAddCart([
    //       ...shopItemList,
    //       {
    //         products: initialProductData.products,
    //         itemImage: initialProductData.itemImage,
    //         price: initialProductData.nowPrice,
    //         count: itemCount,
    //       },
    //     ]);
    //   }
    // }
    // setItemCount(1);
  }

  return (
    <Layout>
      {fadeState === "fadein" ? (
        <StNoticeMessage>Products successly add in cart.</StNoticeMessage>
      ) : (
        <></>
      )}
      <StMainContainer role="main">
        <StImageBox>
          <StDetailImage>
            <img
              src={
                process.env.PUBLIC_URL +
                `/images/image-product-${imageIndex}.jpg`
              }
              alt=""
            />
          </StDetailImage>

          <StMoveButton onClick={() => changeToSliceImage(-1)}>
            <PreviousIcon />
          </StMoveButton>

          <StMoveButton right={0} onClick={() => changeToSliceImage(1)}>
            <NextIcon />
          </StMoveButton>

          <StImageThumbnailList>
            {thumbnailList.map((elem, idx) => (
              <StThumbnailImage
                key={idx + 1}
                onClick={() => changeImageIndex(idx)}
                active={idx + 1 === imageIndex ? true : false}>
                <img src={elem} alt="" />
              </StThumbnailImage>
            ))}
          </StImageThumbnailList>
        </StImageBox>

        <StDetailBox>
          <StCompanyLabel>{initialProductData.company}</StCompanyLabel>
          <StProductsLabel>{initialProductData.products}</StProductsLabel>
          <StDetailLabel>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </StDetailLabel>

          <StPriceBox>
            <StNowPriceDiv>
              <label>${initialProductData.nowPrice.toFixed(2)}</label>
              <div>{initialProductData.discountRate}</div>
            </StNowPriceDiv>
            <StOriginPriceDiv>
              ${initialProductData.originPrice.toFixed(2)}
            </StOriginPriceDiv>
          </StPriceBox>

          <StCartBox>
            <StCountBox>
              <StChangeCountBtn onClick={() => changeItemCount(-1)}>
                <MinusIcon />
              </StChangeCountBtn>
              <StCountLabel>{itemCount}</StCountLabel>
              <StChangeCountBtn onClick={() => changeItemCount(1)}>
                <PlusIcon />
              </StChangeCountBtn>
            </StCountBox>
            <StAddToCartBtn onClick={addToCart}>
              <CartIcon />
              Add to cart
            </StAddToCartBtn>
          </StCartBox>
        </StDetailBox>
      </StMainContainer>

      <StAttribution role="contentinfo">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/DrunkenNeoguri">develop_neoguri</a>.
      </StAttribution>
    </Layout>
  );
}

export default App;

// base component
const StMainContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;

  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7.5rem;

    max-width: 70rem;

    margin: auto;
    margin-top: 12.5rem;
  }
`;

// image component
const StImageBox = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 960px) {
    max-width: 28rem;
  }
`;

const StDetailImage = styled.div`
  display: block;

  & img {
    width: 100%;
  }

  @media screen and (min-width: 960px) {
    border-radius: 1rem;
    max-width: 28rem;

    & img {
      max-width: 28rem;
      border-radius: 1rem;
      height: 28rem;
    }
  }
`;

const StMoveButton = styled.button`
  background: var(--base--white);

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  border: none;
  border-radius: 50%;
  outline: none;
  margin: 0 1rem;
  padding: 0;

  width: 2.5rem;
  height: 2.5rem;

  right: ${(props) => props.right};
  cursor: pointer;
  transform: translateY(350%);

  &:hover path {
    stroke: var(--base--orange);
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const StImageThumbnailList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2rem;
  width: 100%;
`;

const StThumbnailImage = styled.div`
  background: ${(props) =>
    props.active === true ? "hsla(25, 100%, 94%, 0.7)" : "none"};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) =>
    props.active === true ? "calc(5.5rem - 4px)" : "5.5rem"};
  height: ${(props) =>
    props.active === true ? "calc(5.5rem - 4px)" : "5.5rem"};
  border-radius: 1rem;
  border: ${(props) =>
    props.active === true ? "2px solid var(--base--orange)" : "none"};

  overflow: hidden;

  cursor: pointer;
  & img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 1rem;
    pointer-events: none;
    z-index: -1;
  }
`;

// detail infomation component
const StDetailBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5%;
  @media screen and (min-width: 960px) {
    max-width: 28rem;
  }
`;

const StCompanyLabel = styled.label`
  color: var(--base--orange);
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const StProductsLabel = styled.label`
  color: var(--mainHead--blue);
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 1.1;
  margin: 1rem 0;
  @media screen and (min-width: 960px) {
    font-size: 2rem;
    margin: 1.5rem 0;
  }
`;

const StDetailLabel = styled.label`
  color: var(--mainP--blue);
  @media screen and (min-width: 960px) {
    line-height: 1.7;
    margin: 2rem 0;
  }
`;

const StPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 960px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const StNowPriceDiv = styled.div`
  display: flex;
  align-items: center;

  margin: 1rem 0;

  & label {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 1.1;
  }

  & div {
    background: var(--subBase--orange);

    color: var(--base--orange);
    font-weight: 700;
    font-size: 0.8rem;

    border-radius: 0.3rem;
    padding: 0.1rem 0.4rem;
    margin: 0 1rem;
  }

  @media screen and (min-width: 960px) {
  }
`;

const StOriginPriceDiv = styled.div`
  color: var(--basePrice--blue);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: line-through;

  margin: 0 0.5rem 0 auto;
  @media screen and (min-width: 960px) {
    margin: 0 auto 0 0;
  }
`;

// count & add to cart button components
const StCartBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 960px) {
    flex-direction: row;
    align-items: center;

    gap: 1rem;
    margin: 2rem 0;
  }
`;

// count button
const StCountBox = styled.div`
  background: var(--countBtn--white);
  display: flex;
  align-items: center;
  flex-direction: row;

  border-radius: 0.5rem;

  height: 3.5rem;
  @media screen and (min-width: 960px) {
    width: 10rem;
  }
`;

const StChangeCountBtn = styled.button`
  background: none;

  border: none;
  outline: none;
  padding: none;
  margin: 1rem;

  transition: ease 0.2s;
  cursor: pointer;

  &:hover path {
    fill: hsl(26, 100%, 74%);
  }
`;

const StCountLabel = styled.span`
  font-weight: 700;
  font-size: 1rem;

  margin: auto;
`;

// add to cart button
const StAddToCartBtn = styled.button`
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
  margin: 1rem 0;
  width: 100%;

  transition: ease 0.1s;
  cursor: pointer;

  & svg {
    margin: 0 0.5rem;
  }

  & path {
    fill: white;
  }

  &:hover {
    background: hsl(26, 100%, 74%);
  }
  @media screen and (min-width: 960px) {
    max-width: 15rem;
  }
`;

//attribution component
const StAttribution = styled.footer`
  font-size: 11px;
  text-align: center;
  margin: 1rem 0;
  margin-top: 3rem;

  & a {
    font-size: 11px;
    color: hsl(228, 45%, 44%);
  }
`;

// notice message component
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
  margin: 40vh auto;

  z-index: 20;
  left: 0;
  right: 0;
  max-width: 300px;
  box-sizing: border-box;

  /* transform: translateX(9%); */
`;
