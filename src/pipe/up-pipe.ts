namespace Flappy {
    export class UpPipe extends Phaser.Group {
        private pipeBody: Phaser.TileSprite;

        constructor(game: Phaser.Game, x: number, y: number, pipeBodyKey: string, pipeCapKey: string) {
            super(game);
            this.pipeBody = new Phaser.TileSprite(game, x, y, 52, window.innerHeight, pipeBodyKey);
            let pipeCap = new Phaser.Sprite(game, x, y, pipeCapKey);
            pipeCap.anchor.y = 1;

            this.add(this.pipeBody);
            this.add(pipeCap);
            this.game.add.existing(this);
        }

        public update(): void {
            this.pipeBody.height = (window.innerHeight / 3 * 2) - this.pipeBody.y;
        }
    }
}
