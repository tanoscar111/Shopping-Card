import { takeEvery, put } from "redux-saga/effects";
import * as postsReducer from "../reducers/posts.Reducers";
import axios from "axios";

function* fetchPostSaga(action) {
  const URL = "http://localhost:5000";

  try {
    const response = yield axios.get(`${URL}/posts`);
    const data = response.data;
    console.log(
      "🚀 ~ file: index.js ~ line 12 ~ function*fetchPostSaga ~ data",
      data
    );
   yield put({
      type: postsReducer.fetchData.type,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}
function* mySaga() {
  yield takeEvery(postsReducer.fetchData.type, fetchPostSaga);
}
export default mySaga;
