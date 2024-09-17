import { createContext, useContext } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const MediaQueryContext = createContext();

function MediaQueryProvider({ children }) {
  const { isMatching } = useMediaQuery('(min-width:860px)', true);

  return (
    <MediaQueryContext.Provider value={{ isMatching }}>
      {children}
    </MediaQueryContext.Provider>
  );
}
function useMedia() {
  const context = useContext(MediaQueryContext);
  if (context === undefined)
    throw new Error('useMedia was used outside of DarkModeProvider');
  return context;
}

export { MediaQueryProvider, useMedia };
