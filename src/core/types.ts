import { SquareGroup } from "./SquareGroup";
import { Game } from "./Game";

/**
 * 相对点坐标
 */
export interface Point {
   readonly x: number
   readonly y: number
}
/**
 * 显示者
 */
export interface IViewer {
   /**
    * 显示
    */
   show(): void;
   /**
    * 移除,不再显示
    */
   remove(): void;
}
/**
 * 形状
 */
export type Shape = Point[]

export enum MoveDirection {
   left,
   right,
   down

}

export enum GameStatus {
   init, //未开始
   playing, //进行中
   pause, //游戏已暂停
   over //游戏结束
}

export interface GameViewer {
   /**
    * 
    * @param teris 下一个方块对象
    */
   showNext(teris: SquareGroup): void
   /**
    * 
    * @param teris 切换的方块对象
    */
   switch(teris: SquareGroup): void

   /**
    * 完成界面的初始化
    */
   init(game: Game): void
   /**
    * 显示分数
    * @param score 
    */
   showScore(score: number): void

   onGamePause(): void

   onGameStart(): void

   onGameOver(): void
}