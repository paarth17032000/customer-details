import { useEffect, useState } from "react";
import CustomerDetails from "../components/CustomerDetails";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [customers, setCustomers] = useState<number>(10);
  const [selectedCustomer, setSelectedCustomer] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  const selectCustomer = (id: number) => {
    setSelectedCustomer(id);
  };

  const fetchImages = () => {
    let randomImagesArr = [];
    for (let i = 0; i < 9; i++) {
      randomImagesArr.push(
        `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 50)}`
      );
    }
    setImages(randomImagesArr);
  };

  const handleScroll = () => {
    setCustomers(customers + 10);
  };

  useEffect(() => {
    fetchImages();
    const intervalId = setInterval(fetchImages, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-start px-10 h-[84px] sticky top-0 bg-white border-b-2 border-black/10 shadow-md">
        <h1 className="text-center text-4xl font-extrabold">Cube.</h1>
      </nav>
      <div className="w-full flex h-[calc(100vh - 84px)]">
        <Sidebar
          customers={customers}
          selectedCustomer={selectedCustomer}
          selectCustomer={selectCustomer}
          handleScroll={handleScroll}
        />
        <CustomerDetails selectedCustomer={selectedCustomer} images={images} />
      </div>
    </div>
  );
};

export default Home;
