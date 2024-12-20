import { Delete } from "lucide-react";
import EmojiHeader from "../Headers/EmojiHeader";
import { layoutType } from "../../App";
import { useState } from "react";

function Emoji({
  setCurrentLayout,
}: {
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <EmojiHeader />
      <div className="key-container emoji-main-container">
        <p>Recent</p>

        <div className="emoji-key-container">
          <button className="emoji-key">🌟</button>
          <button className="emoji-key">🚀</button>
          <button className="emoji-key">💖</button>
          <button className="emoji-key">🎉</button>
          <button className="emoji-key">🍕</button>
          <button
            className="emoji-key"
            onClick={() => setIsPopupOpen((p) => !p)}
          >
            {isPopupOpen && (
              <div className="emoji-key-popup">
                <span>👋🏻</span>
                <span>👋🏼</span>
                <span>👋🏽</span>
                <span>👋🏾</span>
                <span>👋🏿</span>
              </div>
            )}
            👋
          </button>
          <button className="emoji-key">🌈</button>
          <button className="emoji-key">🐱</button>
          <button className="emoji-key">⚽</button>
          <button className="emoji-key">🎨</button>
          <button className="emoji-key">🕊️</button>
          <button className="emoji-key">🌍</button>
          <button className="emoji-key">🥳</button>
          <button className="emoji-key">🤖</button>
          <button className="emoji-key">🍔</button>
          <button className="emoji-key">🌸</button>
          <button className="emoji-key">🦊</button>
          <button className="emoji-key">🛸</button>
          <button className="emoji-key">💎</button>
          <button className="emoji-key">✨</button>
          <button className="emoji-key">🎶</button>
          <button className="emoji-key">📚</button>
          <button className="emoji-key">🔥</button>
          <button className="emoji-key">🐳</button>
          <button className="emoji-key">🍩</button>
          <button className="emoji-key">⛅</button>
          <button className="emoji-key">🎂</button>
          <button className="emoji-key">🌴</button>
          <button className="emoji-key">🐼</button>
          <button className="emoji-key">🧩</button>
          <button className="emoji-key">🥋</button>
          <button className="emoji-key">⚡</button>
          <button className="emoji-key">🚲</button>
          <button className="emoji-key">🦄</button>
          <button className="emoji-key">🎁</button>
          <button className="emoji-key">🏖️</button>
          <button className="emoji-key">🧸</button>
          <button className="emoji-key">🌙</button>
          <button className="emoji-key">🎧</button>
          <button className="emoji-key">🥂</button>
        </div>

        <div className="emoji-layout-footer">
          <button
            className="emoji-footer-key"
            onClick={() => setCurrentLayout("normal")}
          >
            ABC
          </button>
          <button className="emoji-footer-key">
            <Delete />
          </button>
        </div>
      </div>
    </>
  );
}

export default Emoji;
