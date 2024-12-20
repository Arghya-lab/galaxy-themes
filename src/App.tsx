import { useEffect, useRef, useState } from "react";
import Default from "./components/Layouts/Default";
import Emoji from "./components/Layouts/Emoji";
import Clipboard from "./components/Layouts/Clipboard";
import jsonToCss from "./utils/jsonToCss";
import themeExtention from "../galaxy/themes/extension.json";
import getJsonTheme, { JsonThemeType } from "./utils/getJsonTheme";
import { ChevronLeft, Expand } from "lucide-react";
import SmartbarActionsEditor from "./components/Layouts/SmartbarActionsEditor";
import SmartbarActionsOverflow from "./components/Layouts/SmartbarActionsOverflow";
import Symbol from "./components/Layouts/Symbol";

export type layoutType =
  | "normal"
  | "shift"
  | "ctrl"
  | "symbol"
  | "emoji"
  | "clipboard"
  | "smartbar-extend"
  | "smartbar-edit";

export interface LayoutContextType {
  currentLayout: layoutType;
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
}

export interface ThemesType {
  id: string;
  label: string;
  authors: string[];
  isNight: boolean;
  isBorderless: boolean;
  isMaterialYouAware: boolean;
}

function App() {
  const [currentLayout, setCurrentLayout] = useState<layoutType>("normal");
  const themes = useRef<ThemesType[]>();
  const [theme, setTheme] = useState<JsonThemeType | undefined>();
  const [isIncognito, setIsIncognito] = useState(false);

  useEffect(() => {
    themes.current = themeExtention.themes;
    const jsonTheme = getJsonTheme(themes.current[1]);

    if (jsonTheme) {
      jsonToCss(jsonTheme);
      setTheme(jsonTheme);
    }
  }, [theme]);

  if (currentLayout === "smartbar-extend") {
    return <SmartbarActionsEditor setCurrentLayout={setCurrentLayout} />;
  }

  return (
    <>
      <div className="keyboard-container">
        <div className="one-handed-panel">
          <Expand />
          <ChevronLeft size={20} />
          <div />
        </div>
        <div className="keyboard">
          {currentLayout === "symbol" ? (
            <Symbol
              setCurrentLayout={setCurrentLayout}
              setIsIncognito={setIsIncognito}
            />
          ) : currentLayout === "emoji" ? (
            <Emoji setCurrentLayout={setCurrentLayout} />
          ) : currentLayout === "clipboard" ? (
            <Clipboard setCurrentLayout={setCurrentLayout} />
          ) : currentLayout === "smartbar-edit" ? (
            <SmartbarActionsOverflow
              setCurrentLayout={setCurrentLayout}
              setIsIncognito={setIsIncognito}
            />
          ) : (
            <Default
              currentLayout={currentLayout}
              setCurrentLayout={setCurrentLayout}
              isIncognito={isIncognito}
              setIsIncognito={setIsIncognito}
            />
          )}
          <div className="system-navbar" />
        </div>
      </div>
      <div className="landscape-input-layout">
        <div className="landscape-input-field" />
        <button className="landscape-input-action">Done</button>
      </div>
    </>
  );
}

export default App;
