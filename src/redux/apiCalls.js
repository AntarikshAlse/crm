import { publicRequest } from "../requestMethods";
import { loginStart, loginFailure, loginSuccess } from "./userRedux";
export const login = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await publicRequest.post("/users/login", user);
    dispatch(loginSuccess(res.data));
    return res; // return To handle routing in handleSubmit
  } catch (err) {
    dispatch(loginFailure(err.response.data));
    return err; // return To handle routing in handleSubmit
  }
};
