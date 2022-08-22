export const isUserLoggedIn = () => {
  const token = getFromLocalStorage("primeries");
  if (token === null || !token) {
    return false;
  }
  return true;
};

export const addToLocalStorage = (key, value) => {
  // if (typeof value !== "string") value = JSON.stringify(value);
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return null;
  }
};

export const getFromLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "");
  } catch (e) {
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const emptyLocalStorage = () => {
  return localStorage.clear();
};

export const addToSessionStorage = (key, value) => {
  if (typeof value !== "string") value = JSON.stringify(value);
  try {
    return sessionStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
};

export const getFromSessionStorage = (key) => {
  try {
    return JSON.parse(sessionStorage.getItem(key) || "");
  } catch (e) {
    return null;
  }
};

export const removeFromSessionStorage = (key) => {
  sessionStorage.removeItem(key);
};

export const emptySessionStorage = () => {
  return sessionStorage.clear();
};
