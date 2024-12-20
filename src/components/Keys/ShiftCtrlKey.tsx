import { ChevronUp, Minus } from "lucide-react";
import { LayoutContextType } from "../../App";
import classNames from "classnames";

function ShiftCtrlKey({ currentLayout, setCurrentLayout }: LayoutContextType) {
  return (
    <button
      className={classNames("key special", {
        "shift-state-2": currentLayout === "shift",
        "shift-state-3": currentLayout === "ctrl",
      })}
      onClick={() => {
        setCurrentLayout((prev) =>
          prev === "normal" ? "shift" : prev === "shift" ? "ctrl" : "normal"
        );
      }}
    >
      {currentLayout === "normal" && <ChevronUp size={28} />}
      {currentLayout === "shift" && (
        <div className="shift-key">
          <ChevronUp className="chevron-up" size={28} />
          <Minus className="underline" size={28} />
        </div>
      )}
      {currentLayout === "ctrl" && (
        <div className="ctrl-key">
          <ChevronUp className="chevron-up" size={28} />
          <Minus className="underline" size={28} />
        </div>
      )}
    </button>
  );
}

export default ShiftCtrlKey;
