import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSchema, getSchemaInfo } from "../Actions/index";
class SchemaList extends Component {
  renderList() {
    return (
      <div>
        <select
          onChange={(event) => {
            this.props.selectSchema(event.target.value);
            this.props.getSchemaInfo(event.target.value);
          }}
        >
          {this.props.spacexschemas.map((schema) => {
            return (
              <option key={schema.value} value={schema.value}>
                {schema.key}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { spacexschemas: state.spacexschemas };
};

export default connect(mapStateToProps, { selectSchema, getSchemaInfo })(
  SchemaList
);
