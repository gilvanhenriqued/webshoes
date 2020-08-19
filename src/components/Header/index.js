import React from 'react';

import logo from '../../assets/images/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Webshoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFFF" />
      </Cart>
    </Container>
  );
}

export default Header;