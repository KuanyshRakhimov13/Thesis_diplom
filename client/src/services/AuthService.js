import axios from "axios";
import { env } from "../configs/EnvironmentConfig";

let AuthService = {};
AuthService.registration = async function (body) {
  try {
    const response = await axios.post(
      `${env.API_BASE_URL}/auth/registration`,
      body
    );
    console.log("response: ", response);
    return response;
  } catch (e) {
    console.log("error: ", e);
    return e;
  }
};

//low the payload for components

AuthService.login = async function (body) {
  try {
    const response = await axios.post(`${env.API_BASE_URL}/auth/login`, body);
    console.log("response: ", response);
    return response;
  } catch (e) {
    console.log("error: ", e);
    return e;
  }
};

export default AuthService;
