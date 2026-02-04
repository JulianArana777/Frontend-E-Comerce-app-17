interface Datum {
   id:number;
    name:string;
    description:string;
    price:number;
    pictureurl:string;
    producttype:string;
    productbrand:string

}

export interface Ipagination{
    PageIndex:number;
    PageSize:number;
    cont:number;
    data:Datum[];
}