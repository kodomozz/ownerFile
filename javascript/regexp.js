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

// let rsult = '<span style="font-family:\'微软雅黑\';">demo</span>'.replace(/\'[^']*\'/g,function(){      
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


let result = '中国人民'.replace(/(中国)/g, function ($1) {
    console.log($1)
    return $1;
})
console.log(result)
//"(中国)人民"
// 'cdab'.replace(/(ab)/g,'$`')
//"cdcd"
// 'abcd'.replace(/(ab)/g,"$'")
//"cdcd"
// 'abcdabcd'.replace(/(ab)/g,"[$&]")
//"[ab]cd[ab]cd"
// '$1$2wa,test'.replace(/[a-zA-z]/g,'$$');
//"$1$2$$,$$$$"