import { all } from "redux-saga/effects";
import watchFetchProducts from "./products.sagas";
export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
