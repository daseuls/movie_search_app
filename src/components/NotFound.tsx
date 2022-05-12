import styled from "styled-components";
import { FcInfo, FcSearch } from "react-icons/fc";

interface IProps {
  error: string | undefined;
}

const NotFound = ({ error }: IProps) => {
  return (
    <Container>
      {error === "Search movie!" ? <FcSearch size={50} /> : <FcInfo size={50} />}
      <ErrorText>{error}</ErrorText>
    </Container>
  );
};

export default NotFound;

const Container = styled.main`
  ${({ theme }) => theme.flexbox("column", "center", "center")}
  height: 100%;
`;

const ErrorText = styled.p`
  font-size: 3rem;
`;
