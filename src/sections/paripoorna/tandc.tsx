import React from "react";

const TermsConditions = () => {
  return (
    <div className="px-3 lg:px-00">
      <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center py-10 lg:py-16">
        ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು
      </h3>
      <div className="max-w-5xl mx-auto font-content pb-10 text-sm">
        ಮಹಿಳೆಯರಿಗೆ ವಿಶೇಷವಾದ ಮತ್ತು ಇತ್ತೀಚಿನ ಆರೋಗ್ಯ ಸೇವೆ ಪೂರೈಸುವ ದೇಶದ ಅಗ್ರಗಣ್ಯ
        ಪ್ರತಿಷ್ಠಾನಿಗಳಲ್ಲಿ ಗರ್ಭಿ ಜ್ಞಾನ ಪೌಂಡೇಶನ್ ಒಂದುಗಿದೆ, ವಿವಿಧ ಕಾರಣಗಳಿಂದಾಗಿ
        ಪ್ರಪಂಚದಾದ್ಯಂತ ಸಂತಾನೋತ್ಪಪ್ಪಿ ಸಮಸ್ಯೆಯ ಹೆಚ್ಚುತ್ತಿರುವಾಗ, ಗಯ ಸ್ಥಾನ
        ಪ್ರತಿಷ್ಠಾನವು ದಂಪತಿಗಳಿಗೆ ಪಾಲಕರಾಗುವ ಸಂತೋಷ ಮತ್ತು ಕುಟುಂಬ ಜೀವನದ ಆನಂದ
        ಅನುಭವಿಸಲು ನೆರವು ನೀಡುವಲ್ಲಿ ಮಾಡುವಲ್ಲಿ ಆಚಾರ್ಯರ ಹೊಂದಿದೆ.
        <br />
        <br />
        ತಮ್ಮ ಸಂತತಿ ಅರಸುತ್ತಿರುವ ದಂತಗಳ ಸೇವೆ ಸಲ್ಲಿಸುವ ತನ್ನ ಅನ್ವೇಷಣೆಯಲ್ಲಿ, ಗರಪಾಣಿ
        ಪೌಂಡೇಶನ್ "ಪರಿಪೂಣ್ 2022 ಯೋಜನೆಯ ನೆರವು ನೀಡಲು ನಿರ್ಧರಿಸಿದೆ. ಇದರಡಿ ರ್ಗಂ ಮರಿ
        ಕೇಂದ್ರ ನೀಡುವ ಯಾಯಿತಿಯನ್ನು ಗಟ್ ಜಾನ ಕೌಂಡೇಶನ್ ತನ್ನ ಸಿಎಸ್‌ಆರ್ ಕಾರ್ಯಕ್ರಮ ಅವಕೆಯ
        ಭಾಗವಾಗಿ ದರಿಸುತ್ತಿದೆ.
        <br />
        <br />
        ಕರ್ನ್ ದಂಪತಿಗಳನ್ನು ಪ್ರತಿಜ್ಞಾನ ರಚಿಸಿದ ಸಮಿತಿ ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ. ಆಯ್ಕೆ
        ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಅರ್ಹತೆಗಳನ್ನು ಗರ್ಭಪಾ‌ ಫೌಂಡೇಶನ್ ನಿರಾಒಸುತ್ತದೆ. ಅಲ್ಲದೇ
        ಸಮಿತಿಯ ನಿರ್ಧಾರ ಅರಾಮವಾಗಿರುತ್ತದೆ.
      </div>
      <ul role="list" className="pb-8">
        {items.map((item) => (
          <li
            key={item.id}
            className="text-sm list-outside list-disc py-2 sm:px-6 rounded-md text-left max-w-5xl ml-4 lg:mx-auto font-content"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsConditions;

/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1, title: "ದಂಪತಿಗಳು ಭಾರತದ ನಾಗರಿಕರು ಮತ್ತು ನಿವಾಸಿಗಳಾಗಿರಬೇಕು" },
  {
    id: 2,
    title: "ಜಿಜಿ-ಕೇಡ್‌ನಿಂದ ಒದಗಿಸಲಾದ ಅಪರ್ ಕೋಡನ್ನು ದಂಪತಿ ಹೊಂದಿರಬೇಕು",
  },
  {
    id: 3,
    title:
      "ಗರ್ದ ಗುಡಿಯಲ್ಲಿ ಪೂರೈಸಲಾಗುವ ಯಾವುದೇ ಲಾಭದ ಯೋಜನೆಗಳ ಜೊತೆ ಸಂಪೂರ್ಣವನ್ನು ಸಂಯೋಜಿಸಲಾಗದು",
  },
  {
    id: 4,
    title:
      "ಪ್ರಯೋಜನಗಳನ್ನು ಅಂತರಿಕ ಸಮಿತಿ ನಿರ್ಧರಿಸುತ್ತದೆ ಮತ್ತು ಅವರ ನಿರ್ಧಾರಾ ಅಂತಿಮವಾಗಿರುತ್ತದೆ.",
  },
  {
    id: 5,
    title: "ಪರಿಪೂರ್ಣ ಲಾಭದ ಯೋಜನೆಯನ್ನು ವರ್ಗಾವಣೆ ಮಾಡಲಾಗುವುದಿಲ್ಲ. ",
  },
  {
    id: 6,
    title:
      "ಕಟ್ಟುನಿಟ್ಟಾಗಿ, ಸಮಿತಿ ವಿಸ್ತರಿಸದ ಹೊರತು, ಈ ಯೋಜನೆ ಸೂಚಿಸಿದ ದಿನಾಂಕದಂದು ಕೊನೆಗೊಳ್ಳುತ್ತದೆ. ಸಮಿತಿಯು ವಿಸ್ತರಿಸದ ಹೊರತು, ಈ ಲಾಭದ ಯೋಜನೆ ಸೂಚಿಸಿದ ದಿನಾಂಕದಂದು ಕೊನೆಗೊಳ್ಳುತ್ತದೆ",
  },
  {
    id: 7,
    title:
      "ಒಪ್ಪಿಗೆ ಸೂಚಿಸಿದ ಬಳಿಕ 50,000 ರೂ.ಗಳ ಮೊತ್ತವನ್ನು ಗರ್ಭಗುಡಿಗೆ ಮುಂಗಡವಾಗಿ ಪಾವತಿಸಬೇಕು.",
  },
  {
    id: 8,
    title: "ಸೂಚಿಸಿದ ದಿನಾಂಕದೊಳಗೆ ಮುಂಗಡ ಪಾವತಿ ಮಾಡಬೇಕು.",
  },
  {
    id: 9,
    title:
      "ಎಲ್ಲಾ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಯಾವುದೇ ಸೂಚನೆಯಿಲ್ಲದ ಬದಲಾವಣೆ ಮಾಡಬಹುದು ಇದು ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಕೇಂದ್ರ ಮತ್ತು ಗರ್ಭಜ್ಞಾನ್ ಫೌಂಡೇಶನ್‌ನ ಸ್ವಂತ ವಿವೇಚನೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
  },
  {
    id: 10,
    title:
      "*ಹೆಚ್ಚುವರಿ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು ಅನ್ವಯವಾಗಬಹುದು. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು 'ಪರಿಪೂರ್ಣ - 2022 ಅರ್ಜಿ' ಯನ್ನು ವೀಕ್ಷಿಸಿ",
  },

  // More items...
];