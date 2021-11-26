const students = JSON.parse(localStorage.getItem("students")) || [];

let updateIndex=null;

document.getElementById("btn-add-student").addEventListener("click", function (e) {
    document.getElementById("formcontainer").classList.remove("hideorshow")
});

document.getElementById("btnclose").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("formcontainer").classList.add("hideorshow");
});

document.getElementById("submitdata").addEventListener('click', function (e) { //step1
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let adress=document.getElementById("adress").value;
    let age=document.getElementById("age").value;
    let sex=document.getElementById("sex").value;

    let id = students.length + 1;
    let student = { id, name, email, phone,adress,age,sex};
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));
    location.reload();
});


let studentlist = document.getElementById("studentslist");
for (let i = 0; i < students.length; ++i) {
    let listitem = document.createElement('li');
    listitem.classList.add("listitem");
    let personalinfo = document.createElement('div');
    let actions = document.createElement('div');
    actions.classList.add('actions');


    let stundentName = document.createElement('h2');
    let stundentEmail = document.createElement('p');
    let stundentphone = document.createElement('p');
    let stundentAdress = document.createElement('p');
    let stundentAge=document.createElement('p');
    let stundentSex=document.createElement('p');
    let removeStudent = document.createElement('button');
    let UpdateStudent = document.createElement('button');

    //set the data to tags
    removeStudent.innerHTML = " <i class=\"fas fa-user-minus\"></i> Remove";
    UpdateStudent.innerHTML = "<i class=\"fas fa-user-edit\"></i>  Update";
    stundentName.innerHTML = students[i].name;
    stundentEmail.innerHTML = students[i].email;
    stundentphone.innerHTML = students[i].phone;
    stundentAdress.innerHTML=students[i].adress;
    stundentAge.innerHTML=students[i].age;
    stundentSex.innerHTML=students[i].sex;

    //append tags to thier parents
    personalinfo.appendChild(stundentName);
    personalinfo.appendChild(stundentEmail);
    personalinfo.appendChild(stundentphone);
    personalinfo.appendChild(stundentAdress);
    personalinfo.appendChild(stundentAge);
    personalinfo.appendChild(stundentSex);

    actions.appendChild(removeStudent);
    actions.appendChild(UpdateStudent);
    listitem.appendChild(personalinfo);
    listitem.appendChild(actions);
    // calling the iterms in the javacript
    studentslist.appendChild(listitem);
    removeStudent.addEventListener("click", function (e) {
        let newStudents = students.filter(function (student) {
            return student.id != students[i].id;
        });
        localStorage.setItem("students", JSON.stringify(newStudents));
        location.reload();
    });

    UpdateStudent.addEventListener("click", function (e) {
        document.getElementById("nameupadte").value = students[i].name;
        document.getElementById("emailupdate").value = students[i].email;
        document.getElementById("phoneupdate").value = students[i].phone;
        document.getElementById("adressupdate").value = students[i].adress;
        document.getElementById("ageupdate").value = students[i].age;
        document.getElementById("sexupdate").value = students[i].sex;

        document.getElementById("formcontainerUpdate").classList.remove("hideorshow");
        updateIndex=i;
    });

}
document.getElementById("submitdataupdate").addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("nameupadte").value;
    let email = document.getElementById("emailupdate").value;
    let phone = document.getElementById("phoneupdate").value;
    let adress=document.getElementById("adressupdate").value;
    let age=document.getElementById("ageupdate").value;
    let sex=document.getElementById("sexupdate").value;
    let student = { name, email, phone,adress,age,sex};
    if (updateIndex != null) {
        students[updateIndex] = student;
        localStorage.setItem("students", JSON.stringify(students));
        location.reload();
    }
});
