const  stundets= [
    {
    name: "ndayambaje Gaetan",
    email: "gaetan@gmail.com",
    phone: "07844467875679800",
    },
    {
        name: "byiringiro innocent",
        email: "innocentn@gmail.com",
        phone: "0784446787",  
    },
    {
        name: "alex mboningaba",
        email: "alexis@gmail.com",
        phone: "07844467",
    },
    {
        name: "birori patrick",
        email: "patrick@gmail.com",
        phone: "0788994834",
    }
];
 let studentlist=document.getElementById("studentslist");
for(let i=0 ;i<stundets.length;++i){
    let listitem=document.createElement('li');
    listitem.classList.add("listitem");
    let personalinfo=document.createElement('div');
    let actions=document.createElement('div');
     actions.classList.add('actions');


    let stundentName=document.createElement('h2');
    let stundentEmail=document.createElement('p');
    let stundentphone=document.createElement('p');
    let removeStudent=document.createElement('button');

  //set the data to tags
    removeStudent.innerHTML="remove student";
    stundentName.innerHTML=stundets[i].name;
    stundentEmail.innerHTML=stundets[i].email;
    stundentphone.innerHTML=stundets[i].phone;
    

    //append tags to thier parents
    personalinfo.appendChild(stundentName);
    personalinfo.appendChild(stundentEmail);
    personalinfo.appendChild(stundentphone);
    
    actions.appendChild(removeStudent);

    listitem.appendChild(personalinfo);
    listitem.appendChild(actions);
    // calling the iterms in the javacript
    studentslist.appendChild(listitem);




}