namespace Flappy.State {

    export class Play extends Phaser.State {

        private bird: Bird;
        private sky: Sky;
        private floor: Floor;
        private pipeTest: PipeSet;
        private pipePool: PipePool;

        private hitSound: Phaser.Sound;

        public preload(): void {
            this.game.load.spritesheet('bird', 'assets/bird.png', 34, 24);
            this.game.load.image('sky', 'assets/sky.png');
            this.game.load.image('floor', 'assets/land.png');
            this.game.load.image('pipeBody', 'assets/pipe.png');
            this.game.load.image('pipeDownCap', 'assets/pipe-down.png');
            this.game.load.image('pipeUpCap', 'assets/pipe-up.png');
            this.game.load.audio('wing', 'assets/sounds/sfx_wing.ogg');
            this.game.load.audio('hit', 'assets/sounds/sfx_hit.ogg');
            this.game.stage.disableVisibilityChange = true;
        }

        public create(): void {
            this.hitSound = this.game.add.audio('hit');

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 100;

            this.sky = new Sky(this.game, 109, 'sky');
            this.pipePool = new PipePool(this.game);
            this.pipePool.create(100, 100);
            // this.pipeTest = new PipeSet(this.game, 700, 700, Constants.gapSize, 'pipeBody', 'pipeDownCap', 'pipeUpCap');
            this.floor = new Floor(this.game, 112, 'floor');
            this.bird = new Bird(this.game, 100, 100, 'bird');
            // this.game.camera.follow(this.bird);
        }

        public update(): void {
            this.game.physics.arcade.collide(this.bird, this.floor, () => {
                this.hitSound.play();
            });

            /*this.game.physics.arcade.collide(this.bird, this.floor, () => {
                this.hitSound.play();
            });*/
        }
    }
}
