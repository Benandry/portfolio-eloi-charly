declare module "aos" {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?:
      | "top-bottom"
      | "top-center"
      | "top-top"
      | "center-bottom"
      | "center-center"
      | "center-top"
      | "bottom-bottom"
      | "bottom-center"
      | "bottom-top";
  }

  interface AosApi {
    init: (options?: AosOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  }

  const AOS: AosApi;
  export default AOS;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";

declare module "react-typewriter-effect" {
  import type { ComponentType } from "react";

  interface TypewriterEffectProps {
    startDelay?: number;
    cursorColor?: string;
    multiText?: string[];
    multiTextDelay?: number;
    typeSpeed?: number;
    deleteSpeed?: number;
    loop?: boolean;
  }

  const TypewriterEffect: ComponentType<TypewriterEffectProps>;
  export default TypewriterEffect;
}