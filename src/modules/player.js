/**
 * Created by apple on 2018/9/5.
 *
 * 角色类
 */
class Player {
    constructor(){
        this.role = null;
        this.options = {
            w:74,
            h:120,
            pic:'roleNoviceMan'
        }
    }

    init(options){
        if(options){
            this.options = Object.assign({},this.options,options);
        }
        this.role = game.add.sprite(this.options.w,this.options.h,this.options.pic);
        this.creatAnimation('Down',1,4,4);
        this.creatAnimation('LeftDown',5,8,4);
        this.creatAnimation('Left',9,12,4);
        this.creatAnimation('LeftUp',13,16,4);
        this.creatAnimation('Up',17,20,4);
        this.creatAnimation('RightUp',21,24,4);
        this.creatAnimation('Right',25,28,4);
        this.creatAnimation('RightDown',29,32,4);

        this.creatAnimation('DownRun',33,40,8);
        this.creatAnimation('LeftDownRun',41,48,8);
        this.creatAnimation('LeftRun',49,56,8);
        this.creatAnimation('LeftUpRun',57,64,8);
        this.creatAnimation('UpRun',65,72,8);
        this.creatAnimation('RightUpRun',73,80,8);
        this.creatAnimation('RightRun',81,88,8);
        this.creatAnimation('RightDownRun',89,96,8);

    }

    //播放人物动画
    play(name){
        this.role.play(name);
    }

    //设置人物坐标
    setLocation(fn){
        this.role.x += fn.getCoordinates('x');
        this.role.y += fn.getCoordinates('y');
        this.role.play(this.options.pic+fn.dir);
    }

    //生成动画数组
    creatAnimation(name,arrStar,arrLast,n,bool = true){
        let arr = [];
        for(let i = arrStar-1;i < arrLast;i++){
            arr.push(i);
        }
        this.role.animations.add(this.options.pic+name,arr,n,bool);
    }
}

export default Player;