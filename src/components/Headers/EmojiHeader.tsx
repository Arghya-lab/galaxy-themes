import {
  CarFront,
  Clock,
  Flag,
  GraduationCap,
  HandMetal,
  Laugh,
  LeafyGreen,
  PartyPopper,
  PawPrint,
  Sticker,
} from "lucide-react";

function EmojiHeader() {
  return (
    <div className="emaji-header">
      <button className="emaji-nav-key active">
        <Clock size={22} />
      </button>
      <button className="emaji-nav-key">
        <Laugh size={22} />
      </button>
      <button className="emaji-nav-key">
        <HandMetal size={22} />
      </button>
      <button className="emaji-nav-key">
        <PawPrint size={22} />
      </button>
      <button className="emaji-nav-key">
        <LeafyGreen size={22} />
      </button>
      <button className="emaji-nav-key">
        <CarFront size={22} />
      </button>
      <button className="emaji-nav-key">
        <PartyPopper size={22} />
      </button>
      <button className="emaji-nav-key">
        <GraduationCap size={22} />
      </button>
      <button className="emaji-nav-key">
        <Sticker size={22} />
      </button>
      <button className="emaji-nav-key">
        <Flag size={22} />
      </button>
    </div>
  );
}

export default EmojiHeader;
