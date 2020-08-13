import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "",
    des: "",
    read: false,
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleDes = (event) => {
    this.setState({
      des: event.target.value,
    });
  };

  handleRead = (event) => {
    this.setState({
      read: true,
    });
  }

  handleSubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My Profile</h1>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={this.state.name}
          placeholder='Your Name'
          onChange={this.handleName}
        />
        <br />
        <label>Gender</label>
        <br />
        <select onChange={this.handleGender}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <br />
        <label>Description</label>
        <br />
        <textarea
          cols="28"
          rows="4"
          value={this.state.des}
          placeholder="Description about yourself"
          onChange={this.handleDes}>
        </textarea>
        <br/>
        <label>
        <input type="checkbox" 
        value="Man"
        onChange={this.handleRead}/>
        I have read the terms of conduct
        </label>
        <br />
        <input type="submit"
          value="Submit"
          disabled={!this.state.name | !this.state.gender | !this.state.des | !this.state.read}
        />
      </form>
    );
  }
}

export default MyProfile;


