[![NPM version]][npm-url]
[![Downloads]][downloads-url]

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

[npm-url]: https://www.npmjs.com/package/excel2array-plus
[downloads-url]: https://www.npmjs.com/package/excel2array-plus
