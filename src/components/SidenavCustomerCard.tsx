import React from "react";

interface SidenavCustomerCardProp {
  customerIndex: number;
  selectedCustomer: number;
  handleCustomerSelect: (id: number) => void;
}

const SidenavCustomerCard: React.FC<SidenavCustomerCardProp> = ({
  customerIndex,
  selectedCustomer,
  handleCustomerSelect,
}) => {
  return (
    <div
      className={`py-6 border-b-2 border-r-2 ${
        selectedCustomer === customerIndex ? "bg-gray-200" : "hover:bg-gray-100"
      } p-5 cursor-pointer `}
      onClick={() => handleCustomerSelect(customerIndex)}
    >
      <p className="text-lg font-bold">
        Customer{" "}
        {customerIndex < 9 ? `0${customerIndex + 1}` : customerIndex + 1}
      </p>
      <p className="text-md mt-3 text-gray-500 font-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime
        velit aliquam pariatur.
      </p>
    </div>
  );
};

export default SidenavCustomerCard;
