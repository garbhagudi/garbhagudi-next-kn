import React, { useState } from "react";
import AccordionLayout from "../Faq/FaqLayout";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="max-w-4xl mx-auto pb-10 px-3 lg:px-0">
      <h3 className="text 3xl lg:text-4xl font-heading font-bold py-10 lg:py-16 text-center">
        ಆಗಾಗ್ಗೆ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು
      </h3>
      {Data.map((items) => (
        <AccordionLayout
          title={items.title}
          key={items.title}
          index={items.title}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {items.contents}
        </AccordionLayout>
      ))}
    </div>
  );
};

export default FAQ;

const Data = [
  {
    title: "ಪರಿಪೂರ್ಣ-2022 ಯೋಜನೆಗೆ ಹೇಗೆ ನೋಂದಾಯಿಸಬೇಕು?",
    contents: (
      <div>
        ಪರಿಪೂರ್ಣ-2022 ಯೋಜನೆಗೆ ನೋಂದಾಯಿಸಲು, ನಮ್ಮ ಸಂಸ್ಥೆಯ ಯಾವುದಾದರೂ ಒಂದು ಕೇಂದ್ರಕ್ಕೆ
        ಭೇಟಿ ನೀಡಿ ಅರ್ಜಿಯನ್ನು ಪಡೆದು ಭರ್ತಿಮಾಡಿ ಸಲ್ಲಿಸತಕ್ಕದ್ದು.
      </div>
    ),
  },
  {
    title: "ಪರಿಪೂರ್ಣ-2022 ಯೋಜನೆಗೆ ಅರ್ಹತೆಗಳೇನು ?",
    contents: (
      <div>
        ವಿಶೇಷವಾಗಿ ಈ ಯೋಜನೆಯನ್ನು ಸಂತಾನ ಹೀನತೆ ನಿವಾರಣೆಯನ್ನು ಬಯಸುತ್ತಿರುವ ಹಾಗೂ
        ಚಿಕೆತ್ಸೆಗಾಗಿ ಆರ್ಥಿಕ ಸಹಾಯ ಬಯಸುವ ದಂಪತಿಗಳಿಗೋಸ್ಕರ ರೂಪಿಸಲಾಗಿದೆ.
      </div>
    ),
  },
  {
    title: `ನೊಂದಾಯಿಸಿದ ಎಲ್ಲಾ ದಂಪತಿಗಳಿಗೂ ಈ ಯೋಜನೆಯ ದಕ್ಕುತ್ತದೆಯೇ ?  `,
    contents: (
      <div>
        ಗರ್ಭಜ್ಞಾನ ಫೌಂಡೇಶನ್ ಸಮಿತಿಯು ನೊಂದಾಯಿತ ಅರ್ಜಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಒಪ್ಪಿಗೆ
        ಸೂಚಿಸಿದ ದಂಪತಿಗಳು ಈ ಯೋಜನೆಯ ಸದುಪಯೋಗ ಪಡೆದುಕೊಳ್ಳಲು ಅರ್ಹರಾಗಿರುತ್ತಾರೆ.
      </div>
    ),
  },
  {
    title: `ಅರ್ಹತೆಯ ಮಾನದಂಡ ಏನು? `,
    contents: (
      <div>
        ಐವಿಎಫ್ ಚಿಕೆತ್ಸೆಯನ್ನು ಬಯಸುತ್ತಿರುವ ದಂಪತಿಗಳಿ ಮಾತ್ರ ಈ ಯೋಜನೆಯ ಸದುಪಯೋಗ
        ಪಡೆದುಕೊಳ್ಳಬಹುದು. ಅರ್ಹತೆಯನ್ನು ಗರ್ಭಜ್ಞಾನ ಫೌಂಡೇಶನ್ ಸಮಿತಿಯು ಅರ್ಜಿಗಳನ್ನು
        ಪರಿಶೀಲಿಸಿದ ನಂತರವಷ್ಟೆ ಅರ್ಹತೆಯ ಬಗ್ಗೆ ತಿಳಿಯುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ಒಪ್ಪಿಗೆ ಸಿಕ್ಕಿದ  ನಂತರ,  ಚಿಕೆತ್ಸೆಯ ರೂಪುರೇಷುಗಳು ದೊರೆಯುತ್ತವೆಯೆ? `,
    contents: (
      <div>
        ಹೌದು, ಅರ್ಜಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಒಪ್ಪಿಗೆ ಸಿಕ್ಕ ನಂತರ ನಿಮಗೆ ನಮ್ಮ ತಜ್ಞ
        ವೈದ್ಯರಿಂದ ಚಿಕೆತ್ಸೆಯ ರೂಪುರೇಷುಗಳು ದೊರೆಯುತ್ತವೆ.
      </div>
    ),
  },
  {
    title: `ನಾನು ಪರಿಪೂರ್ಣ ಯೋಜನೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಳ್ಳದೆ ಚಿಕೆತ್ಸೆಯನ್ನು ಮುಂದುವರಿಸಬಹುದೇ?`,
    contents: (
      <div>
        ಹೌದು, ಇದರಿಂದ ಬಹು ಅಗತ್ಯವಿರುವ ದಂಪತಿಗಳಿಗೆ ಯೋಜನೆಯ ಸಹಾಯ ಪಡೆಯಲು
        ಅನುಕೂಲವಾಗುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ನಾನು ಈಗಾಗಲೇ ನೋಂದಾಯಿಸಿದ್ದಲ್ಲಿ  ಮತ್ತೆ ಪರಿಪೂರ್ಣ ಯೋಜನಗೆ ಅರ್ಜಿ ಹಾಕಬಹುದೆ?`,
    contents: (
      <div>
        ಈ ಯೋಜನೆಯು ಡಿಸೆಂಬರ್ 1, 2022 ರಿಂದ ಡಿಸೆಂಬರ್ 31, 2022 ರ ಒಳಗೆ ನೊಂದಾಯಿಸಿದ
        ದಂಪತಿಗಳಿಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ನಂತರ ಅದರಲ್ಲಿ ತಿದ್ದುಪಡಿ ಮಾಡಬಹುದೆ?`,
    contents: (
      <div>
        ಇಲ್ಲಾ, ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ನಂತರ ಯಾವುದೇ ತಿದ್ದುಪಡಿಗಳಿಗೆ ಅವಕಾಶವಿರುವುದಿಲ್ಲ.
        ಆದ್ದರಿಂದ ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ಅರ್ಜಿಯನ್ನು ಸರಿಯಾಗಿ ಓದಿ
        ಸರಿಯಾದ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ ಸ್ವಯಂ ಪರಿಶೀಲಿಸತಕ್ಕದ್ದು.
      </div>
    ),
  },
  {
    title: `ಪರಿಪೂರ್ಣ ಅರ್ಜಿ ಸಲ್ಲಿಸಿಲು ಅಂತಿಮ ದಿನಾಂಕ ಯಾವುದು?`,
    contents: <div>ಡಿಸೆಂಬರ್ 31, 2022 ರ ಒಳಗೆ ನೊಂದಾಯಿಸಿಕೊಳ್ಳಬೇಕು.</div>,
  },
  {
    title: `ನಾನು ಈಗಾಗಲೇ ಬೇರೊಂದು ಸಂಸ್ಥೆಯಲ್ಲಿ ಚಿಕಿತ್ಸೆ ಪ್ರಾರಂಭಿಸಿದ್ದು, ಪರಿಪೂರ್ಣ-2022 ಯೋಜನೆಯ ಅಡಿಯಲ್ಲಿ ಚಿಕೆತ್ಸೆ ಮತ್ತು ಅದರ ಉಪಯೋಗವನ್ನು ಪಡೆಯಬಹುದೆ?`,
    contents: (
      <div>
        ಹೌದು, ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು, ಆದರೆ ನಡೆಯುತ್ತಿರುವ ಚಿಕೆತ್ಸೆಯನ್ನು ನಿಲ್ಲಿಸಬೇಡಿ
        ಎಂದು ನಾವು ವಿನಂತಿಸುತ್ತೇವೆ, ಏಕೆಂದರೆ ಅದು ಚಿಕೆತ್ಸೆಯ ಯಶಸ್ಸಿನ ಮೇಲೆ ಪರಿಣಾಮ
        ಬೀರಬಹುದು.
      </div>
    ),
  },
  {
    title: `ನಾನು ಮೊದಲನೇ ಬೇಟಿಯಲ್ಲಿ ನೊಂದಾಯಿಸದಿದ್ದರೆ, ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ನಮಗೆ ಬೇಕಾದಾಗ ನೊಂದಾಯಿಸಕೊಳ್ಳಬಹುದೇ?`,
    contents: (
      <div>
        ಗರ್ಭಗುಡಿಯು ಆಗಾಗ್ಗೆ ಇತರೆ ವಿವಿಧ ಯೋಜನೆಗಳನ್ನು ನಡೆಸಿರುತ್ತದೆ, ಹಾಗಾಗಿ ಮುಂದಿನ
        ದಿನಗಳಲ್ಲಿ ಬೇರೆ ಯೋಜನೆಗಳ ಅಡಿಯಲ್ಲಿ ನೊಂದಾಯಿಸಲು ಸಾಧ್ಯವಿರುತ್ತದೆ.
      </div>
    ),
  },
  {
    title: `ನಾನು ತಮ್ಮ ಶಾಖೆಗಳಿಗೆ ಬೇಟಿ ನೀಡದೆ, ಆನಲೈನ್ ಮುಖಾಂತರ ಪರಿಪೂರ್ಣ-2022 ಯೋಜನೆಗೆ ನೋಂದಾಯಿಸಬಹುದೆ?`,
    contents: (
      <div>
        ಇಲ್ಲಾ, ನಿಮ್ಮ ಹತ್ತಿರದ ಗರ್ಭಗುಡಿ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ ಹಾಗು ನೊಂದಾಯಿಸಿಕೊಳ್ಳಿ.
      </div>
    ),
  },
];