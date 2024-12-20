import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Smile,
  SpellCheck,
  TabletSmartphone,
  TextSelect,
  Trash,
} from "lucide-react";
import { layoutType } from "../../App";
import NormalHeader from "../Headers/NormalHeader";

function SmartbarActionsOverflow({
  setCurrentLayout,
  setIsIncognito,
}: {
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
  setIsIncognito: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <NormalHeader
        setCurrentLayout={setCurrentLayout}
        setIsIncognito={setIsIncognito}
      />
      <div className="smartbar-actions-overflow">
        <div className="smartbar-action-tile-container">
          <div className="smartbar-action-tile">
            <Smile size={20} />
            <span>Emoji</span>
          </div>
          <div className="smartbar-action-tile">
            <SpellCheck size={20} />
            <span>Autocorre...</span>
          </div>
          <div className="smartbar-action-tile">
            <ChevronDown size={20} />
            <span>Arrow do...</span>
          </div>
          <div className="smartbar-action-tile">
            <ChevronLeft size={20} />
            <span>Arrow left</span>
          </div>
          <div className="smartbar-action-tile">
            <ChevronRight size={20} />
            <span>Arrow right</span>
          </div>
          <div className="smartbar-action-tile">
            <Trash size={20} />
            <span>Clear Pri...</span>
          </div>
          <div className="smartbar-action-tile">
            <ChevronUp size={20} />
            <span>Arrow up</span>
          </div>
          <div className="smartbar-action-tile">
            <TabletSmartphone size={20} />
            <span>one-handed</span>
          </div>
          <div className="smartbar-action-tile">
            <TextSelect size={20} />
            <span>Select all</span>
          </div>
        </div>
        <button
          className="smartbar-overflow-customize-btn"
          onClick={() => setCurrentLayout("smartbar-extend")}
        >
          Reorder action
        </button>
      </div>
    </>
  );
}

export default SmartbarActionsOverflow;
