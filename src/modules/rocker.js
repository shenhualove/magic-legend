/**
 * Created by apple on 2018/9/5.
 *
 * 摇杆类 控制人物移动
 */
class Rocker {
    constructor(){
        this.dir = 'Down';
    }

    init(){
        this.gamePad = game.add.sprite(140, 440, "touch",0);
        this.gamePad.anchor.set(0.5);
        this.gamePad.scale.x = 2;
        this.gamePad.scale.y = 2;
        this.btn = this.gamePad.addChild(game.make.sprite(0, 0, "touch",1));
        this.btn.anchor.set(0.5);
        this.btn.scale.x = 1;
        this.btn.scale.y = 1;
        this.btn.inputEnabled = true;
        this.btn.input.enableDrag();
        this.btn.events.onDragUpdate.add(this.dragUpdate,this);
        this.btn.events.onDragStop.add(this.dragStop,this);
        //固定跟随界面
        this.gamePad.fixedToCamera = true;
    }

    getCoordinates(dir,speed=12){
        return Number(this.btn[dir]/speed);
    }

    dragUpdate(btn,p,xx,yy){
        let d = Math.sqrt(xx * xx + yy * yy);
        if(d>30){d=30;}
        let r = Math.atan2(yy, xx);
        btn.x = Math.cos(r)*d;
        btn.y = Math.sin(r)*d;
        this.setDirection(r);
    }

    dragStop(btn){
        btn.x = 0;
        btn.y = 0;
        this.dir = this.dir.replace('Run','');
    }

    setDirection(n){
        let angle = n*180/3.14159;
        if(angle >= 67.5 && angle < 112.5){
            //下方
            this.dir = 'Down';
        }
        if(angle >= 112.5 && angle < 157.5){
            //左下方
            this.dir = 'LeftDown';
        }
        if(angle >= 22.5 && angle < 67.5){
            //右下方
            this.dir = 'RightDown';
        }
        if(angle >= 157.5 || angle < -157.5){
            //左方
            this.dir = 'Left';
        }
        if(angle >= -157.5 && angle < -112.5){
            //左上方
            this.dir = 'LeftUp';
        }
        if(angle >= -112.5 && angle < -67.5){
            //上方
            this.dir = 'Up';
        }
        if(angle >= -22.5 && angle <= 22.5){
            //右方
            this.dir = 'Right';
        }
        if(angle < -22.5 && angle >= -67.5){
            //右上方
            this.dir = 'RightUp';
        }

        this.dir = this.dir+'Run';
    }
}

export default Rocker;