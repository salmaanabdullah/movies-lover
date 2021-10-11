import React from 'react';
import propTypes from 'prop-types';
import DefaultErrorComponent from './Error';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: propTypes.node.isRequired,
    ErrorComponent: propTypes.func,
    onCatch: propTypes.func,
  };

  static defaultProps = {
    ErrorComponent: DefaultErrorComponent,
    onCatch: () => {},
  };

  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    this.props.onCatch();
  }

  render() {
    const { children, ErrorComponent } = this.props;
    return this.state.hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;
