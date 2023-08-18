
export type TReq ={
    page:number,
    page_size:number;
    lat:string,
    long:string,
}

export type TRes ={

    data:TData
}

export type TData={
    finalResult:Array<{type:string,data:TDataFinalResult}>
}

export type TDataFinalResult={
    action: string
    address: string
    area: string
    backgroundImage:string
    title:string
    voteCount:number
    cuisinesArray:Array<{id:number,title:string}>
    deliver:boolean
    deliveryFee:number
    defLogo:string
    best_coupon:string
}
