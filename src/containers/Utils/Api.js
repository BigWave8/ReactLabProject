import axios from "axios";
import { setTextAndImages } from "./ProcessData";

const restApi = axios.create({
  baseURL: "http://localhost:8080/notebook",
  responseType: "json",
});

export const fetchData = async () => {
  try {
    let responseData = await restApi.get("/");
    return setTextAndImages(responseData.data);
  } catch {
    console.log("error, can't fetch data");
  }
};

export const fetchDataById = async (id) => {
  try {
    let responseElement = await restApi.get("/" + id);
    return setTextAndImages([responseElement.data]);
  } catch {
    console.log("error, can't fetch element");
  }
};

export const fetchWithFilters = async (
  minPrice,
  maxPrice,
  minTargetAge,
  maxTargetAge
) => {
  try {
    let responseFiltredData = await restApi.get(
      `/minPrice=${minPrice}/maxPrice=${maxPrice}/minTargetAge=${minTargetAge}/maxTargetAge=${maxTargetAge}`
    );
    return setTextAndImages(responseFiltredData.data);
  } catch {
    console.log("error, can't filter element");
  }
};
