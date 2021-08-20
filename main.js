const str = `
010-1234-4567
j@naver.com
asdfadsfgasd
sdafsdfasdfasdfadsfadsfsdf
`

// // const regexp = new RegExp('the','gi')
// const regexp = /d/gi
// // console.log(regexp.test(str))
// str=str.replace(regexp, 'nav')
// console.log(str)

const regexp =/nav/
consol.log(str.match(regexp))