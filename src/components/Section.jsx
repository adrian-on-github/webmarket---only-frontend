import React from "react";
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  showStroke, // Hier fügen wir showStroke zur Liste der Props hinzu
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 xl:py-10 ${crosses}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none xl:flex xl:left-[-11.9rem]" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none xl:flex lg:right-[1.9rem] xl:right-[-11.9rem]" />

      {crosses && showStroke && ( // Hier prüfen wir, ob crosses und showStroke wahr sind
        <>
          <div
            className={`hidden xl:flex absolute top-0 left-12.5 right-8.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none xl:flex left-[-25rem] right-[-25rem]`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section; // Hier exportieren wir die Section-Komponente als Standardexport

