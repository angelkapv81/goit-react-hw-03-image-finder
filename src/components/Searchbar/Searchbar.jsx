import PropTypes from 'prop-types';
import { SearchFormInput } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchFormButton } from './Searchbar.styled';
import { SearchFormButtonLabel } from './Searchbar.styled';
import { Component } from 'react';
import { Searchbar } from './Searchbar.styled';

import { ImSearch } from 'react-icons/im';

class Searcbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.value) {
      return console.log('упс');
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <ImSearch />
            </SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="search"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}
export default Searcbar;
