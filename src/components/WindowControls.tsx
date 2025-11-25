import type { WINDOW_CONFIG } from "@/constants";
import useWindowStore from "@/store/window";

export default function WindowControls({
  target,
}: {
  target: keyof typeof WINDOW_CONFIG;
}) {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
}
