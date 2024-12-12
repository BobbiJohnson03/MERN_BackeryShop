export const isAuthenticated = () => {
    return !!localStorage.getItem("token"); // Sprawdza czy token istnieje
  };
  
  export const login = (token) => {
    localStorage.setItem("token", token);
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
  };
  