import styled from "styled-components";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (min-width: 375px) {
    margin-top: 7rem;
    max-width: 1440px;
    margin: 0 5%;
  }
`;
