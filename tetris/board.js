'use strict';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

class Board {
	grid;

	// 새 게임이 시작되면 보드 초기화
	reset() {
		this.grid = this.getEmptyBoard();
	}

	//0으로 채워진 행렬을 얻는다.
	//#STUDY Array.from
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
	getEmptyBoard() {
		return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
	}
}
