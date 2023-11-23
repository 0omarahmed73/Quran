import { Outlet } from "react-router";
import style from "./DefaultLayout.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { Container } from "react-bootstrap";
const DefaultLayout = () => {
  return (
    <div className={style.DefaultLayout}>
      <div className="d-flex flex-column  justify-content-center align-items-center">
        <NavBar />
        <Container className={style.Home}>
          <div className={` w-100 ${style.inner}`}>
            <Outlet />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DefaultLayout;
