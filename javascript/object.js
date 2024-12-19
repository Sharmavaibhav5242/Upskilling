let text="This is a string" //string
let arr=["Vaibhav",20,"Bhopal"] //array

//object
//key:value;

let student={
    name:"Vaibhav",
    age: 20,
    city:"Bhopal",
    welcome:function(){
        console.log(`Welcome to ${this.name} home`);

    },
    fruits:["Apple","Banana","Pineapple","Avocado"]
}
console.log(student.age); //access 20

student.email="vaibhavsharma5242@gmail.com";
//new data added in object
console.log(student);

student.age=21;
console.log(student);

// delete student.name;
// console.log(student);

student.welcome();
console.log(student.fruits[2])