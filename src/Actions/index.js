import { schemaapi } from "../API/spacexdata";

export const selectSchema = (schema) => {
  return {
    type: "SCHEMA_SELECTED",
    payload: schema,
  };
};
export const getSchemaInfo = (schema) => async (dispatch) => {
  const response = await schemaapi.get(`${schema}`);
  console.log(response.data);
  dispatch({ type: "SCHEMA_DATA", payload: response.data });
};

export const signIn = (role) => {
  return {
    type: "SIGN_IN",
    payload: {
      role: role,
    },
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
