import React, { forwardRef } from "react";
import Link from "next/link";

type BaseLinkType = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkType>(
  ({ className, children, onClick, href = "/" }, ref) => {
    return (
      <Link ref={ref} href={href} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  },
);

BaseLink.displayName = "BaseLink";

export default BaseLink;
