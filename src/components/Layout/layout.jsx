import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/loader';
import { Container, Header, Link } from './layoutStyled';
export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
