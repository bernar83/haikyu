import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

class CategoryForm extends Component {
  render() {
    return (
      <FormControl style={{ display: "block" }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={this.props.category}
          onChange={this.props.handleChange}
          inputProps={{
            name: "category"
          }}
        >
          {[
            "Ace",
            "Kill",
            "Block",
            "Service Error",
            "Ball Handling Error",
            "Fault",
            "Hitting Error",
            "Blocking Error"
          ].map(category => {
            return (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
}

export default CategoryForm;
