import Game from './game/game.js';
let game = new Game();

//获取登录信息
document.querySelector('.sub').onclick = function(){
    let userName = document.querySelector('.username').value;
    game.login(userName);
    console.log(game);
    renderHeros(game.player.heros);//渲染英雄
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.game').style.display = 'block';

    document.querySelector('.chioseusername').innerHTML = userName;
}
//渲染英雄
function renderHeros (heros){
    document.querySelector('.heroView').innerHTML = '';
    heros.forEach(hero=>{
        let herodiv = document.createElement('div');
        herodiv.classList.add("heroItem");
        herodiv.innerHTML = `<img src="${hero.icon}" />
                         <span>${hero.name}</span>`;
        document.querySelector('.skillsView').innerHTML = '';
        document.querySelector('.skinView').innerHTML = '';
        herodiv.onclick = function(){
            document.querySelector('.heroShow').innerHTML = `<img src='${hero.icon}'/>`
            renderSkills(hero.skills);
            renderSkins(hero.skins);
        }
        document.querySelector('.heroView').appendChild(herodiv);
    })
}
//渲染技能
function renderSkills(skills){
    document.querySelector('.skillsView').innerHTML = '';
    skills.forEach(skill=>{
        let skillImg = document.createElement('img');
        skillImg.src = skill.icon;
        document.querySelector('.skillsView').appendChild(skillImg);
    })
}

//渲染皮肤
function renderSkins(skins){
    document.querySelector('.skinView').innerHTML = '';
    skins.forEach(skin=>{
        let skinItem = document.createElement('div');
        skinItem.classList.add('skinItem');
        skinItem.innerHTML = `<img src="${skin.icon}" />
        <span>${skin.name}</span>`;
        skinItem.onclick = function(){
            document.querySelector('.skinShow').innerHTML = `<img src = '${skin.img}'>`
        }
        document.querySelector('.skinView').appendChild(skinItem);
    })
}

//切换
document.querySelector('.heroBtn').onclick = function(){
    document.querySelector('.heroContainer').style.display = 'block';
    document.querySelector('.skinContainer').style.display = 'none';
}

document.querySelector('.skinBtn').onclick = function(){
    
    document.querySelector('.heroContainer').style.display = 'none';
    document.querySelector('.skinContainer').style.display = 'block';
}
