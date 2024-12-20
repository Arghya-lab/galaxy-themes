import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clipboard,
  ClipboardList,
  Copy,
  Mic,
  Minimize2,
  Redo,
  Scissors,
  Settings,
  Smile,
  SpellCheck,
  TabletSmartphone,
  TextSelect,
  Trash,
  Undo,
  X,
} from "lucide-react";
import { layoutType } from "../../App";

function SmartbarActionsEditor({
  setCurrentLayout,
}: {
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
}) {
  return (
    <div className="smartbar-actions-editor">
      <div className="smartbar-actions-editor-header">
        <p className="smartbar-actions-editor-header-text">
          Customize action order
        </p>
        <button onClick={() => setCurrentLayout("smartbar-edit")}>
          <ChevronLeft size={22} />
        </button>
      </div>
      <p className="actions-heading">Sticky action (0)</p>
      <div className="smartbar-extend-actions">
        <div className="smartbar-extend-key disable">
          <X size={22} />
          <span>None</span>
        </div>
      </div>
      <p className="actions-heading">Dynamic action (18)</p>
      <div className="smartbar-extend-actions">
        <div className="smartbar-extend-key">
          <Mic size={22} />
          <span>Voice input</span>
        </div>
        <div className="smartbar-extend-key">
          <Undo size={22} />
          <span>Undo</span>
        </div>
        <div className="smartbar-extend-key">
          <Redo size={22} />
          <span>Redo</span>
        </div>
        <div className="smartbar-extend-key">
          <Clipboard size={22} />
          <span>Paste</span>
        </div>
        <div className="smartbar-extend-key">
          <Copy size={22} />
          <span>Copy</span>
        </div>
        <div className="smartbar-extend-key">
          <Settings size={22} />
          <span>Settings</span>
        </div>
        <div className="smartbar-extend-key">
          <Minimize2 size={22} />
          <span>One-handed</span>
        </div>
        <div className="smartbar-extend-key">
          <ClipboardList size={22} />
          <span>Clipboard</span>
        </div>
        <div className="smartbar-extend-key">
          <Scissors size={22} />
          <span>Cut</span>
        </div>
        <div className="smartbar-extend-key">
          <Smile size={22} />
          <span>Emoji</span>
        </div>
        <div className="smartbar-extend-key">
          <SpellCheck size={22} />
          <span>Autocorre...</span>
        </div>
        <div className="smartbar-extend-key">
          <ChevronDown size={22} />
          <span>Arrow do...</span>
        </div>
        <div className="smartbar-extend-key">
          <ChevronLeft size={22} />
          <span>Arrow left</span>
        </div>
        <div className="smartbar-extend-key">
          <ChevronRight size={22} />
          <span>Arrow right</span>
        </div>
        <div className="smartbar-extend-key">
          <Trash size={22} />
          <span>Clear Pri...</span>
        </div>
        <div className="smartbar-extend-key">
          <ChevronUp size={22} />
          <span>Arrow up</span>
        </div>
        <div className="smartbar-extend-key">
          <TabletSmartphone size={22} />
          <span>one-handed</span>
        </div>
        <div className="smartbar-extend-key">
          <TextSelect size={22} />
          <span>Select all</span>
        </div>
      </div>
      <p className="actions-heading">Hidden action (0)</p>
      <div className="smartbar-extend-actions">
        <div className="smartbar-extend-key disable">
          <X size={22} />
          <span>None</span>
        </div>
      </div>
    </div>
  );
}

export default SmartbarActionsEditor;
