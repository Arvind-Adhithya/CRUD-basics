
let form = document.querySelector('form');
let datas = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if(validateForm()){
    //     data.style.display = "none";
    // }
    $("#myModal").modal('hide');


    let tbody = document.querySelector('#tbody');
    let fullname = document.querySelector('#fullname').value;
    // console.log(genderselection.value)
    let gender = document.querySelector('input[name=choice]:checked').value;
    let dept = document.querySelector('.checkbox:checked').value;
    //  document.querySelector('.checkbox');
    // let str='';
    // for(i=0;i<4;i++){
    //     if(checkbox[i].checked === true){
    //         str+=checkbox[i].value+" ";
    //     }
    // }
    // console.log(str);


    var items = document.getElementsByName('box');
    var selectedItems = "";
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true)
            selectedItems += items[i].value + "\n";
    }
    // alert(selectedItems);

    let mail = document.querySelector('#mail').value;
    let date = document.querySelector('#date').value;
    let phonenum = document.querySelector('#phonenum').value;
    let city = document.querySelector('#city').value;
    let category = document.querySelector('#category').value;
    let colors = ['bg-primary', 'bg-dark', 'bg-info', 'bg-danger', 'bg-warning', 'bg-secondary'];
    let random = Math.floor(Math.random() * colors.length);

    const lop = { fullname, mail, phonenum, city, category, date, gender, dept };
    // <div>Gender : ${inlineRadio}</div>zzzz
    let curr=datas.length;
    let data = `
        <tr>
            <td>
                <div class=" img-r ${colors[random]} "><p class="h2 font-weight-normal img-p text-white">${(fullname).toUpperCase().slice(0, 1)}</p></div>
            </td>
        <td>
            <h2>${fullname}</h2>
           
            <div>${phonenum}</div>
            <div>${mail}</div>
        </td>
        <td>
        
        <div>Group : ${category}</div>
        <div>Gender : ${gender}</div>
        <div>Department : ${selectedItems}</div>
            
           

        </td>
        <td>
        <div>D.O.B : ${date}</div>
            <div>${city}</div>
        
        </td>
        <td>
            <button class="addstar" onClick="onHeart(\`${fullname}\`, \`${curr}\`)">Add ❤️</button>
        </td>
        <td>
        
        <button class="btntop" id="delete-i"><i onClick="onDelete(\`${fullname}\`)" class="fa fa-trash-o"></i></button>
        </td>
        <td>
        <button class="btntop" id="cross" data-toggle="modal" data-target="#myModal"><i onClick="onEdit(\`${fullname}\`)"  class="fa fa-pencil-square-o"></i></button>
       
        </td>
        </tr>
        
        `;
    let tr = document.createElement('tr');
    tr.innerHTML = data;
    datas.push(tr);
    // console.log(datas);
    tbody.innerHTML = ""
    datas.map(data => tbody.appendChild(data));
    // console.log({fullname,inlineRadio,mail,phonenum,city});
    document.querySelector('#fullname').value = "";
    // document.querySelector('#inlineRadio').value= "";
    document.querySelector('#mail').value = "";
    document.querySelector('#phonenum').value = "";
    document.querySelector('#city').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#category').value = "";
    // document.querySelectorAll('.checkbox').checked = false;

})

function onDelete(td) {
    console.log(td);

    datas.filter(data => {
        let name = data.children[1].children[0].textContent;
        if (name === td) {
            console.log("count");
            if (confirm('Are you sure to delete this record ?')) {
                data.style.display = "none";
            }
        }
        console.log()
    });
    console.log(datas);

}

function onEdit(d) {
    datas.map(data => {
        let name = data.children[1].children[0].textContent;
        if (name === d) {
            let city = data.children[3].children[1].textContent;
            // console.log(city);
            let phone = data.children[1].children[1].textContent;
            let email = data.children[1].children[2].textContent;
            let gender = data.children[2].children[1].textContent;
            let dept = data.children[2].children[2].textContent;
            let category = data.children[2].children[0].textContent;
            let date = data.children[3].children[0].textContent;
            // let x = document.getElementById("category").value;
            // let day = document.querySelector('#date').value;
            // console.log(day)
            gender = gender.split(": ")[1]
            document.querySelector('#fullname').value = d;
            document.querySelector('#city').value = city;
            document.querySelector('#phonenum').value = phone;
            document.querySelector('#mail').value = email;

            document.querySelector('#category').value = category;
            // console.log(category);

            document.querySelector('#date').value = date;

            console.log("enter edit");
            // var clicked = false
            document.getElementById('submit').addEventListener("click", function () {
                clicked = true;
                console.log("enter submit");
                data.style.display = "none";
            });
            // if(document.querySelector('#submit').clicked == true)
            // {
            //     console.log("enter submit");
            //     data.style.display = "none";
            // }

            console.log({ city, phone, email, gender, category, dept, date })
        }
    })
}
function onHeart(td,index) {
console.log(td);
let name=td;

// var span ='<span id="star"><i class="fa fa-star" ></i></span>'+td;
// console.log(span);
// td.innerHTML = td.innerHTML.replace(window.getSelection(), span);
   datas[index].children[1].children[0].innerHTML= name.concat('<span id="star"><i class="fa fa-star" ></i></span>');
    /*datas.forEach(data => {
        console.log(name);
    data.children[1].children[0].innerHTML= name.concat('<span id="star"><i class="fa fa-star" ></i></span>');
    //     console.log(datas);
    //     let nameHold=data.children[1].children[0];
        
    });*/                                                                                            
        // if(nameHold==td){
        //     console.log("if entered");
        
        // }
    

    // console.log(td);
    // datas.filter(data => {
    //     let name = data.children[1].children[0].textContent;
    //     if(name === td){

    //         document.querySelector("#star").style.display = "inline-block";

    // }

    // });

    // selectedRow = td.parentElement.parentElement;
    // console.log(selectedRow);
    // datas.filter(data => {
    //     let name = data.children[1].children[0].textContent;
    //     console.log(name);

    //     console.log(datas);
    //     if(name === td){


    // }
    //     console.log()
    // });
    // console.log(td);
    
 
    // datas.filter(data => {
        // console.log(data);
        // if(td==data.children[1].children[0]){
        //     console("val : "+td);
        // }
        // console.log(data.children[1].children[0]);

        // data.children[1].children[0].innerHTML = td + '<span id="star"><i class="fa fa-star" ></i></span>'

        // console.log(data);
        // let val = "abc";
        // console.log(data);

        // console.log()
    // });
    // document.querySelector("#star").style.display = "inline-block";


}
function validateForm() {
    var x = document.forms["myForm"]["fullname"].value;
    if (x == "") {
        alert("Name must be filled out");
        //   return false;
    }
}