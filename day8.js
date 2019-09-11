console.log("first question-------------------------------------");

(function(){
String.prototype.filter=function(nstr){
  let currstr=this;
  let arr = currstr.split(" ");
  let newstr="";
  for(str of arr){
    if(str!==nstr){
      newstr+=" "+str;
    }
  }
  return newstr;
};
console.log("aaa bbb ccc ddd".filter("aaa"));
})();

console.log("second question-------------------------------------");

(function(){
Array.prototype.bubbleSort=function(){
  let arr=this;
  let exchange=function(arr,m,n){
    let t =arr[m];
    arr[m]=arr[n];
    arr[n]=t;
  }
  for(let i=0;i<arr.length;i++)
  {
    for(let j=arr.length-1;j>=i+1;j--){
      if(arr[j]<arr[j-1]){
        exchange(arr,j,j-1);
      }
    }
  }
  return this;
};
console.log([6,4,0, 3,-2,1].bubbleSort());
})();


console.log("third question-------------------------------------");

(function(){
  const Person=function(name){
    this.name=name;
  };
  const Teacher=function(name){
    Person.call(this,name);
  };
  Teacher.prototype.teach=function(sub){
    console.log(this.name+" teaches "+sub);
  };

  let t1=new Teacher("tina");
  t1.teach("WAP");
})();

(function(){
  const Person={
    name:"undefined",
    setName:function(name){
      this.name=name;
    }
  };
  const Teacher = Object.create(Person);
  Teacher.teach=function(sub){
    console.log(this.name+" teaches "+sub);
  };

  let t1=Object.create(Teacher);
  t1.setName("tina");
  t1.teach("WAP");
})();

console.log("forth question-------------------------------------");

(function(){
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  greeting()  {
    console.log( "my name is "+this.name+" and I am "+this.age+" years old.");
  }
  salute(){
    console.log("Good morning!, and in case I dont see you,good afternoon, good evening and good night!");
  }
}
class Student extends Person{
  constructor(name,age,major){
      super(name,age);
      this.major=major;
    }
    greeting(){
      console.log( "my name is "+this.name+" and I am "+this.age+" years old and I am studying "+this.major);
    }
  }
  class Professor extends Person{
    constructor(name,age,department){
      super(name,age);
      this.department=department;
    }
    greeting(){
      console.log("my name is "+this.name+" and I am "+this.age+" years old. and I am in the "+this.department+"department.");
    }
  }

  const stu1=new Student("rxk",18,"cs");
  const pro1=new Professor("tina",18,"iowa");
  stu1.greeting();
  stu1.salute();
  pro1.greeting();
})();

