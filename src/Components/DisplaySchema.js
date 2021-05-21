import React from "react";
import { connect } from "react-redux";

const DisplaySchema = (props) => {
  const renderList = () => {
    return (
      <div>
        {props.schemaData.map((item) => {
          return (
            <div>
              <pre
                style={{
                  background: "#eee",
                  padding: "1em",
                  border: "1px solid black",
                }}
              >
                <code>{JSON.stringify(item, null, 2)}</code>
              </pre>
              {props.role === "admin" ? (
                <button type="button" style={{ backgroundColor: "red" }}>
                  Admin access
                </button>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    );
  };
  return <div>{renderList()}</div>;
};
const mapStateToProps = (state) => {
  return {
    schema: state.schemaselected,
    schemaData: state.schemaData,
    role: state.logindetails.role,
  };
};
export default connect(mapStateToProps)(DisplaySchema);
