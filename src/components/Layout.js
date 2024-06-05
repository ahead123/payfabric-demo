import NavBar from './NavBar';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className="mt-5">{children}</Container>
    </>
  );
};

export default Layout;
