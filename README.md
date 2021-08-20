# 정규표현식(RegExp)

정규식, Regular

## 역활

-문자검색(search)
-문자 대체(replace)
-문자 추출(extract)

## 테스트 사이트 
https://regexr.com/

## 정규식 생성

```js
// 생성자 
new RegExp('표현','옵션')
new RegExp('[a-z]','gi')

// 리터럴 

/표현/옵션
/[a-z]/gi
```

## 메소드

메소드 |  문법 | 설명 
 --|--|--|
 test | `정규식 .test(문자데이터)`| 일치여부(boolean) 반환
 match | `문자열.match(정규식)`| 일치하는 문자열 배열   반환
 replace | `문자열.replace(정규식, 대체문자)` |  일치하는 문자를 대체 

 ## 플래그 (옵션)

 플래그 | 설명
 --|--
 g | 모든 문자 일치
 i |영어 대소문자를 구분 않고 일치 
 m | 여러 줄 일치 

 ## 패턴(표현)

 패턴 | 설명 
 --|--
 ^ab | 줄(Line) 시작에 있는 ab와 일치
 ab$ | 줄 (Line) 끝에 있는 ab와 일치 
 
  . | 임의의 한 문자와 일치
  a|b | a또는 b와 일치
  ab? | b가 없거나 b와 일치 
  [a,b,c,] | a또는 b또는 c
  [a-z] | a 부터 z사이의 문자 구간에 일치
  [A-Z]  | a부터 Z  사이의 문자 구간에 일치
  [0-9] | 0부터 9사이ㅡ ㅣ문자 구간에 일치
  [가-힣] | 가부터 힣 사이의 문자 구간에 일치
  \w | 63 개 문자 
  \b | 63개 문자에 일치하지않는 문자 경계
  \d | 숫자 에 일치 
  \s | 공백문자 일치 