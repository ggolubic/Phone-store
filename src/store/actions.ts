export const FETCH_DATA = "FETCH_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_DETAILS = "ADD_TO_DETAILS";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const INCREASE_CART = "INCREASE_CART";
export const DECREASE_CART = "DECREASE_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CLEAR_CART = "CLEAR CART";
import { data, phones } from "../data";

type FetchData = { type: typeof FETCH_DATA; payload: data[] };
type AddToCart = { type: typeof ADD_TO_CART; payload: number };
type AddToDetails = { type: typeof ADD_TO_DETAILS; payload: data };
type OpenModal = { type: typeof OPEN_MODAL; payload: number };
type CloseModal = { type: typeof CLOSE_MODAL };
type IncreaseCart = { type: typeof INCREASE_CART; payload: number };
type DecreaseCart = { type: typeof DECREASE_CART; payload: number };
type RemoveCart = { type: typeof REMOVE_CART; payload: number };
type ClearCart = { type: typeof CLEAR_CART };

export const fetchData = (): FetchData => {
  console.log("FETCH DATA");
  return { type: FETCH_DATA, payload: phones };
};

export const addToCart = (id: number): AddToCart => {
  console.log("ADD TO CART", id);
  return {
    type: ADD_TO_CART,
    payload: id
  };
};

export const addToDetails = (product: data): AddToDetails => {
  console.log("ADD TO DETAILS", product);
  return {
    type: ADD_TO_DETAILS,
    payload: product
  };
};

export const openModal = (id: number): OpenModal => {
  console.log("OPEN MODAL");
  return {
    type: OPEN_MODAL,
    payload: id
  };
};
export const closeModal = (): CloseModal => {
  console.log("CLOSE MODAL");
  return {
    type: CLOSE_MODAL
  };
};

export const increaseCart = (id: number): IncreaseCart => {
  console.log("INCREASE CART");
  return {
    type: INCREASE_CART,
    payload: id
  };
};
export const decreaseCart = (id: number): DecreaseCart => {
  console.log("INCREASE CART");
  return {
    type: DECREASE_CART,
    payload: id
  };
};

export const removeCart = (id: number): RemoveCart => {
  console.log("REMOVE CART");
  return {
    type: REMOVE_CART,
    payload: id
  };
};
export const clearCart = (): ClearCart => {
  console.log("CLEAR CART");
  return {
    type: CLEAR_CART
  };
};

export type Actions =
  | FetchData
  | AddToCart
  | AddToDetails
  | OpenModal
  | CloseModal
  | IncreaseCart
  | DecreaseCart
  | RemoveCart
  | ClearCart;
