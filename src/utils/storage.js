const KEYS = {
  session: "ew-session",
  database: "ew-DB",
};

export const getData = () => {
  const data = localStorage.getItem(KEYS.database);
  return data ? JSON.parse(data) : null;
};

export const saveData = (data) => {
  localStorage.setItem(KEYS.database, JSON.stringify(data));
};

export const getSession = () => {
  const session = localStorage.getItem(KEYS.session);
  return session ? JSON.parse(session) : null;
};

export const saveSession = (user) => {
  localStorage.setItem(KEYS.session, JSON.stringify(user));
};

export const clearSession = () => {
  localStorage.removeItem(KEYS.session);
};
