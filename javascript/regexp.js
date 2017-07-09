// var sStr='讨论一下正则表达式中的replace的用法';
// let result = sStr.replace(/replace/, '{$&}');//讨论一下{正则表达式}中的replace的用法
// console.log(result)

// let result1 = 'abcca'.replace(/b/,"$`");//aac
// let result2 = 'abcca'.replace(/b/,"$'");//acc
// console.log(result1, result2)

// let $$ = 'nimojs@126.com'.replace(/(.+)(@)(.*)/,"$2$1")//@nimojs
// console.log($$);

// function logArguments(){    
//     console.log(arguments);//["nimojs@126.com", "nimojs", "@", "126.com", 0, "nimojs@126.com"] 
//     return '返回值会替换掉匹配到的目标'
// }
// console.log(
//     'nimojs@126.com'.replace(/(.+)(@)(.*)/,logArguments)
// )

// let arr = 'JAVASCRIPT'.replace(/[A-G]/g,function(){
//     console.log(arguments[0])
//     return arguments[0].toLowerCase();
// })//JaVaScRIPT
// console.log(arr)

// let rsult = '<span style="font-family:\'微软雅黑\';">demo</span>'.replace(/\'([^']*)\'/g,function($1,$2,$3,$4){      
//   debugger;
//     var sResult=arguments[0];
//     console.log(arguments, 'arguments');//'微软雅黑'
//     sResult=sResult.replace(/\'/g,'');
//     console.log(sResult);//微软雅黑
//     return sResult;
// })//<span style="font-family:微软雅黑;">demo</span>
// console.log(rsult, 'rsult')

// var regex = /helloaqq/;
// console.log(regex.test('hello'))
    
// 日期的匹配    
// const reg = /^[0-9]{4}-(0[0-9]|1[12])-(0[0-9]|1[0-9]|2[0-9]|3[01])$/;  
// const result = reg.test('1991-12-24');
// console.log(result)

// const str = '<div id="container" class="main"></div>';
// let regex = /id=".*?"/;

// console.log(str.match(regex))


// let result = '中国人民'.replace(/(中国)/g, function ($1) {
//     console.log($1)
//     return $1; 
// })
// console.log(result)
//"(中国)人民"

// let result = 'cdab'.replace(/(ab)/g, function ($1) {
//      console.log($1);
//      return $1;
// })
// console.log(result)
//"cdcd"

// 'abcd'.replace(/(ab)/g,"$'")
//"cdcd"

// let result = 'abcdabcd'.replace(/(ab)/g, "[$&]");
// console.log(result);

// "[ab]cd[ab]cd"

// '$1$2wa,test'.replace(/[a-zA-z]/g,'$$');
// "$1$2$$,$$$$"

// 总结： 
// $1、$2、…、$99：与正则表达式中的第1～99个子表达式相匹配的文本。其实也可以在1-9之间，加上0前缀。
// 该符号针对的是分组，所以，没有分组的话，会被当做$n字符来做替换。

// $&:（美元符号+连字符）：与正则表达式相匹配的子字符串。

// $`:（美元符号+切换技能键）：位于匹配子字符串左侧的文本。

// $':（美元符号+单引号）：位于匹配子字符串右侧的文本。

// $$：表示$符号。

// let result = 'abcdabcd'.replace(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)/g,"$10")
// console.log(result)

// let result = 'abcdefghijkkkk'.replace(/(a)/g, "$10");
// console.log(result);
// "a0bcdefghijkkkk

// let result = 'abcdabcdj'.replace(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)/g,"$10j")
// abcdabcd abcdabcdj
// console.log(result, 'result');
//"jkkkk"



// 此处注意有坑！！！！！！   用？前面会出现很过空格的匹配
// let result = '123dfdf'.replace(/\D+/g, function (m1, m2, m3) {
//     // debugger;
//   return '#'
// })
// console.log(result, 'result')

// ################################################################################/
// 如果 match 没有加g 和exec 是一样的
// var str= "cfat2,hat8cat10" ;
// var p = /c(at)\d/g;
// var aa = p.exec(str) // null
// // console.log(aa)
// let matchResult = str.match(/c(at)\d/);
// // console.log(matchResult)


// var pattern = /Box/g;
// var str = 'BoxssddsfBsboxdsf323sBox';
// var match=pattern.exec(str),results=[];
// while(match != null){
//     console.log(pattern.lastIndex);    
//     results.push(match);
//     match = pattern.exec(str);
// }

// console.log(results)

// ##截取例子 http://192.168.1.107:3003/streamComput/index.html
// let pathname = 'http://192.168.1.107:3003/streamComput/index.html';
// let query = '';
// pathname.replace(/\/(?:[a-zA-Z]+)/g, function (m1, $1, m2, m3) {
//   debugger;
//   query = $1;
//   return $1;
// })

let pattern = 'appleaaqweq'.replace(/apple(?:a2a|a2q)/, function (m1, $1, m2, m3) {
    debugger;
})

// str = 'abc';
// /a(?=b)bc/.test(str); //true 因为(?=b)只确定了b前面那个位置...就是说它匹配位置...为不是字符...
// /a(b)bc/.test(str); //false 因为(b)匹配了字符,而不是后面为b的那个位置....(b)换成(?:b),也是同样的效果...
// /(?=pattern)/ 
// // 说明右面紧挨着pattern 如
// var str = "abcad";
// var reg = /a(?=b)/g; //这样将会查找字符a，取到后面紧临b的字符a，这样第一个a匹配，
// //之所以说不消耗字符是指 当开始匹配字符串的时候 当第一个字符a匹配的时候查验第二个字符是否为b，不管第二个字符是否为b，那么第二次匹配的时候从第二个字符匹配
// var str = "abababababababa";
// var reg = /aba/g; //这样首先得三个字符匹配成功，再次匹配的时候就要从第四个字符b开始