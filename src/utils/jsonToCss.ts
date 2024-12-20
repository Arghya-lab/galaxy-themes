import { JsonThemeType } from "./getJsonTheme";

export default function jsonToCss(theme: JsonThemeType) {
  const root = document.documentElement;
  const styleElement = document.createElement("style");

  if (theme["@defines"]) {
    Object.entries(theme["@defines"]).forEach(([key, value]) => {
      root.style.setProperty(
        key,
        value
          .toString()
          .replace(
            /rounded-corner\(([\d]+)dp,([\d]+)dp,([\d]+)dp,([\d]+)dp\)/g,
            (_, tl, tr, br, bl) => {
              if (tl === tr && tr === br && br === bl) {
                return `${tl}px`;
              } else {
                return `${tl}px ${tr}px ${br}px ${bl}px`;
              }
            }
          )
      );
    });
  }

  const css = `
  .keyboard {
    background: ${theme?.keyboard?.background || "#e0e0e0"};
  }

  .key {
    background: ${theme?.key?.background || "#ffffff"};
    color: ${theme?.key?.foreground || "#000000"};
    font-size: ${theme?.key?.["font-size"] || "22px"};
    border-radius: ${theme?.key?.shape || "8px"};
    box-shadow: 0 ${
      theme?.key?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${theme?.key?.["border-color"] || "transparent"};
    border-width: ${theme?.key?.["border-width"] || "0px"};
  }

  .enter {
    background: ${
      theme?.["key[code=10]"]?.background || theme?.key?.background || "#ffffff"
    };
    color: ${
      theme?.["key[code=10]"]?.foreground || theme?.key?.foreground || "#000000"
    };
    font-size: ${
      theme?.["key[code=10]"]?.["font-size"] ||
      theme?.key?.["font-size"] ||
      "22px"
    };
    border-radius: ${theme?.["key[code=10]"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["key[code=10]"]?.["shadow-elevation"] ||
      theme?.key?.["shadow-elevation"] ||
      "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["key[code=10]"]?.["border-color"] ||
      theme?.key?.["border-color"] ||
      "transparent"
    };
    border-width: ${
      theme?.["key[code=10]"]?.["border-width"] ||
      theme?.key?.["border-width"] ||
      "0px"
    };
  }

  .key.space {
    background: ${
      theme?.["key[code=32]"]?.background || theme?.key?.background || "#ffffff"
    };
    color: ${
      theme?.["key[code=32]"]?.foreground || theme?.key?.foreground || "#000000"
    };
    font-size: ${
      theme?.["key[code=32]"]?.["font-size"] ||
      theme?.key?.["font-size"] ||
      "12px"
    };
    border-radius: ${theme?.["key[code=32]"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["key[code=32]"]?.["shadow-elevation"] ||
      theme?.key?.["shadow-elevation"] ||
      "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["key[code=32]"]?.["border-color"] ||
      theme?.key?.["border-color"] ||
      "transparent"
    };
    border-width: ${
      theme?.["key[code=32]"]?.["border-width"] ||
      theme?.key?.["border-width"] ||
      "0px"
    };
  }
    
  .shift-state-3 {
    background: ${
      theme?.["key[code=-11][shiftstate=3]"]?.background ||
      theme?.key?.background ||
      "#ffffff"
    };
    color: ${
      theme?.["key[code=-11][shiftstate=3]"]?.foreground ||
      theme?.key?.foreground ||
      "#5f5f5f"
    };
    font-size: ${
      theme?.["key[code=-11][shiftstate=3]"]?.["font-size"] || "22px"
    };
    border-radius: ${theme?.["key[code=-11][shiftstate=3]"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["key[code=-11][shiftstate=3]"]?.["shadow-elevation"] ||
      theme?.key?.["shadow-elevation"] ||
      "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["key[code=-11][shiftstate=3]"]?.["border-color"] ||
      theme?.key?.["border-color"] ||
      "transparent"
    };
    border-width: ${
      theme?.["key[code=-11][shiftstate=3]"]?.["border-width"] ||
      theme?.key?.["border-width"] ||
      "0px"
    };
  }

  .key:focus {
    background: ${theme?.["key:pressed"]?.background || "#f5f5f5"};
    color: ${theme?.["key:pressed"]?.foreground || "#000000"};
    font-size: ${theme?.["key:pressed"]?.["font-size"] || "22px"};
    border-radius: ${theme?.["key:pressed"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["key:pressed"]?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${theme?.["key:pressed"]?.["border-color"] || "transparent"};
    border-width: ${theme?.["key:pressed"]?.["border-width"] || "0px"};
  } 

  .enter:focus {
    background: ${theme?.["key[code=10]:pressed"]?.background || "#388e3c"};
    color: ${theme?.["key[code=10]:pressed"]?.foreground || "#5f5f5f"};
    font-size: ${theme?.["key[code=10]:pressed"]?.["font-size"] || "22px"};
    border-radius: ${theme?.["key[code=10]:pressed"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["key[code=10]:pressed"]?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["key[code=10]:pressed"]?.["border-color"] || "transparent"
    };
    border-width: ${theme?.["key[code=10]:pressed"]?.["border-width"] || "0px"};
  }

  .key.space:focus {
    background: ${
      theme?.["key[code=32]:pressed"]?.background ||
      theme?.["key:pressed"]?.background ||
      "#f5f5f5"
    };
    color: ${
      theme?.["key[code=32]:pressed"]?.foreground ||
      theme?.["key:pressed"]?.foreground ||
      "#000000"
    };
    font-size: ${
      theme?.["key[code=32]:pressed"]?.["font-size"] ||
      theme?.["key[code=32]"]?.["font-size"] ||
      "12px"
    };
    border-radius: ${
      theme?.["key[code=32]:pressed"]?.shape ||
      theme?.["key:pressed"]?.shape ||
      "8px"
    };
    box-shadow: 0 ${
      theme?.["key[code=32]:pressed"]?.["shadow-elevation"] ||
      theme?.["key:pressed"]?.["shadow-elevation"] ||
      "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["key[code=32]:pressed"]?.["border-color"] ||
      theme?.["key:pressed"]?.["border-color"] ||
      "transparent"
    };
    border-width: ${
      theme?.["key[code=32]:pressed"]?.["border-width"] ||
      theme?.["key:pressed"]?.["border-width"] ||
      "0px"
    };
  }
  
  .key-hint {
    background: ${theme?.["key-hint"]?.background || "transparent"};
    color: ${theme?.["key-hint"]?.foreground || "#5f5f5f"};
    font-size: ${theme?.["key-hint"]?.["font-size"] || "12px"};
    border-radius: ${theme?.["key-hint"]?.shape || "0px"};
  }

  .popup-keys,.popup {
    background: ${theme?.["key-popup"]?.background || "transparent"};
    color: ${theme?.["key-popup"]?.foreground || "transparent"};
    font-size: ${theme?.["key-popup"]?.["font-size"] || "22px"};
    border-radius: ${theme?.["key-popup"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["key-popup"]?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${theme?.["key-popup"]?.["border-color"] || "transparent"};
    border-width: ${theme?.["key-popup"]?.["border-width"] || "0px"};
  }
    
  .popup-key:focus {
    background: ${
      theme?.["key-popup:focus"]?.background ||
      theme?.["key-popup"]?.background ||
      "transparent"
    };
    color: ${
      theme?.["key-popup:focus"]?.foreground ||
      theme?.["key-popup"]?.foreground ||
      "transparent"
    };
    font-size: ${
      theme?.["key-popup:focus"]?.["font-size"] ||
      theme?.["key-popup"]?.["font-size"] ||
      "22px"
    };
    border-radius: ${theme?.["key-popup:focus"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["key-popup:focus"]?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["key-popup:focus"]?.["border-color"] || "transparent"
    };
    border-width: ${theme?.["key-popup:focus"]?.["border-width"] || "0px"};
  }
  
  .smartbar{
    background: ${theme?.smartbar?.background || "transparent"};    
    }
    
  .smartbar-actions-row {
    background: ${
      theme?.["smartbar-shared-actions-row"]?.background || "transparent"
    };  
  }
  
  .smartbar-action-toggle {
    background: ${theme?.["smartbar-shared-actions-toggle"]?.background};
    color: ${theme?.["smartbar-shared-actions-toggle"]?.foreground};
    border-radius: ${theme?.["smartbar-shared-actions-toggle"]?.shape};
    box-shadow: ${
      theme?.["smartbar-shared-actions-toggle"]?.["shadow-elevation"]
        ? `0 ${theme?.["smartbar-shared-actions-toggle"]?.["shadow-elevation"]} 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)`
        : "none"
    };
    border-color: ${
      theme?.["smartbar-shared-actions-toggle"]?.["border-color"] ||
      "transparent"
    };
    border-width: ${
      theme?.["smartbar-shared-actions-toggle"]?.["border-width"] || "0px"
    };
  }

  .smartbar-key,.smartbar-edit-key {
    background: ${theme?.["smartbar-action-key"]?.background || "transparent"};
    color: ${theme?.["smartbar-action-key"]?.foreground || "#121212"};
    font-size: ${theme?.["smartbar-action-key"]?.["font-size"] || "22px"};
    border-radius: ${theme?.["smartbar-action-key"]?.shape || "0px"};
    box-shadow: ${
      theme?.["smartbar-action-key"]?.["shadow-elevation"]
        ? `0 ${theme?.["smartbar-action-key"]?.["shadow-elevation"]} 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)`
        : "none"
    };
    border-color: ${
      theme?.["smartbar-action-key"]?.["border-color"] || "transparent"
    };
    border-width: ${theme?.["smartbar-action-key"]?.["border-width"] || "0px"};
  }
    
  .smartbar-action-tile {
    background: ${theme?.["smartbar-action-tile"]?.background || "transparent"};
    color: ${theme?.["smartbar-action-tile"]?.foreground || "#121212"};
    font-size: ${theme?.["smartbar-action-tile"]?.["font-size"] || "18px"};
    border-radius: ${theme?.["smartbar-action-tile"]?.shape || "0px"};
    box-shadow: ${
      theme?.["smartbar-action-tile"]?.["shadow-elevation"]
        ? `0 ${theme?.["smartbar-action-tile"]?.["shadow-elevation"]} 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)`
        : "none"
    };
    border-color: ${
      theme?.["smartbar-action-tile"]?.["border-color"] || "transparent"
    };
    border-width: ${theme?.["smartbar-action-tile"]?.["border-width"] || "0px"};
  }

  .smartbar-overflow-customize-btn {
    background: ${
      theme?.["smartbar-actions-overflow-customize-button"]?.background ||
      "#ffffff"
    };
    color: ${
      theme?.["smartbar-actions-overflow-customize-button"]?.foreground ||
      "#000000"
    };
    font-size: ${
      theme?.["smartbar-actions-overflow-customize-button"]?.["font-size"] ||
      "18sp"
    };
    border-radius: ${
      theme?.["smartbar-actions-overflow-customize-button"]?.shape || "0px"
    };
    box-shadow: ${
      theme?.["smartbar-actions-overflow-customize-button"]?.[
        "shadow-elevation"
      ]
        ? `0 ${theme?.["smartbar-actions-overflow-customize-button"]?.["shadow-elevation"]} 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)`
        : "none"
    };
    border-color: ${
      theme?.["smartbar-actions-overflow-customize-button"]?.["border-color"] ||
      "transparent"
    };
    border-width: ${
      theme?.["smartbar-actions-overflow-customize-button"]?.["border-width"] ||
      ""
    };
  }

  .smartbar-actions-overflow {
    background: ${
      theme?.["smartbar-actions-overflow"]?.background || "transparent"
    };
    }
    
  .smartbar-actions-editor {
    background: ${theme?.["smartbar-actions-editor"]?.background || "#e0e0e0"};
    border-radius: ${theme?.["smartbar-actions-editor"]?.shape || "0"};
  }

  .smartbar-actions-editor-header {
    background: ${
      theme?.["smartbar-actions-editor-header"]?.background || "transparent"
    };
    color: ${
      theme?.["smartbar-actions-editor-header"]?.foreground || "#000000"
    };
    font-size: ${
      theme?.["smartbar-actions-editor-header"]?.["font-size"] || "16sp"
    };
  }
  
  .smartbar-candidates-row {
     background: ${
       theme?.["smartbar-candidates-row"]?.background || "transparent"
     };
  }

  .smartbar-key.disable {
    background: ${
      theme?.["smartbar-action-key:disabled"]?.background || "transparent"
    };
    color: ${theme?.["smartbar-action-key:disabled"]?.foreground || "#121212"};
    font-size: ${
      theme?.["smartbar-action-key:disabled"]?.["font-size"] || "22px"
    };
    border-radius: ${theme?.["smartbar-action-key:disabled"]?.shape || "0px"};
    box-shadow: ${
      theme?.["smartbar-action-key:disabled"]?.["shadow-elevation"]
        ? `0 ${theme?.["smartbar-action-key:disabled"]?.["shadow-elevation"]} 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)`
        : "none"
    };
    border-color: ${
      theme?.["smartbar-action-key:disabled"]?.["border-color"] || "transparent"
    };
    border-width: ${
      theme?.["smartbar-action-key:disabled"]?.["border-width"] || "0px"
    };
  }

  .clipboard-header {
    background: ${theme?.["clipboard-header"]?.background || "transparent"};
    color: ${theme?.["clipboard-header"]?.foreground || "transparent"};
    font-size: ${theme?.["clipboard-header"]?.["font-size"] || "16px"};
  }

  .clip-item,.clipboard-history-disable {
    background: ${theme?.["clipboard-item"]?.background || "#ffffff"};
    color: ${theme?.["clipboard-item"]?.foreground || "#000000"};
    font-size: ${theme?.["clipboard-item"]?.["font-size"] || "14px"};
    border-radius: ${theme?.["clipboard-item"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["clipboard-item"]?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    }
  .clipboard-main-section p {
    color: ${theme?.["clipboard-item"]?.foreground || "#000000"};    
    }

  .clipboard-popup-tools{  
    background: ${theme?.["clipboard-item-popup"]?.background || "transparent"};
    color: ${theme?.["clipboard-item-popup"]?.foreground || "transparent"};
    font-size: ${theme?.["clipboard-item-popup"]?.["font-size"] || "14px"};
    border-radius: ${theme?.["clipboard-item-popup"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["clipboard-item-popup"]?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["clipboard-item-popup"]?.["border-color"] || "transparent"
    };
    border-width: ${theme?.["clipboard-item-popup"]?.["border-width"] || "0px"};
  }
  .clipboard-item-popup{
    background: rgba(255, 255, 255, 0.1);
  }

  .clipboard-enable-history-button {
    background: ${
      theme?.["clipboard-enable-history-button"]?.background || "#ffffff"
    };
    color: ${
      theme?.["clipboard-enable-history-button"]?.foreground || "#000000"
    };
    border-radius: ${theme?.["clipboard-enable-history-button"]?.shape || "0"};
  }

  .emoji-footer-key {
    background: ${theme?.["emoji-key"]?.background || "transparent"};
    color: ${theme?.["emoji-key"]?.foreground || "#121212"};
    font-size: ${theme?.["emoji-key"]?.["font-size"] || "22px"};
    border-radius: ${theme?.["emoji-key"]?.shape || "8px"};
    box-shadow: ${
      theme?.["emoji-key"]?.["shadow-elevation"]
        ? `0 ${theme?.["emoji-key"]?.["shadow-elevation"]} 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)`
        : "none"
    };
    border-color: ${theme?.["emoji-key"]?.["border-color"] || "transparent"};
    border-width: ${theme?.["emoji-key"]?.["border-width"] || "0px"};
  }

  .emoji-footer-key:focus {
    background: ${
      theme?.["emoji-key:pressed"]?.background ||
      theme?.["emoji-key"]?.background ||
      "transparent"
    };
    color: ${
      theme?.["emoji-key:pressed"]?.foreground ||
      theme?.["emoji-key"]?.foreground ||
      "#121212"
    };
    font-size: ${
      theme?.["emoji-key:pressed"]?.["font-size"] ||
      theme?.["emoji-key"]?.["font-size"] ||
      "22px"
    };
    border-radius: ${
      theme?.["emoji-key:pressed"]?.shape ||
      theme?.["emoji-key"]?.shape ||
      "8px"
    };
    box-shadow: ${
      theme?.["emoji-key:pressed"]?.background ||
      theme?.["emoji-key"]?.["shadow-elevation"]
        ? `0 ${
            theme?.["emoji-key:pressed"]?.background ||
            theme?.["emoji-key"]?.["shadow-elevation"]
          } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)`
        : "none"
    };
    border-color: ${
      theme?.["emoji-key:pressed"]?.["border-color"] ||
      theme?.["emoji-key"]?.["border-color"] ||
      "transparent"
    };
    border-width: ${
      theme?.["emoji-key:pressed"]?.["border-width"] ||
      theme?.["emoji-key"]?.["border-width"] ||
      "0px"
    };
  }

  .emoji-key-popup {
    background: ${theme?.["emoji-key-popup"]?.background || "transparent"};
    color: ${theme?.["emoji-key-popup"]?.foreground || "transparent"};
    font-size: ${theme?.["emoji-key-popup"]?.["font-size"] || "22px"};
    border-radius: ${theme?.["emoji-key-popup"]?.shape || "8px"};
    box-shadow: 0 ${
      theme?.["emoji-key-popup"]?.["shadow-elevation"] || "2px"
    } 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
    border-color: ${
      theme?.["emoji-key-popup"]?.["border-color"] || "transparent"
    };
    border-width: ${theme?.["emoji-key-popup"]?.["border-width"] || "0px"};
  }
    
  .emaji-nav-key {
    color: ${theme?.["emoji-tab"]?.foreground || "#121212"};
  }
  .emaji-nav-key.active {
    color: ${theme?.["emoji-tab:focus"]?.foreground || "#121212"};
  }
  .emoji-main-container {    
    color: ${theme?.key?.foreground || "#000000"};
  }

  .landscape-input-action{
    background: ${
      theme?.["extracted-landscape-input-action"]?.background || "#4caf50"
    };
    color: ${
      theme?.["extracted-landscape-input-action"]?.foreground || "#000000"
    };
    border-radius: ${
      theme?.["extracted-landscape-input-action"]?.shape || "4px"
    };
  }
    
  .landscape-input-field {
    background: ${
      theme?.["extracted-landscape-input-field"]?.background || "transparent"
    };
    color: ${
      theme?.["extracted-landscape-input-field"]?.foreground || "#121212"
    };
    font-size: ${
      theme?.["extracted-landscape-input-field"]?.["font-size"] || "16px"
    };
    border-radius: ${
      theme?.["extracted-landscape-input-field"]?.shape || "12px"
    };
    border-color: ${
      theme?.["extracted-landscape-input-field"]?.["border-color"] || "#ff9800"
    };
    border-width: ${
      theme?.["extracted-landscape-input-field"]?.["border-width"] || "2px"
    };
  }

  .landscape-input-layout{
    color: ${
      theme?.["extracted-landscape-input-layout"]?.background || "#e0e0e0"
    };
  }

  .incognito-indicator {
    color: ${theme?.["incognito-mode-indicator"]?.foreground || "#00000011"};
  }
  
  .one-handed-panel {
    background: ${
      theme?.["one-handed-panel"]?.background ||
      theme?.keyboard?.background ||
      "transparent"
    };
    color: ${theme?.["one-handed-panel"]?.foreground || "transparent"};
  }

  .system-navbar {    
    background: ${theme?.["system-nav-bar"]?.background || "#e0e0e0"};
  }  
}
`
    .replace(/(\d+)(dp|sp)/g, (_, n) => {
      return `${n}px`;
    })
    .replace(
      /rounded-corner\(([\d]+)px,([\d]+)px,([\d]+)px,([\d]+)px\)/g,
      (_, tl, tr, br, bl) => {
        if (tl === tr && tr === br && br === bl) {
          return `${tl}px`;
        } else {
          return `${tl}px ${tr}px ${br}px ${bl}px`;
        }
      }
    );

  styleElement.textContent = css;
  document.head.appendChild(styleElement);
}
