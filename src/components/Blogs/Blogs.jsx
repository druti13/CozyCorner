import React from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

const BlogsData = [
  {
    id: 1,
    image: pic1,
    title: "Home Improvement",
    description: "Improvements to the property (i.e. garden work or garage maintenance/additions). ",
    aosDelay:"0",
  },
  {
    id: 2,
    image: pic2,
    title: "Furniture Care",
    description: "Proper care and maintenance of furniture, surfaces and soft furnishings ensures longevity, so that you get to enjoy your furniture for many years to come. ",
    aosDelay:"200",
  },
  {
    id: 3,
    image: pic3,
    title: "Interior Design",
    description: "Sketching various design plans, determining costs for different projects and sourcing materials and products for the designs. ",
    aosDelay:400,
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-black justify-center text-center uppercase text-2xl lg:text-3xl font-bold">
          Our Recent Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {BlogsData.map((data) => (
            <div data-aos="zoom-out" key={data.id} className="flex flex-col items-center gap-4">
              <img
                src={data.image}
                alt={data.title}
                className="w-48 h-auto sm:w-64 object-cover rounded-md"
                // Adjust the width classes as needed (e.g., w-48, w-64)
              />
              <div className="text-center">
                <h1 className="lg:text-lg font-bold text-black">{data.title}</h1>
                <p className="text-gray-500 text-sm">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
