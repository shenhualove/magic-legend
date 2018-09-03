/**
 * Created by apple on 2018/9/3.
 */
import 'pixi';
import 'p2';
import Phaser   from 'phaser';
import Start    from './screens/start';


class GameMain {
    //加载游戏资源
    preload(game){
        //选择不同角色开始游戏
        game.load.image('gameBg',require('./assets/sprites/map/2.jpg'));

        //加载资源进度条
        let progressText = game.add.text(game.world.centerX, game.world.centerY, '0%', {
            fontSize: '60px',
            fill: '#ffffff'
        });
        progressText.anchor.setTo(0.5, 0.5); //设置锚点，用于居中
        game.load.onFileComplete.add(function(progress) {
            progressText.text = progress + '%';
        });
    }

    //创建场景
    create(game){
        //开启物理系统 选择碰撞检测模式ARCADE
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //游戏适配模式
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        //进入开始界面
        game.state.start('start');
    }

    //初始化
    init(width,height){
        return new Phaser.Game(width, height, Phaser.CANVAS, '', { preload: this.preload, create:this.create});
    }
}

window.onload = ()=>{
    window.userData = {};
    //创建游戏
    window.game = new GameMain().init(760,960);

    //添加游戏场景
    game.state.add('start', new Start());
}