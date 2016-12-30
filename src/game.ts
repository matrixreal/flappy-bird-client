namespace Flappy {
    export class Game extends Phaser.Game {
        constructor(elementName: string) {
            let element = document.getElementById(elementName);

            super(Flappy.Constants.gameWidth, Flappy.Constants.gameHeight, Phaser.AUTO, element.id, Flappy.State.Blank, false, false);

            this.state.add('play', Flappy.State.Play);
            window.addEventListener('resize', (myFunction) => {
                this.scale.setGameSize(Flappy.Constants.gameWidth, Flappy.Constants.gameHeight);
            });
        }

        public connect(name: string, callback: () => {}): void {
            let socket = io.connect(Constants.serverUrl);
            socket.on('connect', () => {
                this.state.start('play');
                callback();
            });
        }
    }
}
