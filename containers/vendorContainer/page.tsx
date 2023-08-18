"use client";

import { VendorHook } from "@/containers/vendorContainer/hooks/vendorHook";
import CardItem from "@/containers/vendorContainer/components/cardItem/page";
import { useEffect, useRef } from "react";

export const VendorContainer = () => {
  const lastItemRef = useRef(null);
  const { data, fetchData, isFetching } = VendorHook([]);
  const filteredData = data?.filter((item) => item.type !== "TEXT");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isFetching) {
          fetchData();
        }
      },
      { threshold: 1 },
    );

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [lastItemRef, fetchData]);

  return (
    <div>
      {filteredData?.map((ele, index) => {
        return (
          <div key={index}>
            <CardItem data={ele} />
          </div>
        );
      })}
      <div ref={lastItemRef} style={{ height: "1px" }} />
    </div>
  );
};
