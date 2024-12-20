import { useState } from "react";
import { layoutType } from "../../App";
import ClipboardHeader from "../Headers/ClipboardHeader";
import { Pin, Trash, Clipboard as Paste } from "lucide-react";

function Clipboard({
  setCurrentLayout,
}: {
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
}) {
  const clipboardTexts = [
    "This is a sample clipboard text.",
    "https://example.com",
    "Random text for clipboard testing.",
    "Copy and paste functionality demo.",
    "Hello, World!",
    "0123456789",
    "Clipboard data simulation is fun!",
    "User1234@domain.com",
    "Test123!",
    "123-456-7890",
  ];

  const [popupItem, setPopupItem] = useState<string | null>(null);
  const [isClipHIstoryDisable, setIsClipHIstoryDisable] = useState(false);

  return (
    <>
      <ClipboardHeader
        setCurrentLayout={setCurrentLayout}
        isClipHIstoryDisable={isClipHIstoryDisable}
        setIsClipHIstoryDisable={setIsClipHIstoryDisable}
      />
      {isClipHIstoryDisable ? (
        <div className="clipboard-history-disable">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            velit quisquam quaerat! Omnis veniam, cumque voluptate nesciunt
            praesentium aperiam tempore hic quae. Aliquam quo distinctio dolorum
            debitis magni, beatae natus.
          </p>
          <button className="clipboard-enable-history-button">
            Enable clipboard history
          </button>
        </div>
      ) : (
        <div className="clipboard-main-section hidden-scrollbar">
          <p>OTHER</p>
          <div className="clip-item-container">
            {clipboardTexts.map((clipText) => (
              <div
                key={clipText}
                className="clip-item"
                onClick={() => setPopupItem(clipText)}
              >
                {clipText}
              </div>
            ))}
          </div>
          {popupItem && (
            <div className="clipboard-item-popup">
              <div className="clip-item" onClick={() => setPopupItem(null)}>
                {popupItem}
              </div>
              <div className="clipboard-popup-tools">
                <div className="clipboard-popup-tool">
                  <Pin />
                  Pin item
                </div>
                <div className="clipboard-popup-tool">
                  <Trash />
                  Delete
                </div>
                <div className="clipboard-popup-tool">
                  <Paste />
                  Paste
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Clipboard;
