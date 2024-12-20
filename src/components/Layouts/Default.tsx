import { Check, Delete, Smile } from "lucide-react";
import NormalHeader from "../Headers/NormalHeader";
import ShiftCtrlKey from "../Keys/ShiftCtrlKey";
import { layoutType } from "../../App";
import KeyWithPopup from "../Keys/KeyWithPopup";

function Default({
  currentLayout,
  setCurrentLayout,
  isIncognito,
  setIsIncognito,
}: {
  currentLayout: layoutType;
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
  isIncognito: boolean;
  setIsIncognito: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <NormalHeader
        setCurrentLayout={setCurrentLayout}
        setIsIncognito={setIsIncognito}
      />
      <div className="key-container">
        {isIncognito && (
          <div className="incognito-indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="300"
              width="300"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="currentColor"
            >
              <path d="m17.06 13c-1.86 0-3.42 1.33-3.82 3.1-.95-.41-1.82-.3-2.48-.01-.41-1.78-1.97-3.09-3.82-3.09-2.17 0-3.94 1.79-3.94 4s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68.34-.24 1.23-.69 2.32.02.18 2.05 1.84 3.66 3.9 3.66 2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4m-10.12 6.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86 2.82 1.28 2.82 2.86-1.27 2.86-2.82 2.86m4.94-9.36h-20v1.5h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58l-2.22.74-2.23-.74-.05-.01c-.53-.15-1.09.13-1.29.64l-2.43 6.32h12l-2.44-6.32z" />
            </svg>
          </div>
        )}
        {currentLayout === "shift" ? (
          <div className="row">
            <button className="key">!</button>
            <button className="key">@</button>
            <button className="key">#</button>
            <button className="key">$</button>
            <button className="key">%</button>
            <button className="key">^</button>
            <button className="key">&</button>
            <button className="key">*</button>
            <button className="key">(</button>
            <button className="key">)</button>
          </div>
        ) : (
          <div className="row">
            <button className="key">1</button>
            <button className="key">2</button>
            <button className="key">3</button>
            <button className="key">4</button>
            <button className="key">5</button>
            <button className="key">6</button>
            <button className="key">7</button>
            <button className="key">8</button>
            <button className="key">9</button>
            <button className="key">0</button>
          </div>
        )}
        <div className="row">
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            q
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            w
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            e
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            r
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            t
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            y
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            u
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            i
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            o
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            p
          </button>
        </div>
        <div className="row">
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            a<span className="key-hint">@</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            s<span className="key-hint">#</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            d<span className="key-hint">$</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            f<span className="key-hint">%</span>
          </button>
          <KeyWithPopup
            currentLayout={currentLayout}
            keyText="g"
            hintKey="&"
            popupKeys={["ē", "ê", "é", "è", "ë"]}
          />
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            h<span className="key-hint">-</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            j<span className="key-hint">+</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            k<span className="key-hint">(</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            l<span className="key-hint">)</span>
          </button>
        </div>
        <div className="row">
          <ShiftCtrlKey
            currentLayout={currentLayout}
            setCurrentLayout={setCurrentLayout}
          />
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            z<span className="key-hint">*</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            x<span className="key-hint">"</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            c<span className="key-hint">'</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            v<span className="key-hint">:</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            b<span className="key-hint">;</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            n<span className="key-hint">!</span>
          </button>
          <button
            className={currentLayout === "normal" ? "key" : "key capital"}
          >
            m<span className="key-hint">?</span>
          </button>
          <button className="key special">
            <Delete size={28} />
          </button>
        </div>
        <div className="row">
          <button
            className="key special symbol-convart"
            onClick={() => setCurrentLayout("symbol")}
          >
            ?123
          </button>
          <button className="key">,</button>
          <button className="key" onClick={() => setCurrentLayout("emoji")}>
            <Smile />
          </button>
          <button className="key space">English (United States)</button>
          <button className="key">.</button>
          <button className="key special enter">
            <Check size={28} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Default;
