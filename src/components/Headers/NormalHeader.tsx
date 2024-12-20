import {
  ChevronLeft,
  Clipboard,
  ClipboardList,
  Copy,
  Ellipsis,
  Minimize2,
  Redo,
  Scissors,
  Settings,
  Undo,
} from "lucide-react";
import { layoutType } from "../../App";
import { useState } from "react";

function NormalHeader({
  setCurrentLayout,
  setIsIncognito,
}: {
  setCurrentLayout: React.Dispatch<React.SetStateAction<layoutType>>;
  setIsIncognito: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isSmartBarCandidateRowPresent, setIsSmartBarCandidateRowPresent] =
    useState(true);

  return (
    <div
      className="smartbar"
      style={{
        justifyContent: !isSmartBarCandidateRowPresent
          ? "flex-start"
          : "space-between",
      }}
    >
      <button
        className="smartbar-action-toggle"
        onClick={() => setIsSmartBarCandidateRowPresent((p) => !p)}
      >
        <ChevronLeft size={22} />
      </button>
      {isSmartBarCandidateRowPresent ? (
        <>
          <div className="smartbar-actions-row">
            <button
              className="smartbar-key"
              onClick={() => setIsIncognito((p) => !p)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path d="m17.06 13c-1.86 0-3.42 1.33-3.82 3.1-.95-.41-1.82-.3-2.48-.01-.41-1.78-1.97-3.09-3.82-3.09-2.17 0-3.94 1.79-3.94 4s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68.34-.24 1.23-.69 2.32.02.18 2.05 1.84 3.66 3.9 3.66 2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4m-10.12 6.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86 2.82 1.28 2.82 2.86-1.27 2.86-2.82 2.86m4.94-9.36h-20v1.5h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58l-2.22.74-2.23-.74-.05-.01c-.53-.15-1.09.13-1.29.64l-2.43 6.32h12l-2.44-6.32z" />
              </svg>
            </button>
            <button className="smartbar-key">
              <Undo size={22} />
            </button>
            <button className="smartbar-key">
              <Redo size={22} />
            </button>
            <button className="smartbar-key disable">
              <Clipboard size={22} />
            </button>
            <button className="smartbar-key disable">
              <Copy size={22} />
            </button>
            <button className="smartbar-key">
              <Settings size={22} />
            </button>
            <button className="smartbar-key">
              <Minimize2 size={22} />
            </button>
            <button
              className="smartbar-key"
              onClick={() => setCurrentLayout("clipboard")}
            >
              <ClipboardList size={22} />
            </button>
            <button className="smartbar-key">
              <Scissors size={22} />
            </button>
          </div>
          <button
            className="smartbar-edit-key"
            onClick={() =>
              setCurrentLayout((prev) =>
                prev !== "smartbar-edit" ? "smartbar-edit" : "normal"
              )
            }
          >
            <Ellipsis size={22} />
          </button>
        </>
      ) : (
        <div className="smartbar-candidates-row" />
      )}
    </div>
  );
}

export default NormalHeader;
