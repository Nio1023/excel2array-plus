[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

# excel2array-plus

The script allows you to convert the data copied from the table to an array

## Install

```sh
npm i excel2array-plus
```

## Usage

| name  | age | gendar |
| ----- | --- | ------ |
| Alice | 18  | female |
| Ben   | 12  | male   |
| simon | 21  | male   |

```ts
import excel2array from "excel2array-plus"

// copy the data from your excel worksheet directly
let text = `Alice	18	female
Ben	12	male
simon	21	male`

console.log(excel2array(text))
```

[npm-image]: https://img.shields.io/npm/v/excel2array-plus.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/excel2array-plus
[downloads-image]: https://img.shields.io/npm/dm/excel2array-plus.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/excel2array-plus
