const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//상수를 사용해 캔버스 크리를 계한
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//블록 크기 변경
//[?] scale
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
