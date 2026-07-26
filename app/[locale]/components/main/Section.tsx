import React, { forwardRef } from "react";

type SectionType = {
  className?: string;
  children?: React.ReactNode;
};

const Section = forwardRef<HTMLElement, SectionType>(
  ({ className, children }, ref) => {
    return (
      <section ref={ref} className={`${className} fade-up h-full`}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
