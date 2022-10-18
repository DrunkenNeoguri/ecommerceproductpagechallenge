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
  position: relative;

  margin: auto;

  max-width: 415px;

  box-sizing: border-box;

  @media screen and (min-width: 960px) {
    margin-top: 7rem;
    max-width: 70rem;
    margin: 0 auto;
  }
`;
