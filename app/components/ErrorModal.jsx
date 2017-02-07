import React from 'react';
import ReactDOM from 'react-dom';
import ReactServer from 'react-dom/server';

const ErrorModal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps() {
    return {
      title: 'Something happened'
    };
  },
  componentDidMount() {
    const { title, message } = this.props;
    const dialog = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{ title }</h4>
        <p>{ message }</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );

    const dialogHTML = $(ReactServer.renderToString(dialog));
    $(ReactDOM.findDOMNode(this)).html(dialogHTML);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render() {
    return (
      <div></div>
    )
  }
});

module.exports = ErrorModal;
