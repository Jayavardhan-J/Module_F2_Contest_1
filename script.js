var data = [
    { name: "John", age: 21, profession: "developer" },
    { name: "Jay", age: 24, profession: "developer" },
    { name: "Rahul", age: 28, profession: "developer" },
    { name: "Tim", age: 20, profession: "developer" },
    { name: "Jane", age: 27, profession: "admin" },
    { name: "Kiran", age: 27, profession: "admin" },
    { name: "Robin", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(var i=0;i<data.length;i++){
        if(data[i].profession=="developer")console.log(data[i].name, data[i].age);
    }
  }
  
  // 2. Add Data
  function addData() {
    var newData ={name: prompt("Enter name: "),age:parseInt(prompt("Enter age: ")),profession:prompt("Enter profession: ")};
    data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter((person)=> {
        return person.profession !== "admin";
      });
      console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    var data2=[
        { name: "Barry", age: 23, profession: "developer" },
        { name: "Allen", age: 27, profession: "admin" },
        { name: "mandy", age: 19, profession: "developer" },
    ];
    data=data.concat(data2);
    console.log(data);
  }
  
  // 5. Average Age
  function averageAge() {
    var age=0;
    data.forEach((person)=>age+=person.age);
    var avgAge=age/data.length;
    console.log("Average age: ",avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    var check=false;
    data.forEach((person)=>{
        if(person.age>25)check=true;
    });
    console.log(check);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    var distinct_Profession=[];
    data.forEach((person)=>{
        if(!distinct_Profession.includes(person.profession))distinct_Profession.push(person.profession);
    });
    console.log(distinct_Profession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data=data.sort((a,b)=>{
        return a.age-b.age;
    });
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    var index=data.findIndex((person)=>{
        return person.name==="John";
    });
    var newProfession=prompt("Enter the new profession: ");
    if(index!=-1)data[index].profession=newProfession;
    console.log(data[index]);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    console.log(data.length);
  }