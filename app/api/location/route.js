import { getLocations } from "./location-utils";

export async function GET(request) { 
    return Response.json(getLocations())
}