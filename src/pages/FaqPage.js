import React from "react";
import MainLayout from "../layout/MainLayout";
import Accordion from "../components/Accordion";


const accordionData = [
  {
    title: "How much do you charge and what are your prices?",
    content: `Please see Courses for our latest prices`,
  },
  {
    title: "What is a hybrid course?",
    content: `A hybrid course is one that combines online and in-person lessons. As of now, all practical/performance lessons are taught in-person. However, the Theory `,
  },
  {
    title: "What are your qualifications?",
    content: `Please see our About page Meet our Teachers to see biographies of our teachers in your area including qualifications, experience and styles.
    All of our teachers are .....***yada yada .`,
  },
];
function FaqPage() {
  return (
    <MainLayout>
      <div className="page-layout">
        <div>
          <h1>Faqs page</h1>
        </div>
        <Accordion sections={accordionData} />
      </div>
    </MainLayout>
  );
}

export default FaqPage;
