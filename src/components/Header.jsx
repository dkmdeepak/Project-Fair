import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';
import Product from '../shopping/Product';
import { useNavigate } from 'react-router-dom';
import SideNav from './Sidenav';

function Header() {
  return (
    <>
      <div className='nav-wrapper container' style={{background:'white', borderBottom:'solid 1px'}}>
        <Navbar className='container flex h-20 w-full items-center justify-between px-5 sm:px-0'>
          <Container >
            <Navbar.Brand href="/">
              <div style={{height:'20px'}}>
                <img src="https://evernote.com/_next/image?url=%2Fimages%2Ficons%2Fcheck.webp&w=64&q=75" alt="" />
              </div>
              <h2 id='st' className='' style={{ display: 'flex', justifyContent: 'flex-center',fontFamily: "Space Mono", color:'rgb(0, 0, 0)'}}>NOVAL STORE 2024</h2>
            </Navbar.Brand>
            <div>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  <h2>
                    Explore
                  </h2>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <h3>
                      Hello there!
                    </h3>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to={'/prod'}>
                      <span>
                        <h1>
                          Product
                        </h1>
                      </span>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Navbar>
        <SideNav /> {/* Include the SideNav component here */}
      </div>
    </>
  )
}

export default Header;