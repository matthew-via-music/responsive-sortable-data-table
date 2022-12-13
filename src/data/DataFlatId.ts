import {GroupStatsDataA, GroupStatsDataB, GroupStatsDataC, GroupStatsDataD, GroupStatsDataE, GroupStatsDataF, GroupStatsDataG, GroupStatsDataH} from "./Data"

Object.entries([GroupStatsDataA, GroupStatsDataB, GroupStatsDataC, GroupStatsDataD, GroupStatsDataE, GroupStatsDataF, GroupStatsDataG, GroupStatsDataH]).flat().flat().shift()

let data = [GroupStatsDataA, GroupStatsDataB, GroupStatsDataC, GroupStatsDataD, GroupStatsDataE, GroupStatsDataF, GroupStatsDataG, GroupStatsDataH].flat()
  
data.forEach((x:any) => delete x.id)
data.forEach((obj, i) => obj.id = i + 1)

function arraymove(arr:any, fromIndex:any, toIndex:any) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

// console.clear()

let GSDA = Object.entries(data[0])
arraymove(GSDA, 11, 0)
let GSDA1 = Object.fromEntries(GSDA)

let GSDA2 = Object.entries(data[1])
arraymove(GSDA2, 11, 0)
let GSDAI2 = Object.fromEntries(GSDA2)

let GSDA3 = Object.entries(data[2])
arraymove(GSDA3, 11, 0)
let GSDAI3 = Object.fromEntries(GSDA3)

let GSDA4 = Object.entries(data[3])
arraymove(GSDA4, 11, 0)
let GSDAI4 = Object.fromEntries(GSDA4)

let GSDA5 = Object.entries(data[4])
arraymove(GSDA5, 11, 0)
let GSDAI5 = Object.fromEntries(GSDA5)

let GSDA6 = Object.entries(data[5])
arraymove(GSDA6, 11, 0)
let GSDAI6 = Object.fromEntries(GSDA6)

let GSDA7 = Object.entries(data[6])
arraymove(GSDA7, 11, 0)
let GSDAI7 = Object.fromEntries(GSDA7)

let GSDA8 = Object.entries(data[7])
arraymove(GSDA8, 11, 0)
let GSDAI8 = Object.fromEntries(GSDA8)

let GSDA9 = Object.entries(data[8])
arraymove(GSDA9, 11, 0)
let GSDAI9 = Object.fromEntries(GSDA9)

let GSDA10 = Object.entries(data[9])
arraymove(GSDA10, 11, 0)
let GSDAI10 = Object.fromEntries(GSDA10)

let GSDA11 = Object.entries(data[10])
arraymove(GSDA11, 11, 0)
let GSDAI11 = Object.fromEntries(GSDA11)

let GSDA12 = Object.entries(data[11])
arraymove(GSDA12, 11, 0)
let GSDAI12 = Object.fromEntries(GSDA12)

let GSDA13 = Object.entries(data[12])
arraymove(GSDA13, 11, 0)
let GSDAI13 = Object.fromEntries(GSDA13)

let GSDA14 = Object.entries(data[13])
arraymove(GSDA14, 11, 0)
let GSDAI14 = Object.fromEntries(GSDA14)

let GSDA15 = Object.entries(data[14])
arraymove(GSDA15, 11, 0)
let GSDAI15 = Object.fromEntries(GSDA15)

let GSDA16 = Object.entries(data[15])
arraymove(GSDA16, 11, 0)
let GSDAI16 = Object.fromEntries(GSDA16)

let GSDA17 = Object.entries(data[16])
arraymove(GSDA17, 11, 0)
let GSDAI17 = Object.fromEntries(GSDA17)

let GSDA18 = Object.entries(data[17])
arraymove(GSDA18, 11, 0)
let GSDAI18 = Object.fromEntries(GSDA18)

let GSDA19 = Object.entries(data[18])
arraymove(GSDA19, 11, 0)
let GSDAI19 = Object.fromEntries(GSDA19)

let GSDA20 = Object.entries(data[19])
arraymove(GSDA20, 11, 0)
let GSDAI20 = Object.fromEntries(GSDA20)

let GSDA21 = Object.entries(data[20])
arraymove(GSDA21, 11, 0)
let GSDAI21 = Object.fromEntries(GSDA21)

let GSDA22 = Object.entries(data[21])
arraymove(GSDA22, 11, 0)
let GSDAI22 = Object.fromEntries(GSDA22)

let GSDA23 = Object.entries(data[22])
arraymove(GSDA23, 11, 0)
let GSDAI23 = Object.fromEntries(GSDA23)

let GSDA24 = Object.entries(data[23])
arraymove(GSDA24, 11, 0)
let GSDAI24 = Object.fromEntries(GSDA24)

let GSDA25 = Object.entries(data[24])
arraymove(GSDA25, 11, 0)
let GSDAI25 = Object.fromEntries(GSDA25)

let GSDA26 = Object.entries(data[25])
arraymove(GSDA26, 11, 0)
let GSDAI26 = Object.fromEntries(GSDA26)

let GSDA27 = Object.entries(data[26])
arraymove(GSDA27, 11, 0)
let GSDAI27 = Object.fromEntries(GSDA27)

let GSDA28 = Object.entries(data[27])
arraymove(GSDA28, 11, 0)
let GSDAI28 = Object.fromEntries(GSDA28)

let GSDA29 = Object.entries(data[28])
arraymove(GSDA29, 11, 0)
let GSDAI29 = Object.fromEntries(GSDA29)

let GSDA30 = Object.entries(data[29])
arraymove(GSDA30, 11, 0)
let GSDAI30 = Object.fromEntries(GSDA30)

let GSDA31 = Object.entries(data[30])
arraymove(GSDA31, 11, 0)
let GSDAI31 = Object.fromEntries(GSDA31)

let GSDA32 = Object.entries(data[31])
arraymove(GSDA32, 11, 0)
let GSDAI32 = Object.fromEntries(GSDA32)

let result = [GSDA1, GSDAI2, GSDAI3, GSDAI4, GSDAI5, GSDAI6, GSDAI7, GSDAI8, GSDAI9, GSDAI10, GSDAI11, GSDAI12, GSDAI13, GSDAI14, GSDAI15, GSDAI16, GSDAI17, GSDAI18, GSDAI19, GSDAI20, GSDAI21, GSDAI22, GSDAI23, GSDAI24, GSDAI25, GSDAI26, GSDAI27, GSDAI28, GSDAI29, GSDAI30, GSDAI31, GSDAI32]

export default function dataFlatId(){
  return result
}

