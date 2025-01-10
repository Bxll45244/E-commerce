import React, { useState } from "react";

const serviceList = [
  {
    id: 1,
    title: "High Quality Products",
    description: "We offer top-quality products for tech enthusiasts.",
    image: "/images/home/services/fast-delivery.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "Your orders delivered quickly to your doorstep.",
    image: "/images/home/services/fast-delivery.png",
  },
  {
    id: 3,
    title: "Great Customer Support",
    description: "Always here to assist you with any inquiries.",
    image: "/images/home/services/fast-delivery.png",
  },
  {
    id: 4,
    title: "Affordable Prices",
    description: "High-quality products at competitive prices.",
    image: "/images/home/services/fast-delivery.png",
  },
];

const Service = () => {
  const [myServices, setMyServices] = useState(serviceList);

  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title my-5 text-secondary leading-[30px]">
              Our Journey and Services
            </h2>
            <p>
              We provide a curated selection of high-quality tech-inspired
              products, backed by fast shipping and exceptional customer
              service. Our mission is to empower and inspire tech enthusiasts
              through our carefully chosen merchandise and community engagement
              initiatives.
            </p>
            <button className="btn bg-red font-semibold text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 item-center">
            {myServices.length > 0 &&
              myServices.map((service) => (
                <div key={service.id} className="shadow-md rounded p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold mt-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
