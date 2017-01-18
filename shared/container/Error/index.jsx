import React, { Component } from 'react'

const mapStateToProps = state => {
  const { status, type, message } = state.error
  return {
    status,
    type,
    message,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(AuthActions, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class Error extends Component {

  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      status,
      type,
      message,
    }))

    return (
      <div>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default Error
