import React, { useEffect, useState, useRef } from "react";
import SidenavCustomerCard from "./SidenavCustomerCard";

interface SidebarProps {
  customers: number;
  handleScroll: () => void;
  selectedCustomer: number;
  selectCustomer: (id: number) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  selectedCustomer,
  customers,
  selectCustomer,
  handleScroll,
}) => {
  const containerScrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const containerScroll = containerScrollRef.current;
    if (!containerScroll) return;

    const handleScrollEvent = () => {
      const { clientHeight, scrollTop, scrollHeight } = containerScroll;
      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        handleScroll();
        setScroll(!scroll);
      }
    };

    containerScroll.addEventListener("scroll", handleScrollEvent);
    return () => {
      containerScroll.removeEventListener("scroll", handleScrollEvent);
    };
  }, [scroll]);

  const handleCustomerSelect = (id: number) => {
    selectCustomer(id);
  };

  return (
    <div
      ref={containerScrollRef}
      className="overflow-y-auto h-[calc(100vh-84px)] side-scroll fixed left-0 top-[84px] bottom-0 md:w-[350px] w-[200px] " // Adjust height and overflow
    >
      {new Array(customers).fill(1).map((cutomerIndex, index) => (
        <SidenavCustomerCard
          key={index}
          customerIndex={index}
          selectedCustomer={selectedCustomer}
          handleCustomerSelect={handleCustomerSelect}
        />
      ))}
    </div>
  );
};

export default Sidebar;
