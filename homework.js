function max(a,b){
    return a>b?a:b;
}

function maxOfThree(a,b,c){
    return max(max(a,b),c);
}

function  isVowel(s) {
    return /^(A|E|I|O|U|a|e|i|o|u)$/.test(s);
}

function sum(a)
{
    var su=0;
    for(i=0;i<a.length;i++){
        su+=parseInt(a[i]);
    }
    return su;
}

function mutiply(a)
{
    muti=1;
    for(i=0;i<a.length;i++){
        muti*=parseInt(a[i]);
    }
    return muti;
}

function reverse(s){
    str="";
    for(var i=s.length-1;i>=0;i--){
        str=str+s[i];
    }
    return str;
}

function  findLongestWord(s) {
    var maxs="";
    for(i=0;i<s.length;i++){
        if(a[i].length>maxs.length){
            maxs=a[i];
        }
    }
    return maxs;
}

function filterLongWords(arr,len) {
    var newarr = new Array();
    var ind=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].length>len){
            newarr[ind++]=arr[i];
        }
    }
    return newarr;
}
function arrayMethod()
{
    var arr=[1,2,3,4];
    window.alert(arr.map(function(ele){return ele+3}));
    window.alert(arr.filter(function(ele){return ele==3;}));
    window.alert(arr.reduce(function(sum,currval){return sum*currval}));
}
