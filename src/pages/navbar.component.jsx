import Container from "../components/container.component";
import Header from "../components/header.component";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-50">
        <Container>
          <Header />
        </Container>
      </div>
      <main className="py-8">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Navbar;
