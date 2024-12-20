import { useState } from "react";

function KeyWithPopup({
  currentLayout,
  keyText,
  hintKey,
  popupKeys,
}: {
  currentLayout: string;
  keyText: string;
  hintKey: string;
  popupKeys: string[];
}) {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <div className="popup-container" onMouseDown={() => setIsMouseDown(true)}>
      <button className={currentLayout === "normal" ? "key" : "key capital"}>
        {keyText}
        <span className="key-hint">{hintKey}</span>
      </button>
      {isMouseDown && (
        <div className="popup">
          <div className="popup-keys">
            {popupKeys.map((popupKey) => (
              <button
                className={
                  currentLayout === "normal" ? "popup-key" : "popup-key capital"
                }
              >
                {popupKey}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default KeyWithPopup;
