import PropTypes from 'prop-types';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';
import { ImgGalleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { getSearch } from '../getSearch';

class ImageGalleryItem extends Component {
  state = { text: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      getSearch(this.props.value)
        .then(response => response.json())
        .then(text => this.setState({ text }));
    }
  }

  render() {
    return (
      this.state.text &&
      this.state.text.hits.map(el => {
        return (
          <ImgGalleryItem key={el.id}>
            <ImageGalleryItemImage
              src={el.webformatURL}
              alt={el.largeImageURL}
            />
          </ImgGalleryItem>
        );
      })
    );
  }
}

export default ImageGalleryItem;
