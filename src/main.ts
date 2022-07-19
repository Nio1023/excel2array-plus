import { setupCounter } from "./counter"
import excelToArray from "../lib/excel-to-array.es.js"

console.log(
  excelToArray(`Wenwen	用车，交通 （2 辆大巴 ）从公司出发。 清点人数			
刘浩	直接去农家乐，			
"wenwen
+3"	"午饭后，大巴车-》 活动点。 
1. 室内: (4个项目，竹竿、击鼓，大布). 确认分队服56人。拍大合照。plan B: 冰壶"			
"wenwen-烧烤
刘浩+Megan"	"运动-》 酒店 check in (换洗衣服）-> 烧烤 ( 颁奖-毛巾。 9新人介绍. 穿插小游戏）
- 热菜，提前送过来 （结束后，统一回酒店）。9:30 之后，自由活动时间"			`)
)

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)
