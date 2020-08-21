import React, { Component } from 'react';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { connect } from 'react-redux';
import { addToCartRequest } from '../../store/modules/cart/actions';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const res = await api.get('/products');

    const data = res.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct(id){
    const { dispatch } = this.props;

    dispatch(addToCartRequest(id));
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        { products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}/>
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => this.handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        )) }

        
      </ProductList>  
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

export default connect(
  mapStateToProps,
)(Home);