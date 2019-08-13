import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";
import { createTeris } from "./core/Teris";
import { TerisRule } from "./core/TerisRule";
import { MoveDirection } from "./core/types";
const teris = createTeris({ x: 3, y: 0 });
teris.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $("#root"))
})
$("#btnDown").click(() => {
    //更改中心点坐标
    TerisRule.move(teris, MoveDirection.down);
    // 移动到底
    // TerisRule.moveDirctly(teris, MoveDirection.down);
})
$("#btnRight").click(() => {
    //更改中心点坐标
    TerisRule.move(teris, MoveDirection.right);

})
$("#btnLeft").click(() => {
    //更改中心点坐标
    TerisRule.move(teris, MoveDirection.left);

})