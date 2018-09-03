/**
 * Created by apple on 2018/8/22.
 *
 * 游戏开始界面
 */
class Start {
    create(game){
        game.world.setBounds(0, 0, 8100*1.5, 4200*1.5);
        let bg = game.add.sprite(0, 0, 'gameBg');
        bg.scale.x = 1.5;
        bg.scale.y = 1.5 ;
        console.log(bg)
        this.cursors = game.input.keyboard.createCursorKeys();
    }

    update(){
        if (this.cursors.up.isDown)
        {
            game.camera.y -= 40;
        }
        else if (this.cursors.down.isDown)
        {
            game.camera.y += 40;
        }

        if (this.cursors.left.isDown)
        {
            game.camera.x -= 40;
        }
        else if (this.cursors.right.isDown)
        {
            game.camera.x += 40;
        }
    }

}

export default  Start;