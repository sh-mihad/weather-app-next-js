import { getLocationByName } from "../location-utils";

export async function GET(request,{params}) {   
    return Response.json(getLocationByName(params?.name))
}