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
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import EditAddress from '../components/Model/Edit_address';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetUserData, logout } from '../ApiService';
import '.././scss/dropdown.scss';
import { set } from 'react-hook-form';

const Header = (props) => {
  const history = useHistory();
  const [userData, setuserData] = useState();
  const [searchValue, setSearchvalue] = useState('');
  const [editAddress, seteditAddress] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [subcategory,setSubCategory] = useState('All');
  const [isOpen,setIsOpen] = useState(false);

  const close_edit = () => {
    seteditAddress(!editAddress);
  };

  useEffect(() => {
    GetUserData().then(({ data }) => {
      if (
        !data?.address?.state ||
        !data?.address?.city ||
        !data?.address?.doorNo ||
        !data?.address?.zip
      ) {
        seteditAddress(true);
      }
      setuserData(data);
    });
  }, []);



  const productSubcategories = [
    {
      "id": 7,
      "label": "Food",
      "title": [
        "Dry Food",
        "Wet/ Canned Food",
        "Veterniary Diets",
        "Fresh Food",
        "Puppy Food",
        "Adult Dog Food",
        "Freeze/ Dried & dehydrated Food"
      ]
    },
    {
      "id": 8,
      "label": "Treats",
      "title": [
        "Biscuits, Cookies & Crunchy Treats",
        "Soft & Chewy Treats",
        "Dental Treats",
        "Jerky Treats",
        "Bones & Sticks",
        "Rawhide",
        "Pill Covers & Wraps",
        "Veterinary Diet Treats"
      ]
    },
    {
      "id": 9,
      "label": "Toys",
      "title": [
        "Chew Toys",
        "Plush Toys",
        "Sqeaker Toys",
        "Rope Toys ",
        "Interactive Toys",
        "Fetch & Tug Toys",
        "Variety Packs"
      ]
    },
    {
      "id": 10,
      "label": "Leashes, Collars & Harnesses",
      "title": ["Collars", "Leashes", "Harnesses", "ID Tags", "Muzzles"]
    },
    {
      "id": 11,
      "label": "Clothing & Accessories",
      "title": [
        "Jackets & Coats",
        "Sweaters & Hoodies",
        "Shoes & Socks",
        "Bow Ties",
        "Bandanas",
        "Shirts & Dresses",
        "Accessories",
        "Pajamas",
        "Costumes",
        "Outdoor Gear"
      ]
    },
    {
      "id": 12,
      "label": "Bowls & Feeders",
      "title": [
        "Bowls & Dishes",
        "Elevated Bowls",
        "Feeders",
        "Travel Bowls",
        "Personalized Bowls",
        "Storage & Accessories",
        "Water Bottles",
        "Placemats"
      ]
    },
    {
      "id": 13,
      "label": "Beds",
      "title": ["Beds & Furniture", "Mats", "Blankets & Pillows"]
    },
    {
      "id": 14,
      "label": "Grooming & Hygiene",
      "title": [
        "Grooming Tools",
        "Shampoos & Conditioners",
        "Brushes & Combs",
        "Ear Care",
        "Paw & Nail Care",
        "Skincare",
        "Eyecare",
        "Tick & Flea",
        "Towels & Wipes",
        "Stain & Odour Control",
        "Scoopers & Waste Disposal",
        "Diapers & Training"
      ]
    },
    {
      "id": 15,
      "label": "Health & Wellness",
      "title": [
        "Medicines & Supplements",
        "Oral Care",
        "Skin & Coat Care",
        "Hip & Joint Care",
        "Digestive Health & Probiotics",
        "Multivitamins",
        "Anxiety & Calming Care",
        "Heart & Liver Care",
        "Urinary & Kidney Health",
        "Eyecare",
        "Dietary Supplements"
      ]
    },
    {
      "id": 16,
      "label": "Carriers & Travel",
      "title": [
        "Carriers",
        "Kennels",
        "Car Accessories",
        "Steps & Ramps",
        "Travel Bowls & Bags",
        "Travel Aids"
      ]
    },
    {
      "id": 17,
      "label": "Crates, Pens & Gates",
      "title": [
        "Crate & Kennels",
        "Crate Mats & Pads",
        "Pens & Accessories",
        "Gates",
        "Steps & Ramps",
        "Doors & Accessories",
        "Dog Houses"
      ]
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/Products?search=${searchValue}`);
  };

  const handleSelect = (e) => {
    setSelectedCategory(e);
    console.log('heyoo',selectedCategory);
  };
  
  const handleSubCategory = (e) => {
    setSubCategory(e);
  }

  const handleMouseEnter = (e) => {
    setIsOpen(true);
  }

  const handleMouseLeave = (e) => {
    setIsOpen(false);
  }

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
                      {productSubcategories.map((product, i) => (
                        <Dropdown.Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                          href={`/Products?search=${selectedCategory}`}
                          eventKey={product.label}
                        >
                          <div className="r1">
                            <div>
                              {product.label}
                            </div>
                            <div>
                              {
                                isOpen ? <DropdownSubmenu eventKey={product.label} >
                                {product['title'].map((subcategory,i) => (
                                  <NavDropdown.Item onSelect={handleSubCategory} href={`/Products?search=${subcategory}`} eventKey={subcategory}>
                                    {subcategory}
                                  </NavDropdown.Item>
                                ))}
                              </DropdownSubmenu> : null
                               }
                            </div>
                          </div>
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
                  <Link to="/Profile">
                    <img
                      // style={{ borderRadius: '50%'}}
                      src={userData?.userImage}
                      width="30px"
                      height="30px"
                      className=" rounded-circle"
                    />
                  </Link>
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
