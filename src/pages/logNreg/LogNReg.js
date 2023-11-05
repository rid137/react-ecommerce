import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';


import Login from '../login/Login';
// import ProductDetails from '../productDetails/ProductDetails';
import Register from '../register/Register';

function LogNReg() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-2 mx-7 md:mx-[28.6rem] bg-gray-200"
      justify
    >
      <Tab eventKey="home" title="Register" className=''>
        <Register />
      </Tab>
      <Tab eventKey="profile" title="Login">
        <Login />
      </Tab>
      {/* <Tab eventKey="longer-tab" title="Loooonger Tab">
        <Login />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <Login />
      </Tab> */}
    </Tabs>
  );
}

LogNReg.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LogNReg;