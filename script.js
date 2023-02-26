window.onload = () => {
  const mainContainerElement = document.getElementById('main-container');
  
  mainContainerElement.style.backgroundColor = '#999';

  const createSquareItem = () => {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square-item');
    return squareElement;
  };

  const renderSquares = (quantity) => {
    const squaresContainerElement = document.getElementById('squares-container');
    for (let i = 0; i < quantity; i++) {
      squaresContainerElement.appendChild(createSquareItem());
    }
  };

  mainContainerElement.addEventListener('click', (ev) => {
    const inputElement = document.getElementById('input-id');
    renderSquares(Number(inputElement.value));
  });
};
