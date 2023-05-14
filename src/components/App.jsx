import React from 'react';
import { GlobalStyle } from './GlobalStyle';
// import Button from './Button/Button';
// import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import { Component } from 'react';
// import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    textSearh: '',
  };
  handleSubmit = textSearh => {
    this.setState({ textSearh });
  };
  render() {
    console.log(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Button /> */}
        <Loader />
        {/* <Modal /> */}
        <Searchbar onSearch={this.handleSubmit} />
        {/* <ImageGallery /> */}
        <ul>
          <ImageGalleryItem value={this.state.textSearh} />
        </ul>

        <GlobalStyle />
      </div>
    );
  }
}
export default App;
