/** @format */

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  if (user && tokens) {
    return { Authorization: "Bearer" + tokens.access };
  } else {
    return {};
  }
}
