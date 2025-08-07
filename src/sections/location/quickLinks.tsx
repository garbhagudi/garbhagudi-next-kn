import React from "react";
import Link from "next/link";
import { HiCheck } from "react-icons/hi";

const QuickLinks = () => {
  return (
    <div className="bg-brandPink5 mt-5 px-3">
      <div className="flex flex-col lg:flex-row  items-start justify-evenly pt-10 pb-10 max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4qxl font-heading font-bold underline pb-6">
          ನಮ್ಮ ಇತರ ಶಾಖೆಗಳು
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {Data.map((items) => (
            <div key={items.id}>
              <Link
                href={items.link}
                className="text-sm lg:text-base font-semibold font-content flex items-center hover:underline"
              >
                <HiCheck className="bg-green-700 text-white stroke-2 w-6 h-6 p-1 rounded-full mr-2" />
                {items.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;

const Data = [
  {
    id: 2,
    title: "Best IVF Centre in Hanumanthanagar",
    link: "/locations/hanumanthanagar",
  },
  {
    id: 3,
    title: "Best IVF Centre in Kalyan Nagar",
    link: "/locations/kalyan-nagar",
  },
  {
    id: 4,
    title: "Best IVF Centre in Jayanagar",
    link: "/locations/jayanagar",
  },
  {
    id: 5,
    title: "Best IVF Centre in Electronic City",
    link: "/locations/electronic-city",
  },
  {
    id: 6,
    title: "Best IVF Centre in Marathahalli",
    link: "/locations/marathahalli",
  },
  {
    id: 7,
    title: "Best IVF Centre in New Bel Road",
    link: "/locations/new-bel-road",
  },
  {
    id: 8,
    title: "Best IVF Centre in Nagarabhavi",
    link: "/locations/nagarabhavi",
  },
  {
    id: 9,
    title: "Best IVF Centre in Yelahanka",
    link: "/locations/yelahanka",
  },
  // {
  //   id: 10,
  //   title: "Best IVF Centre in Davanagere",
  //   link: "/locations/davanagere",
  // },
];
