import React from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import { Link } from 'react-router-dom';

function Header({ cartSize, estado }) {
  console.log(estado);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Webshoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
  estado: state
}))(Header);