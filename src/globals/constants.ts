namespace Flappy.Global {
    export class Constants {
        public static gameSpeed: number = 0.2;
        public static jumpSpeed: number = 400;
        public static gapSize: number = 185; // 155 normally
        public static gravity: number = 2000;
        public static pipeSpacing: number = 200;
        public static terminalVelocity: number = 700;

        public static get serverUrl(): string {
            if (window.location.href === 'http://127.0.0.1:8080/' || window.location.href === 'http://localhost:8080/') {
                return 'http://localhost:9001';
            } else {
                return 'https://flappy-bird-server.herokuapp.com';
            }
        }

        public static gameHeight: number = 665;

        public static get gameWidth(): number {
            let ratio = this.gameHeight / window.innerHeight;
            return window.innerWidth * ratio;
        }

        public static worldOffset: number = -1000;
    }
}
