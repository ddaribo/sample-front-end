export const camelToSnakeCase = (key: string) => key.replace(
    /([A-Z])/g,
    (letter) => `_${letter.toLowerCase()}`
  );

  export const backendURL = "http://127.0.0.1:8000/";
  export const registerURL = "auth/register/";
  export const loginURL = "auth/login/";
  export const postsURL = "posts/";

