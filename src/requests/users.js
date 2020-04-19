import {GET_CURRENT_USER, HOST, LOGIN_PATH} from "../consts/paths";
import RequestError from "./RequestError";

export async function signIn(login, password) {
  const response = await fetch(`${HOST}/${LOGIN_PATH}`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({login, password})
  });
  if (response.status === 403) {
    throw new RequestError(response.status, await response.text());
  } else if (response.status === 200) {
    return response.text()
  }
}


export async function getCurrentUser() {
  const response = await fetch(`${HOST}/${GET_CURRENT_USER}`, {
    method: 'get',
    mode: 'cors', // credentials: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json()
}