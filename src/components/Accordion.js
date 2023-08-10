import React, { useState } from "react";

const accordionStyles = {
  maxWidth: "500px",
  backgroundColor: "lightgrey",
  marginTop: "0",
  marginBottom: "0",
  marginLeft: "auto",
  marginRight: "auto",
};

const accordionTitleStyles = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  padding: "4px",
  backgroundColor: "rgb(255 255 255)",
  width: "100%",
};
const accordionContentStyles = {
  textAlign: "left",
  paddingBlock: "8px",
  paddingInline: "10px",
  backgroundColor: "rgb(245 245 245)",
  width: "100%",
};
const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <>
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <h4>{section.title}</h4>
        <span>{isActiveSection ? "-" : "+"}</span>
      </div>
      {isActiveSection && (
        <div style={accordionContentStyles}>{section.content}</div>
      )}
    </>
  );
};
function Accordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={accordionStyles}>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
