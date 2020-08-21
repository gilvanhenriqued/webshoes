import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { toast } from 'react-toastify';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(
    state => state.cart.find(p => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if(amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque...') ;
    return;
  }

  if(productExists) { 
    yield put(updateAmount(id, amount));
  } else {
    const res = yield call(api.get, `products/${id}`);

    const data = {
      ...res.data,
      amount: 1,
      priceFormatted: formatPrice(res.data.price),
    };

    yield put(addToCartSuccess(data));
  }
  
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);