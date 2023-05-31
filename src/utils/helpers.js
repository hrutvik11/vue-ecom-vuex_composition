export const setUserLoggedIn = (bool, id) => {
  localStorage.setItem("vueIsLoggedIn", bool);
  localStorage.setItem("userID", id);
};

export const getUserID = () => {
  if (localStorage.getItem("userID") !== "demouser") {
    return localStorage.getItem("userID");
  } else {
    return "demouser";
  }
};

export const isUserLoggedIn = () => {
  const bool = localStorage.getItem("vueIsLoggedIn");
  const userid = localStorage.getItem("userID");

  if (bool && bool === "true" && userid && userid !== "") {
    return true;
  } else {
    return false;
  }
};

export const onLogOut = () => {
  localStorage.setItem("vueIsLoggedIn", false);
  localStorage.setItem("userID", "");
};
