import { ADD_PRODUCT } from './../constants/index';

export function addProduct(payload) {
    return { type: ADD_PRODUCT, payload }
  };