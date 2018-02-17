import React, { Component } from 'react'
import { PageTitle } from '../../Lib/Common/Views'
import SignInForm from '../../Components/Forms/SignIn'

export default class SignIn extends Component {
  render() {
    return (
      <div className="sign-in-page">
        <PageTitle title="Sign In" />
        <SignInForm location={this.props.location} />
      </div>
    )
  }
}
