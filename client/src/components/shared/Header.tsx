import React from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBox from './SearchBox';

const Header: React.FC = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img
                                src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
                                width={80}
                                alt="Amazon logo"
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                    {" "}
                    <SearchBox/>
                    <nav className='d-flex allign-items-center justify-content-end me-2 ms-4'>
                        <Link to={'/cart'} className='nav-link me-2'>
                            <FontAwesomeIcon icon={faShoppingCart} className="text-white"/>
                        </Link>
                        <Link className='nav-link text-white' to={'/signin'}>Sign In</Link>
                    </nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header