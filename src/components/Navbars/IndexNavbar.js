import React from "react";
import LawnPage from "components/LawnPage/LawnPage"
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (

          <div>
               
               <img
                alt="..."
                className=" topnavcircleimg img-responsive"
                src={require("assets/img/topnavimg.png").default}
                style={{ width: "100%"}}
                  />
                
          <Navbar className={classnames("fixed-left", navbarColor)} expand="lg">
            <Container>
              <div className="navbar-translate">
              <Nav navbar>
                  <NavItem>
                    <NavLink
                      href="/profile-page"
                      target="_blank"
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/register-page"
                      target="_blank"
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink
                      href="#"
                      target="_blank"
                    >
                      Sports Infra
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink
                      href="#"
                      target="_blank"
                    >
                      Sports Complex
                    </NavLink>
                  </NavItem>
                </Nav>
                <button
                  aria-expanded={navbarCollapse}
                  className={classnames("navbar-toggler navbar-toggler", {
                    toggled: navbarCollapse,
                  })}
                  onClick={toggleNavbarCollapse}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse
                className="justify-content-end"
                navbar
                isOpen={navbarCollapse}
              >
                <Nav navbar>
                  <NavItem>
                    <NavLink
                      href="/profile-page"
                      target="_blank"
                    >
                      Lawns
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/register-page"
                      target="_blank"
                    >
                      Gallary
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink
                      href="/landing-page"
                      target="_blank"
                    >
                      Basketball
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink
                      href="#"
                      target="_blank"
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          
      </div>              

  );
}

export default IndexNavbar;
