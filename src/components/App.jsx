import React from 'react';
import { GlobalStyle } from './GlobalStyle';
// import Button from './Button/Button';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
// import Searchbar from './Searchbar/Searchbar';

export const App = () => {
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
      React homework template
      {/* <Button /> */}
      {/* <ImageGallery /> */}
      {/* <ImageGalleryItem /> */}
      <Loader />
      {/* <Modal /> */}
      {/* <Searchbar /> */}
      <GlobalStyle />
    </div>
  );
};
export default App;
