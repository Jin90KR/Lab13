var list = [
    {
        name: "Daniel",
        age: 22,
        skill: "HTML"
    },
    {
        name: "Jayden",
        age: 30,
        skill: "CSS"
    },
    {
        name: "Jin",
        age: 28,
        skill: "JavaScript"
    },
    {
        name: "Joons",
        age: 30,
        skill: "React"
    }
]



var ourName = document.getElementById("our_name");
var averageAge = document.getElementById("average_age");
var ourSkills = document.getElementById("our_skills");
var pushButton = document.getElementById("pushbutton");
var newButton = document.getElementById("new_list");
var i = 0;



function nameLoopFunc (namelist) {
    console.log(namelist);
    for (var i = 0; i < namelist.length; i++) {
        // console.log(namelist[i].name);
        if ( i === namelist.length-1 ) {
            // console.log(namelist[i].name);
            ourName.innerHTML = ourName.innerHTML + namelist[i].name;
            // console.log(ourName.innerHTML);
        } else if( i < namelist.length-1) {
        ourName.innerHTML += namelist[i].name + ", ";
        };

        // console.log(ourName.innerHTML);
        averageAge.innerHTML = Number(averageAge.innerHTML) + namelist[i].age / 4;
        // console.log(Number(averageAge.innerHTML));

        ourSkills.innerHTML += namelist[i].name + " : " + namelist[i].skill + "<br>" ;
    };

    
};

var result = nameLoopFunc (list);
console.log("result", result);


function newlist (addlist) {
    console.log(addlist)
    var name = document.getElementById("myname").value;
    console.log(name);
    var age = document.getElementById("myage").value;
    console.log(age);
    var skill = document.getElementById("myskill").value;
    console.log(skill);
    list.push({name, age, skill});
}


pushButton.addEventListener("click", ()=> {

    newlist(list)
//    list.push = { nameInput, ageInput, skillInput};
//    console.log(nameInput);
   
})

newButton.addEventListener("click", ()=> {

    nameLoopFunc ()
//    list.push = { nameInput, ageInput, skillInput};
//    console.log(nameInput);
   
})
