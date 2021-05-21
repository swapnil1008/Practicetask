import { combineReducers } from "redux";
import loginreducer from "./loginreducer";

const spacexdataSchemas = () => {
  return [
    { key: "Capsules", value: "capsules" },
    { key: "Cores", value: "cores" },
    { key: "Dragons", value: "dragons" },
  ];
};

const selectedSchema = (schema = null, action) => {
  if (action.type === "SCHEMA_SELECTED") {
    return action.payload;
  }
  return schema;
};

const schemaData = (state = [], action) => {
  switch (action.type) {
    case "SCHEMA_DATA":
      return [...action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  spacexschemas: spacexdataSchemas,
  schemaselected: selectedSchema,
  schemaData: schemaData,
  logindetails: loginreducer,
});
