import data from "@/app/db/location.json";

export const getLocations = ()=>{
    return data;
}

export const getLocationByName =(location)=>{
    if(!location)return data;
    const foundLocation = data?.find(
        (item)=>{

          return  item?.location.toLowerCase() === location.toLowerCase()
        }
    )
    return foundLocation || {}
}