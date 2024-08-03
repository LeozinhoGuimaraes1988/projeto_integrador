// authContext.js
import { createContext, useContext, useState } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Provedor de contexto que envolve a aplicação
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Função para simular login
  const login = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
  };

  // Função para simular logout
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para acessar o contexto
export const useAuthSessionStore = () => {
  return useContext(AuthContext);
};
