import PropTypes from 'prop-types';
// import { ContactsBlock } from './Loader.styled';
import { Component } from 'react';

class Searcbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value) {
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">пошук</button>
          <input
            type="search"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}
export default Searcbar;
