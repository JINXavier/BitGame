window.addEventListener('load', () => {
    const config = {
        type: Phaser.AUTO,
        width: 600,
        height: 375,
        backgroundColor: 000563,
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
                gravity: { y: 0},
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: "phaserGame"
        },
        pixelArt: true,
        scene: [Scene1, Scene2, Scene3, GameScene, GameScene2, GameScene3]
    }
    new Phaser.Game(config)
})
