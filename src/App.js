import styled from "styled-components";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <StMainContainer role="main">
        Collections Men Women About Contact Sneaker Company Fall Limited Edition
        Sneakers These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they’ll withstand
        everything the weather can offer. $125.00 50% $250.00 0 Add to cart
      </StMainContainer>
      <StAttribution class="attribution" role="contentinfo">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          {/* Frontend Mentor */}
        </a>
        . Coded by <a href="#">develop_neoguri</a>.
      </StAttribution>
    </Layout>
  );
}

export default App;

const StMainContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 4.5rem;

  @media screen and (min-width: 375px) {
    margin-top: 7rem;
  }
`;

const StAttribution = styled.div`
  font-size: 11px;
  text-align: center;

  & a {
    font-size: 11px;
    color: hsl(228, 45%, 44%);
  }
`;
