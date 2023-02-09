import React, { Component } from "react";
import Input from "../include/_input";
class AddStudent extends Component {
  render() {
    return (
      <>
        <div className="container mt-5 ">
          <h2>New Student</h2>
          <form className="col g-3 d-flex-column justify-content-center" id="addstudent" onSubmit={(e) => this.props.createStudent(e, "addstudent", "students")}>
            <Input onChange={this.props.onChange} type="text" name="name" label="Name" value={this.props.person.name} />
            <Input onChange={this.props.onChange} type="text" name="age" label="Age" value={this.props.person.age} />
            <Input onChange={this.props.onChange} type="text" name="address" label="Address" value={this.props.person.address} />
            <Input onChange={this.props.onChange} type="text" name="phone" label="Phone" value={this.props.person.phone} />
            <div className="s col mt-2">
              <button className="btn btn-primary m-1" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddStudent;