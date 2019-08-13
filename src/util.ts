/**
 * 根据最小值和最大值得到该范围内的随机数(无法取到最大值)
 * @param min 
 * @param max 
 */
export function getRandom(min:number,max:number){
    const dec=max-min;
    return Math.floor(Math.random()*dec+min);
}
/**
 * 随机颜色
 */
export function colorRandom(){
    return "#"+(function(color){
        return new Array(7-color.length).join("0")+color;
    })((Math.random() * 0x1000000 | 0).toString(16));
}