function excecute(func,result,...more){
    if(more.len)
    re = func(more);
    if(Array.isArray(re)){
        re=re.toString();
    }
    if(Array.isArray(result)){
        result=result.toString();
    }
    if (re === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + result + " found " + func(more);
    }
}

function sum(a)
{
    return a.reduce( (pre,cur)=>pre + cur);
}

function mutiply(a)
{
    return a.reduce((pre,cur)=> pre * cur);
}

function  findLongestWord(s) {
    return s.reduce((pre,curr)=>pre>curr.length?pre:curr.length);
}

function filterLongWords(arr,len) {
    return    newarr.filter((s,len)=>s.length>len);
}

window.onload=function(){
    a=[1,2,3,4];
    console.log(excecute(sum,24,a));
}