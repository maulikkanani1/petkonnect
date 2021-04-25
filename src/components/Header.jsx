import React, { useEffect, useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import EditAddress from '../components/Model/Edit_address';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetUserData, logout } from '../ApiService';

const Header = (props) => {
  const history = useHistory();
  const [userData, setuserData] = useState();
  const [searchValue, setSearchvalue] = useState('');
  const [editAddress, seteditAddress] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const close_edit = () => {
    seteditAddress(!editAddress);
  };

  useEffect(() => {
    GetUserData().then(({ data }) => {
      setuserData(data);
    });
  }, []);

  const productCategory = [
    {
      name: 'Food',
    },
    {
      name: 'Treats',
    },
    {
      name: 'Toys',
    },
    {
      name: 'Leashes, Collars & Harnesses',
    },
    {
      name: 'Clothing & Accessories',
    },
    {
      name: 'Bowls & Feeders',
    },
    {
      name: 'Beds',
    },
    {
      name: 'Grooming & Hygiene',
    },
    {
      name: 'Health & Wellness',
    },
    {
      name: 'Carriers & Travel',
    },
    {
      name: 'Crates, Pens & Gates',
    },
    {
      name: 'Trees, Condos & Scratchers',
    },
    {
      name: 'Aquarium',
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/Products?search=${searchValue}`);
    window.location.reload();
  };

  const handleSelect = (e) => {
    setSelectedCategory(e);
  };

  return (
    <div className="bg-white sticky-top">
      <div className="bg-light mb-2">
        <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex align-items-center">
                <div>
                  <img
                    src="./../../img/logo new.png"
                    style={{ width: '150px', marginRight: '13px' }}
                  />
                </div>
                <div
                  className="ml-3 text-center d-flex flex-column"
                  style={{ marginRight: '10px', width: '14%' }}
                >
                  <span style={{ fontSize: '12px' }}>
                    Deliver to {userData?.name}
                  </span>
                  <span
                    onClick={close_edit}
                    style={{
                      fontSize: '10px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    <i className="fas fa-map-marker-alt"></i>{' '}
                    {userData?.address?.state} {userData?.address?.zip}
                  </span>
                </div>
                <div className="d-flex ml-3 mr-3">
                  <InputGroup style={{ textAlign: 'center' }}>
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title={selectedCategory}
                      onSelect={handleSelect}
                      id="input-group-dropdown-1"
                    >
                      {productCategory.map((product, i) => (
                        <Dropdown.Item
                          href={`/Products?search=${selectedCategory}`}
                          eventKey={product.name}
                        >
                          {product.name}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                    <FormControl
                      type="text"
                      name="search"
                      value={searchValue}
                      onChange={(e) => setSearchvalue(e.target.value)}
                      placeholder="Search"
                      aria-describedby="basic-addon1"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text onClick={handleSearch}>
                        <i className="fas fa-search text-primary cursor-pointer"></i>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
                <div
                  className="ml-3 d-flex"
                  style={{
                    fontSize: '20px',
                    marginLeft: '5px',
                    flexDirection: 'row',
                  }}
                >
                  {/* <i className="fas fa-shopping-bag text-primary cursor-pointer mr-3"></i> */}
                  <i className="fas fa-bell text-primary cursor-pointer mr-3"></i>
                </div>
                <div
                  className="pl-3 pr-3 text-center small"
                  style={{
                    borderRight: '1px solid grey',
                    borderLeft: '1px solid grey',
                  }}
                >
                  <span> 24 * 7 Support</span>
                </div>

                <div className="ml-4">
                  {/* <Link to="/Profile"> */}
                  <img
                    style={{ borderRadius: '50%' }}
                    src="https://i.stack.imgur.com/l60Hf.png"
                    width="30px"
                    height="30px"
                    className="pt-1"
                  />
                  {/* </Link> */}
                </div>

                <NavDropdown
                  title={userData ? userData.name : 'Hello User'}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    href="javascript:void(0)"
                    onClick={() => history.push('/OrderDetails')}
                  >
                    Order History
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="javascript:void(0)"
                    onClick={() => logout()}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <Navbar className="bg-white justify-content-center">
        <div className="d-flex">
          <Nav.Link className="text-dark" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            Feed
          </Nav.Link>
          <Nav.Link className="text-primary" as={Link} to="/">
            Store
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            Services
          </Nav.Link>
          <Nav.Link className="text-dark" href="#">
            SOS
          </Nav.Link>
        </div>
        <div className="d-flex">
          <Nav.Link className="text-primary" href="/checkout">
            Cart
            <i
              className="fas fa-shopping-cart text-primary mr-3 cursor-pointer"
              onClick={() => {
                history.push('/checkout');
              }}
            ></i>
          </Nav.Link>
        </div>
      </Navbar>
      <EditAddress
        status={editAddress}
        close={close_edit}
        address={userData?.address}
      />
    </div>
  );
};

export default Header;
