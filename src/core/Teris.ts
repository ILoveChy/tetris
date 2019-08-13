import { Shape, Point } from "./types";
import { getRandom, colorRandom } from "../util";
import { SquareGroup } from "./SquareGroup";

export const TShap: Shape = [
    { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }
]
export const LShap:Shape=[
    { x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }
]
export const LMirrorShap:Shape=[
    { x: 0, y: -1 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }
]
export const SShap:Shape=[
    { x: 0, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }, { x: 1, y: 0 }
]
export const SMirrorShap:Shape=[
    { x: 0, y: 0 },  { x: 0, y: 1 }, { x: 1, y: 1 },{ x: -1, y: 0 }
]
export const SquareShap:Shape=[
    { x: 0, y: 0 },  { x: 0, y: 1 }, { x: 1, y: 0 },{ x: 1, y: 1 }
]
export const LineShap:Shape=[
    { x: -1, y: 0 },  { x: 0, y: 0 }, { x: 1, y: 0 },{ x: 2, y: 0 }
]
export const shapes=[
    TShap,
    LShap,
    LMirrorShap,
    SShap,
    SMirrorShap,
    SquareShap,
    LineShap
]

/**
 * 随机产生一个俄罗斯方块(颜色随机、形状随机)
 * @param centerPoint 
 */
export const createTeris=(centerPoint:Point)=>{
    let index=getRandom(0,shapes.length);
    const shape=shapes[index];
    const color=colorRandom();
    return new SquareGroup(shape,centerPoint,color);
}