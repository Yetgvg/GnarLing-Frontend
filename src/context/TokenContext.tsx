import React, { createContext, useContext, useState } from 'react';

// Defina o tipo do objeto de token
type TokenType = {
  id: string;
  email: string;
  idioma: string;
  nome: string;
};

// Defina o tipo para o contexto do token
type TokenContextType = {
  token: TokenType | null;
  setToken: (token: TokenType | null) => void;
};

// Crie o contexto do token
const TokenContext = createContext<TokenContextType | undefined>(undefined);

// Hook personalizado para usar o token
export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};

// Provedor de contexto para o token
export const TokenProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [token, setTokenState] = useState<TokenType | null>(null);

  // Função para atualizar o estado do token
  const setToken = (newToken: TokenType | null) => {
    setTokenState(newToken);
  };

  // Retorne o provedor de contexto com o valor do token e a função setToken
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
