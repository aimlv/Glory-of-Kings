
//导入技能
import S1 from '../skill/yase/s1.js';
import S2 from '../skill/yase/s2.js';
import S3 from '../skill/yase/s3.js';
//导入皮肤
import Skin1 from '../skins/yase/skin1.js';
import Skin2 from '../skins/yase/skin2.js';
import Skin3 from '../skins/yase/skin3.js';

export default class Yase{
    constructor(){
        this.name = '亚瑟1';
        this.skills = [new S1(),new S2(), new S3()];
        this.skins = [new Skin1(),new Skin2(),new Skin3()];
        this.icon = "./sources/heroes/yase1.png"
    }
}
