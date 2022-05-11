interface IProps {
  error: string | undefined;
}

const NotFound = ({ error }: IProps) => {
  return <div>{error}</div>;
};

export default NotFound;
