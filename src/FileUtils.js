
const thinking = require("./resources/misc/thinking.png")
const advs = require("./resources/advs.json");

function getImage(imgId, lang){
    console.log(advs[0].FullName);
    console.log(advs[0].Element);
}

function getAdvs(element, weapon){
    const matches = [];
    for(var i=0; i<advs.length; i++){
        const adv = advs[i];
        if(adv.Element === element && adv.Weapon === weapon){
            const varId = (adv.VariationId < 10) ? ("0" + adv.VariationId) : (adv.VariationId);
            const img = "https://dragalialost.wiki/thumb.php?f=" + adv.Id + "_" + varId + "_r05.png&width=120";
            matches.push(img);
        }
    }
    return matches;
}

function getAdvImg(element, weapon, index){
    const matches = getAdvs(element, weapon);
    if(matches.length === 0){
        return thinking;
    } else {
        return matches[index];
    }
}

export {getImage, getAdvImg, getAdvs};