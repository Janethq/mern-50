import { Component } from "react";

export default class SignUpForm extends Component {
  state = {
    name: "simon",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>SignUp</legend>

          <label>
            Name:
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Password:
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            Confirm:
            <input
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <button>Sign Up</button>
        </fieldset>
      </form>
    );
  }
}
