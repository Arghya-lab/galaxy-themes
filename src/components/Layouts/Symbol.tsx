import { layoutType } from "../../App";
import NormalHeader from "../Headers/NormalHeader";
import { Check, Delete } from "lucide-react";

function Symbol({
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
      <div className="key-container">
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
        <div className="row">
          <button className="key">@</button>
          <button className="key">#</button>
          <button className="key">$</button>
          <button className="key">%</button>
          <button className="key">&</button>
          <button className="key">-</button>
          <button className="key">+</button>
          <button className="key">(</button>
          <button className="key">)</button>
          <button className="key">/</button>
        </div>
        <div className="row">
          <button className="key special">{"=/<"}</button>
          <button className="key">*</button>
          <button className="key">"</button>
          <button className="key">'</button>
          <button className="key">:</button>
          <button className="key">;</button>
          <button className="key">!</button>
          <button className="key">?</button>
          <button className="key special">
            <Delete size={28} />
          </button>
        </div>
        <div className="row">
          <button
            className="key special symbol-convart"
            onClick={() => setCurrentLayout("normal")}
          >
            ABC
          </button>
          <button className="key">,</button>
          <button className="key number-convert">1234</button>
          <button className="key space"></button>
          <button className="key">.</button>
          <button className="key special">
            <Check size={28} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Symbol;
