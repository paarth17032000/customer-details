import React from "react";

interface CustomerDetailsProps {
  selectedCustomer: number;
  images: string[];
};

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ selectedCustomer, images }) => {
  return (
    <div className="py-10 lg:px-20 md:px-10 px-4 h-[calc(100vh-84px)] overflow-y-auto md:left-[350px] left-[200px] fixed">
      <h1 className="text-center text-2xl">
        Customer {selectedCustomer + 1} Details here
      </h1>
      <h3 className="text-center text-2xl">
        Title - {selectedCustomer + 1}
      </h3>
      <p className="text-center mt-3 w-4/5 m-auto text-gray-500 font-medium">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        aspernatur, autem voluptas quibusdam sunt odit vel sint porro omnis,
        recusandae."
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:px-12 px-6 mt-8">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg border-2 shadow-md h-[180px] p-3 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
            <img
              src={image}
              alt={`Image_${index}`}
              className=" h-full w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
