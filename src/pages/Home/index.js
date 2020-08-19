import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tênis"/>
        <strong>Tênis Nike com o nome muito grande que quebra a linha</strong>
        <span>R$129,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$129,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$129,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$129,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$129,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$129,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>  
  );
}

export default Home;