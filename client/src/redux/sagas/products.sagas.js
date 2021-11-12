import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchProductsFailure,
  fetchProductsPending,
  fetchProductsSuccess,
} from "../slices/productsSlices";

function* fetchProducts(action) {
  const URL = "http://localhost:5000";

  try {
    const { data } = yield axios.get(`${URL}/products`);
   
    const products = data;
    console.log("TCL: function*fetchProducts -> products", products)

    yield put(fetchProductsSuccess({ products: products }));
  } catch (e) {
    yield put(fetchProductsFailure({ error: e }));
  }
}

function* watchFetchProducts() {
  yield takeEvery(fetchProductsPending.type, fetchProducts);
}

export default watchFetchProducts;
