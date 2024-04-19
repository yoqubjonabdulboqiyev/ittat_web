import { useMemo, useState } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type HoverData<T extends HTMLElement | SVGSVGElement> = {
     hoverProps: DetailedHTMLProps<HTMLAttributes<T>, T>;
     isHovered: boolean;
};

function useHover<T extends HTMLElement | SVGSVGElement>(): HoverData<T> {
     const [isHovered, setIsHovered] = useState(false);

     const hoverProps: HoverData<T>["hoverProps"] = useMemo(
          () => ({
               onMouseEnter: () => setIsHovered(true),
               onMouseLeave: () => setIsHovered(false),
          }),
          [setIsHovered]
     );

     return { hoverProps, isHovered };
}

export { useHover };
