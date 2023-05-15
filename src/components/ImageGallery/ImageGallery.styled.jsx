import styled from 'styled-components';

export const ImgGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(
    4,
    1fr
  ); /* Изменяем grid-template-columns для 4 колонок */
  grid-auto-rows: minmax(
    320px,
    auto
  ); /* Добавляем grid-auto-rows для высоты строк */
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
