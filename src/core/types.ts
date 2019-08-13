/**
 * 相对点坐标
 */
export interface Point{
   readonly x:number
   readonly y:number
}
/**
 * 显示者
 */
export interface IViewer{
   /**
    * 显示
    */
   show():void;
   /**
    * 移除,不再显示
    */
   remove():void;
}
/**
 * 形状
 */
export type Shape=Point[]

export enum MoveDirection {
   left,
   right,
   down

}
