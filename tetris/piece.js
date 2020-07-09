class Piece {
	x;
	y;
	color;
	shape;
	ctx;

	constructor(ctx) {
		this.ctx = ctx;
		this.spawn(); //알을 낳다.
	}

	spawn() {
		this.color = 'blue';
		this.shape = [ [ 2, 0, 0 ], [ 2, 2, 2 ], [ 0, 0, 0 ] ];

		// starting position
		this.x = 3;
		this.y = 0;
	}

	// 보드에 테트로미노를 그리기 위해, shape의 모든 셀을 순회한다.
	// 셀 값이 0보다 크면, 블록을 칠한다.
	draw() {
		this.ctx.fillStyle = this.color;
		this.shape.forEach((row, y) => {
			row.forEach((value, x) => {
				// this.x, this.y는 shape의 상단 왼쪽 좌표이다
				// shape 안에 있는 블록 좌표에 x, y를 더한다.
				// 보드에서 블록의 좌표는 this.x + x가 된다.
				if (value > 0) {
					//STUDY - fillRect(canvasRenderingcontext2D)
					//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
					this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
				}
			});
		});
	}
}
