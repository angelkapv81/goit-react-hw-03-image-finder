import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {};
  render() {
    return (
      <>
        <ImgGallery>
          <ImageGalleryItem value={this.state.textSearh} />
        </ImgGallery>
      </>
    );
  }
}
// }

export default ImageGallery;
