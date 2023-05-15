import PropTypes from 'prop-types';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';
import { ImgGalleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { getSearch } from '../getSearch';

class ImageGalleryItem extends Component {
  state = {
    text: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      this.setState({ loading: true });
      getSearch(this.props.value)
        .then(response => response.json())
        .then(text => this.setState({ text }))
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ loading: true });
        });
    }
  }
  render() {
    return (
      <>
        {/* {this.state.loading && <p>завантажуємо</p>} */}
        {this.state.text &&
          this.state.text.hits.map(el => {
            return (
              <ImgGalleryItem key={el.id}>
                <ImageGalleryItemImage
                  src={el.webformatURL}
                  alt={el.largeImageURL}
                />
              </ImgGalleryItem>
            );
          })}
      </>
    );
  }
}

export default ImageGalleryItem;
