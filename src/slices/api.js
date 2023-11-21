export const url = "http://localhost:8086/";
export const authUrl = "http://localhost:8080/api/auth";
export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
