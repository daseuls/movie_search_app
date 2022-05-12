import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <p>Loading</p>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  height: 100%;
  background-color: red;
  width: 100%;
`;
