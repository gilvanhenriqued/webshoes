export default function cart(state = [], action) {
  console.log(state);
  
  switch (action.type) {
    case 'ADD_TO_CART':
      return [ ...state, {
        ...action.product,
        ammount: 1,
      } 
    ];
    default:
      return state;
  }
}