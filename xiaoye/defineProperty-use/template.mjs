export function  userInfoTpl(info) {
    return `
    <h1>姓名：<span class="__username">${info.username || '未录入'}</span></h1>
  `
}