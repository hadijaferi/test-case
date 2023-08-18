import { useState } from "react";
import { getVendorList } from "@/services/vendorList";

export const VendorHook = (initialData) => {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const newData = await getVendorList({
        page: page,
        page_size: 10,
        lat: "35.754",
        long: "51.328",
      });

      setData((prevData) => [...prevData, ...newData.data.finalResult]);
      setPage((prevPage) => prevPage + 1);
      console.log(page, "page");
    } catch (error) {
    } finally {
      setIsFetching(false);
    }
  };

  return { data, fetchData, isFetching };
};
