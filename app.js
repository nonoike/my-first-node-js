'use strict'; // node.jsではモジュールがあるため、無名関数は不要
/*
process.argvの添字:
  0: node のファイルのパス
  1: 実行中プログラムのファイルのパス
  2: 最初の引数
*/
const number = process.argv[2] || 0; // ||の左式(process.argv[2])がfalseなら右式(0)を返す
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
