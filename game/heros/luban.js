//导入技能
import S1 from "../skill/luban/s1.js";
import S2 from "../skill/luban/s2.js";
import S3 from "../skill/luban/s3.js";
//导入皮肤
import Skin1 from "../skins/luban/skin1.js";
import Skin2 from "../skins/luban/skin2.js";
import Skin3 from "../skins/luban/skin3.js";

export default class Luban{
    constructor(){
        this.name = '鲁班一号',
        this.skills = [new S1(),new S2(),new S3()],
        this.skins= [new Skin1(),new Skin2(),new Skin3()],
        this.icon = './sources/heroes/luban1.png'
    }
}