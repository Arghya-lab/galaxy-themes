import {
  AlignJustify,
  ArrowLeft,
  Delete,
  Pencil,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { layoutType } from "../../App";

function ClipboardHeader({
  setCurrentLayout,
  isClipHIstoryDisable,
  setIsClipHIstoryDisable,
}: {
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
  isClipHIstoryDisable: boolean;
  setIsClipHIstoryDisable: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="clipboard-header">
      <div className="clipboard-section">
        <button
          className="clipbooard-header-btn"
          onClick={() => setCurrentLayout("normal")}
        >
          <ArrowLeft size={24} />
        </button>
        <span>Clipboard</span>
      </div>
      <div className="clipboard-section">
        <button
          className="clipbooard-header-btn"
          onClick={() => setIsClipHIstoryDisable((p) => !p)}
        >
          {isClipHIstoryDisable ? (
            <ToggleLeft size={24} />
          ) : (
            <ToggleRight size={24} />
          )}
        </button>
        <button className="clipbooard-header-btn">
          <AlignJustify size={24} />
        </button>
        <button className="clipbooard-header-btn">
          <Pencil size={24} />
        </button>
        <button className="clipbooard-header-btn">
          <Delete size={24} />
        </button>
      </div>
    </div>
  );
}

export default ClipboardHeader;
