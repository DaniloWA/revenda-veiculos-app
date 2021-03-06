import { Http } from "../../config/Http";
import { changeLoading } from "./loading.action";
import { changeNotify } from "./notify.action";

export const actionTypes = {
  CHANGE: "AUTH_CHANGE",
  SUCCESS: "AUTH_SUCCESS",
};

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload,
});

export const setUserToken = (token) => (dispatch) => {
  localStorage.setItem("access_token", token);
  dispatch(
    change({
      email: "",
      password: "",
    })
  );
  dispatch(success(true));
};

export const login = (credentials) => (dispatch) => {
  dispatch(changeLoading({ open: true, msg: "Autenticando usuário..." }));

  return Http.post("oauth/token", {
    grant_type: "password",
    client_id: 2,
    client_secret: "g7hsJnYwa2xUUm9FArf9nL7YxeeSzuk0FTAeZ79s",
    username: credentials.email,
    password: credentials.password,
  })
    .then((response) => {
      dispatch(changeLoading({ open: false }));

      if (typeof response !== "undefined") {
        if (response.data.access_token) {
          dispatch(setUserToken(response.data.access_token));
        }
      }
    })
    .catch((error) => {
      dispatch(changeLoading({ open: false }));

      if (typeof error.response !== "undefined") {
        if (error.response.status === 401 || error.response.status === 400) {
          dispatch(
            changeNotify({
              open: true,
              msg: "E-mail ou Senha incorretos",
              class: "error",
            })
          );
        }
      } else {
        dispatch(
          changeNotify({
            open: true,
            msg: "Erro ao se conectar ao servidor",
            class: "error",
          })
        );
      }
    });
};
