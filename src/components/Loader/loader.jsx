import { BallTriangle } from 'react-loader-spinner';
import { Container } from './loaderStyled';

const Loader = () => {
  return (
    <Container>
      <BallTriangle
        height="100"
        width="100"
        color="#689268"
        ariaLabel="loading"
      />
    </Container>
  );
};

export default Loader;
