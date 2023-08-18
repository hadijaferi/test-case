"use client";

import {useQuery} from "@tanstack/react-query";
import {getVendorList} from "@/services/vendorList";

export const VendorHook =()=>{
    const { data } = useQuery<>({
        queryKey: ["stream-hydrate-users"],
        queryFn: () => getVendorList(
            {page:0,page_size:10,lat:'35.754',long:'51.328'}
        ),
    });
    console.log(data,'data')
    return{data}
}
