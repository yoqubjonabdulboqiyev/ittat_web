import { IWithChildren } from "@/utilities/general-types";

interface ICustomLinkProps extends IWithChildren {
  skipLocaleHandling?: boolean;
  locale?: string;
  href?: string;
}

export type { ICustomLinkProps };
