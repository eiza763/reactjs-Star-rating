
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "What is JSX?",
      content: "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file."
    },
    {
      title: "What are Components?",
      content: "Components are independent and reusable bits of code that return JSX elements to be rendered to the screen."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div 
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
            style={{
              padding: '10px',
              backgroundColor: '#f0f0f0',
              cursor: 'pointer',
              border: '1px solid #ccc',
              marginBottom: '5px'
            }}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div 
              className="accordion-content"
              style={{
                padding: '10px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                marginBottom: '10px'
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
