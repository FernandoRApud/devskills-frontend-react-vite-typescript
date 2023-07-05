export const setSessionStorage = (key: string, data: object) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getSessionStorage = (key: string) => JSON.parse(sessionStorage.getItem(key) || '[]');

export const removeSessionStorage = (key: string) => sessionStorage.removeItem(key);

export const removeAllSessionStorage = () => sessionStorage.clear();
