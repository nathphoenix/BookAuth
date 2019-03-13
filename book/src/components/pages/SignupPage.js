import React from "react";
import PropsType from "prop-types";
import {connect} from "react-redux"
import SignupForm from "../forms/SignupForm";
import {signup} from "../../Actions/users";

class SignupPage extends React.Component {

  submit = data => 
  this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render(){
    return <div>
      <SignupForm submit={this.submit} />
    </div>;
  }
}

  SignupPage.propsType ={
    history: PropsType.shape({
      push: PropsType.func.isRequired
    }).isRequired,
    signup: PropsType.func.isRequired
  };

  export default connect(null, {signup} )(SignupPage);