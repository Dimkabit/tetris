export class Controller {
	constructor (game, view) {
		this.game = game;
		this.view = view;




	}

	init(codeKey) {
		window.addEventListener('keydown', event => {
			if(event.code === codeKey) {
				this.view.init();
				this.start();
			} 
		})
	}

	initClick(click) {
		const preview = document.querySelector('.preview');		
		preview.addEventListener('click', event => {
			if(event.click === click) {
				this.view.init();
				this.start();
				this.leftElem();
				this.downElem();
				this.rightElem();
				this.upElem();
			}
		})
	}

	leftElem(click) {
		const leftElem = document.querySelector('.leftElem');
		console.log(leftElem);
		
		leftElem.addEventListener('click', event => {
			if(event.click === click) {
				this.game.moveLeft();
				this.view.showArea(this.game.viewArea)
			}
		})	
	}

	upElem(click) {
		const upElem = document.querySelector('.upElem');
		console.log(upElem);
		
		upElem.addEventListener('click', event => {
			if(event.click === click) {
				this.game.rotateTetramino();
				this.view.showArea(this.game.viewArea);
			}
		})	
	}

	rightElem(click) {
		const rightElem = document.querySelector('.rightElem');
		console.log(rightElem);
		
		rightElem.addEventListener('click', event => {
			if(event.click === click) {
				this.game.moveRight();
				this.view.showArea(this.game.viewArea);
			}
		})	
	}

	downElem(click) {
		const downElem = document.querySelector('.downElem');
		console.log(downElem);
		
		downElem.addEventListener('click', event => {
			if(event.click === click) {
				this.game.moveDown();
				this.view.showArea(this.game.viewArea);
			}
		})	
	}
	
	
	start() {
		this.view.showArea(this.game.viewArea);
		const showScore = this.view.createBlockScore();
		const showNextTetramino = this.view.createBlockNextTetramino();
		this.game.createUpdatePanels(showScore, showNextTetramino, this.view.createArrowBlock());
		
		const tick = () => {
			const time = (1100 - 100 * this.game.level)
			if(this.game.gameOver) return;
			setTimeout(() => {				
				this.game.moveDown();
				this.view.showArea(this.game.viewArea);
				tick()
			}, time > 100 ? time : 100)
		};

		tick();



		window.addEventListener('keydown', event => {
			const key = event.code;
			
			switch (key) {
				case 'ArrowLeft':
					this.game.moveLeft();
					this.view.showArea(this.game.viewArea);
					break;
				case 'ArrowRight':
					this.game.moveRight();
					this.view.showArea(this.game.viewArea);
					break;
				case 'ArrowDown':
					this.game.moveDown();
					this.view.showArea(this.game.viewArea);
					break;
				case 'ArrowUp':
					this.game.rotateTetramino();
					this.view.showArea(this.game.viewArea);
					break;
			}
		});

		/*window.addEventListener('click', event => {
			const key = event.path;
			console.log(key);
			
			
			switch (key) {
				case 'leftElem':
					this.leftElem();
					this.game.moveLeft();
					this.view.showArea(this.game.viewArea)

					break;
				case 'ArrowRight':
					this.rightElem();
					this.game.moveRight();
					this.view.showArea(this.game.viewArea)
					break;
				case 'ArrowDown':
					this.downElem();
					this.game.moveDown();
					this.view.showArea(this.game.viewArea)
					break;
				case 'ArrowUp':
					this.upElem();
					this.game.rotateTetramino();
					this.view.showArea(this.game.viewArea)
					break;
			}
		});*/

	}



}