import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

class CategoryForm extends Component {
  state = {
    category: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          value={this.state.category}
          onChange={this.handleChange}
          inputProps={{
            name: "category"
          }}
        >
          {[
            "",
            "Ace",
            "Kill",
            "Block",
            "Service Error",
            "Ball Handling Error",
            "Fault",
            "Hitting Error",
            "Blocking Error"
          ].map(category => {
            return <MenuItem value={category}>{category}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  }
}

export default CategoryForm;
