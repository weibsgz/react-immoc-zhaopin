export function getRedirectPath({type,avatar}){
//根据用户信息 返回跳转地址
    //根据type来确定 
    // user.type   /boss  /genuis
    // user.avatar /bossinfo /genuisinfo
    console.log(`getRedirectPath接受到的type：${type},avatar:${avatar}`)
    let url = (type === 'boss') ? '/boss' : '/genius'
    //通过头像来判断用户信息是否完整
    if(!avatar){
        url += 'info'
    }
    return url
}

export function getChatId(userId,targetId){
    return [userId,targetId].sort().join('_')
}
