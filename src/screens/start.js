/**
 * Created by apple on 2018/8/22.
 *
 * 游戏开始界面
 */
import Rocker from '../modules/rocker';
import Player from '../modules/player';

class Start {
    create(game){

        game.world.setBounds(0, 0, 8100*0.68, 4200*0.68);
        let bg = game.add.sprite(0, 0, 'gameBg');
        bg.scale.x = 0.68;
        bg.scale.y = 0.68 ;
        this.cursors = game.input.keyboard.createCursorKeys();

        //创建角色
        this.player = new Player();
        this.player.init();

        //创建摇杆
        this.rocker = new Rocker();
        this.rocker.init();

        //视角固定跟随角色
        game.camera.follow(this.player.role);
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

        this.player.setLocation(this.rocker);
    }

}

export default  Start;