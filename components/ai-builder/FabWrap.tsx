// import type { FabPanel } from "@/lib/ai-builder/types";

// interface FabWrapProps {
//   fabReady: boolean;
//   fabOpen: boolean;
//   onToggleOpen: () => void;
//   onOpenPanel: (panel: FabPanel) => void;
// }

// export default function FabWrap({ fabReady, fabOpen, onToggleOpen, onOpenPanel }: FabWrapProps) {
//   return (
//     <div className={"fab-wrap" + (fabReady ? " ready" : "") + (fabOpen ? " open" : "")}>
//       {/* <span className="fab-hint">Manage your website</span> */}
//       <button className="fab-mini fab-download" type="button" onClick={() => onOpenPanel("download")}>
//         <span className="fab-mini-icon">📥</span>
//         <span className="fab-mini-text">Download Code</span>
//       </button>
//       <button className="fab-mini fab-edit" type="button" onClick={() => onOpenPanel("edit")}>
//         <span className="fab-mini-icon">✏️</span>
//         <span className="fab-mini-text">Request Changes</span>
//       </button>
//       <button className="fab-mini fab-expert" type="button" onClick={() => onOpenPanel("expert")}>
//         <span className="fab-mini-icon">🎯</span>
//         <span className="fab-mini-text">Talk to Expert</span>
//       </button>
//       <button className="fab-main" type="button" onClick={onToggleOpen}>
//         +
//       </button>
//     </div>
//   );
// }
