"use client";

import { VendorHook } from "@/containers/vendorContainer/hooks/vendorHook";
import CardItem from "@/containers/vendorContainer/components/cardItem/page";

export const VendorContainer = () => {
  const { data } = VendorHook();
  const filteredData = data?.data?.finalResult?.filter(
    (item) => item.type !== "TEXT",
  );

  console.log(filteredData, " ******* hi data");
  return (
    <div>
      {filteredData?.map((ele, index) => {
        return (
          <div key={index}>
            <CardItem data={ele} />
          </div>
        );
      })}
    </div>
  );
};
