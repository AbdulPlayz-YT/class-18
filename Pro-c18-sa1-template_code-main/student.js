
class Student
{
   constructor(name, standard, age){
    this.name = name;
    this.standard = standard;
    this.age = age;
   }
   display(){
    text(this.name, 100, 100);
    text (this.standard, 100, 120);
    text(this.age, 100, 140);
   }
}



