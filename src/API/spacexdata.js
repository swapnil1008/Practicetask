import axios from "axios";
export const schemaapi = axios.create({
  baseURL: "https://api.spacexdata.com/v4/",
});

export const validate = axios.create({
  baseURL: "https://run.mocky.io/v3/0cec3d68-00cb-4f05-a2cf-c4e36a64c430",
});
