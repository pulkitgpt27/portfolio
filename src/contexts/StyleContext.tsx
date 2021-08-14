import React from "react";

interface StyleContextProps {
  isDark: boolean;
  changeTheme?: () => void;
}

const StyleContext = React.createContext<StyleContextProps>({
  isDark: false
});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
