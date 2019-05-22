import {
  Actions,
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_TO_CART,
  ADD_TO_DETAILS,
  OPEN_MODAL,
  CLOSE_MODAL,
  INCREASE_CART,
  DECREASE_CART,
  REMOVE_CART,
  CLEAR_CART,
  UPDATE_SEARCH
} from "../actions";

export interface data {
  id: number;
  title: string;
  img: any;
  price: number;
  company: string;
  info: string;
  inCart: boolean;
  count: number;
  total: number;
}

const initialState = {
  phones: [],
  productDetails: {},
  error: "",
  cart: [],
  modalOpen: false,
  modalDetails: {},
  cartSubtotal: 0,
  cartTax: 0,
  cartTotal: 0,
  loading: false,
  searchVal: "",
  searchedItems: []
};

interface state {
  phones: data[];
  productDetails: {};
  error: string;
  cart: data[];
  modalOpen: boolean;
  modalDetails: data | object;
  cartSubtotal: number;
  cartTax: number;
  cartTotal: number;
  loading: boolean;
  searchVal: string;
}

export default function reducer(state: state = initialState, action: Actions) {
  console.log(state, action);
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      const searchedItems = getSearchedItems(action.payload);
      return {
        ...state,
        phones: action.payload,
        searchedItems: searchedItems,
        loading: false
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ADD_TO_CART:
      let tempProducts = [...state.phones];
      let index = getIndexOfItem(state.phones, action.payload);
      if (index > -1) {
        const phone = tempProducts[index];
        phone.inCart = true;
        phone.count = 1;
        const price = phone.price;
        phone.total = price;
        const tempCart = [...state.cart, phone];
        const { subtotal, tax, total } = getCheckoutPrice(tempCart);
        return {
          ...state,
          phones: tempProducts,
          cart: tempCart,
          cartSubtotal: subtotal,
          cartTax: tax,
          cartTotal: total
        };
      }
      return {
        ...state
      };
    case ADD_TO_DETAILS:
      return {
        ...state,
        productDetails: action.payload
      };
    case OPEN_MODAL: {
      const product = getItem(state.phones, action.payload);
      return {
        ...state,
        modalOpen: true,
        productDetails: product,
        modalDetails: product
      };
    }
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };
    case INCREASE_CART: {
      let tempCart = [...state.cart];
      let index = getIndexOfItem(state.cart, action.payload);
      if (index > -1) {
        const phone = tempCart[index];
        phone.count++;
        phone.total += phone.price;
        const { subtotal, tax, total } = getCheckoutPrice(state.cart);
        return {
          ...state,
          cart: tempCart,
          cartSubtotal: subtotal,
          cartTax: tax,
          cartTotal: total
        };
      }
      return {
        ...state
      };
    }
    case DECREASE_CART: {
      let tempCart = [...state.cart];
      let index = getIndexOfItem(state.cart, action.payload);
      if (index > -1) {
        const phone = tempCart[index];
        if (phone.count === 1) {
          return { ...state };
        }
        phone.count--;
        phone.total -= phone.price;
        const { subtotal, tax, total } = getCheckoutPrice(state.cart);
        return {
          ...state,
          cart: tempCart,
          cartSubtotal: subtotal,
          cartTax: tax,
          cartTotal: total
        };
      }
      return {
        ...state
      };
    }
    case REMOVE_CART: {
      let tempCart = [...state.cart];
      let tempStore = [...state.phones];
      tempCart = tempCart.filter(item => item.id !== action.payload);
      let indexStore = getIndexOfItem(state.phones, action.payload);
      if (indexStore > -1) {
        const phone = tempStore[indexStore];
        phone.inCart = false;
        phone.count = 0;
        phone.total = 0;
        const { subtotal, tax, total } = getCheckoutPrice(state.cart);
        return {
          ...state,
          phones: tempStore,
          cart: tempCart,
          cartSubtotal: subtotal,
          cartTax: tax,
          cartTotal: total
        };
      }
      return { ...state };
    }
    case CLEAR_CART:
      let tempCart = [];
      return {
        ...state,
        cart: tempCart
      };
    case UPDATE_SEARCH:
      const phones = [...state.phones];
      const newPhones = getSearchedItems(phones, action.payload);
      return {
        ...state,
        searchVal: action.payload,
        searchedItems: newPhones
      };
    default:
      return {
        ...state
      };
  }
}

export function getItem(state: data[], id: number) {
  return state.find((phone: data) => {
    return phone.id === id;
  });
}

function getIndexOfItem(state: data[], id: number) {
  let tempState = [...state];
  const phone = getItem(state, id); //nadi id u polju
  if (phone !== undefined) {
    //ako id postoji u polju
    let index = tempState.indexOf(phone); //pozicija id-a u polju
    return index; //vrati item s tim id-em
  }
  return -1;
}

function getSearchedItems(state: data[], value: string = "") {
  const tempPhones = [...state];
  return tempPhones.filter(phone =>
    phone.title.toLowerCase().includes(value.toLowerCase())
  );
}

//selectors

export function getCartTax(subtotal: number) {
  return subtotal * 0.25;
}

export function getCartTotal(subtotal: number, tax: number) {
  return subtotal + tax;
}

export function getCheckoutPrice(cart: data[]) {
  let subtotal = 0;
  cart.map(item => (subtotal += item.total));
  const tax = getCartTax(subtotal);
  const total = getCartTotal(subtotal, tax);
  return { subtotal, tax, total };
}
