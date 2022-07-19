const regUniversalNewLine = /^(\r\n|\n\r|\r|\n)/
const regNextCellNoQuotes = /^[^\t\r\n]+/
const regNextEmptyCell = /^\t/

export default function excel2array(str: string): string[][] {
  const arr = [[""]]
  if (str.length === 0) {
    return arr
  }
  let column = 0
  let row = 0
  let lastLength
  while (str.length > 0) {
    if (lastLength === str.length) {
      break
    }
    lastLength = str.length
    if (str.match(regNextEmptyCell)) {
      str = str.replace(regNextEmptyCell, "")
      column += 1
      arr[row][column] = ""
    } else if (str.match(regUniversalNewLine)) {
      str = str.replace(regUniversalNewLine, "")
      column = 0
      row += 1
      arr[row] = [""]
    } else {
      let nextCell = ""
      if (str.startsWith('"')) {
        let quoteNo = 0
        let isStillCell = true
        while (isStillCell) {
          const nextChar = str.slice(0, 1)
          if (nextChar === '"') {
            quoteNo += 1
          }
          nextCell += nextChar
          str = str.slice(1)
          if (
            str.length === 0 ||
            (str.match(/^[\t\r\n]/) && quoteNo % 2 === 0)
          ) {
            isStillCell = false
          }
        }
        nextCell = nextCell
          .replace(/^"/, "")
          .replace(/"$/, "")
          .replace(/["]*/g, match =>
            new Array(Math.floor(match.length / 2)).fill('"').join("")
          )
      } else {
        const matchedText = str.match(regNextCellNoQuotes)
        nextCell = matchedText ? matchedText[0] : ""
        str = str.slice(nextCell.length)
      }
      arr[row][column] = nextCell
    }
  }
  return arr
}
