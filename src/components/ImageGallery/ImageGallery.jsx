import PropTypes from 'prop-types';
import { ContactsBlock } from './ImageGallery.styled';
import { Component } from 'react';
import { getSearch } from '../getSearch';

class ImageGallery extends Component {
  state = { text: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      getSearch(this.props.value)
        .then(response => response.json())
        .then(text => this.setState({ text }));
    }
  }

  render() {
    // console.log(this.state.text);
    return (
      this.state.text &&
      this.state.text.hits.map(el => {
        return (
          <li key={el.id}>
            <img src={el.previewURL} alt={el.largeImageURL} />
          </li>
        );
      })
    );
  }
}

// const ImageGallery = ({}) => {
//   return <ContactsBlock></ContactsBlock>;
// };

export default ImageGallery;
