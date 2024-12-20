import { ThemesType } from "../App";
import galaxyWhite from "../../galaxy/themes/stylesheets/galaxy-white.json";
import GalaxyBubblegumPop from "../../galaxy/themes/stylesheets/galaxy-bubblegum-pop.json";
import GalaxyTropicalTwilight from "../../galaxy/themes/stylesheets/galaxy-tropical-twilight.json";
import galaxyTropicalSunset from "../../galaxy/themes/stylesheets/galaxy-tropical-sunset.json";
import galaxyBlack from "../../galaxy/themes/stylesheets/galaxy-black.json";
import galaxySynthwave from "../../galaxy/themes/stylesheets/galaxy-synthwave.json";
import galaxyKanagawa from "../../galaxy/themes/stylesheets/galaxy-kanagawa.json";
import galaxyNeonVortex from "../../galaxy/themes/stylesheets/galaxy-neon-vortex.json";
import galaxyEarthyElegance from "../../galaxy/themes/stylesheets/galaxy-earthy-elegance.json";
import galaxyMysticBloom from "../../galaxy/themes/stylesheets/galaxy-mystic-bloom.json";
import galaxyElectricDream from "../../galaxy/themes/stylesheets/galaxy-electric-dream.json";
// import demoTheme from "../theme-demo.json";

export interface JsonThemeType {
  [selector: string]: Record<string, string>;
}

export default function getJsonTheme(
  currTheme?: ThemesType
): JsonThemeType | undefined {
  // return demoTheme;

  if (!currTheme) return;

  switch (currTheme.id) {
    case "galaxy-white":
      return galaxyWhite;
    case "galaxy-bubblegum-pop":
      return GalaxyBubblegumPop;
    case "galaxy-tropical-twilight":
      return GalaxyTropicalTwilight;
    case "galaxy-tropical-sunset":
      return galaxyTropicalSunset;
    case "galaxy-black":
      return galaxyBlack;
    case "galaxy-synthwave":
      return galaxySynthwave;
    case "galaxy-kanagawa":
      return galaxyKanagawa;
    case "galaxy-neon-vortex":
      return galaxyNeonVortex;
    case "galaxy-earthy-elegance":
      return galaxyEarthyElegance;
    case "galaxy-mystic-bloom":
      return galaxyMysticBloom;
    case "galaxy-electric-dream":
      return galaxyElectricDream;

    default:
      break;
  }
}
