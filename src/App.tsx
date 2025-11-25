import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Dock, Navbar, Welcome } from "@/components";
import { Terminal } from "@/windows";

gsap.registerPlugin(Draggable);

export default function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
}
