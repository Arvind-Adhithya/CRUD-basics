let form = document.querySelector('form');
let datas = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    $("#myModal").modal('hide');
    let tbody = document.querySelector('#tbody');
    let fullname = document.querySelector('#fullname').value;
    let gender = document.querySelector('input[name=choice]:checked').value;
    let dept = document.querySelector('.checkbox:checked').value;
    var items = document.getElementsByName('box');
    var selectedItems = "";
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true)
            selectedItems += items[i].value + "\n";
    }
    let mail = document.querySelector('#mail').value;
    let date = document.querySelector('#date').value;
    let phonenum = document.querySelector('#phonenum').value;
    let city = document.querySelector('#city').value;
    let category = document.querySelector('#category').value;
    let colors = ['bg-primary', 'bg-dark', 'bg-info', 'bg-danger', 'bg-warning', 'bg-secondary'];
    let random = Math.floor(Math.random() * colors.length);
    const lop = { fullname, mail, phonenum, city, category, date, gender };
    // <div>Gender : ${inlineRadio}</div>
    // <div>Gender : ${gender}</div>
    // (function (){
    //     var radios = document.getElementsByName('choice');
    //     console.log(radios);
    //     for(var i = 0; i < radios.length; i++){
    //         radios[i].onclick = function(){
    //             document.getElementById('choiceLabel').innerText = this.value;
    //         }
    //     }
    // })();

    // let tr = document.createElement('tr');
    // tr.innerHTML = data;
    // console.log(datas);
    tbody.innerHTML = ""
    datas.push(lop);
    datas.map((data, index) => {
        let node = `
        <tr>
            <td>
                <div class=" img-r ${colors[random]} "><p class="h2 font-weight-normal img-p text-white">${(data.fullname).toUpperCase().slice(0, 1)}</p></div>
            </td>
            <td>
                <h3>${data.fullname}</h3>
                <div>${data.phonenum}</div>
                <div>${data.mail}</div>
            </td>
            <td>
                <div>Group : ${data.category}</div>
                <div>Gender : ${data.gender}</div>
                <div>Department : ${data.selectedItems}</div>
            </td>
            <td>
            <div>D.O.B : ${data.date}</div>
                <div>${data.city}</div>
            </td>
            <td>
                <button class="addstar" onClick="onHeart(${index})">Add ❤️</button>
            </td>
            <td>
                <button class="btntop" id="delete-i"><i onClick="onDelete(${index})" class="fa fa-trash-o"></i></button>
            </td>
            <td>
                <button class="btntop" id="cross" data-toggle="modal" data-target="#myModal"><i onClick="onEdit(\`${data.fullname}\`)"  class="fa fa-pencil-square-o"></i></button>
            </td>
            </tr>
        `;
        let tr = document.createElement('tr');
        tr.dataset.index=index
        tr.innerHTML = node
        tbody.appendChild(tr)
    });



    // console.log({fullname,inlineRadio,mail,phonenum,city});
    document.querySelector('#fullname').value = "";
    // document.querySelector('#inlineRadio').value= "";
    document.querySelector('#mail').value = "";
    document.querySelector('#phonenum').value = "";
    document.querySelector('#city').value = "";
    document.querySelector('#date').value = Date.now();
    document.querySelector('#category').value = "";
})

function onDelete(td) {
    console.log("td is"+td);
   

    datas.filter(data => {
        console.log("enter");
            if ( confirm('Are you sure to delete this record ?')) {
                // document.querySelector(".btnclk").addEventListener("click", function(){
                //         document.querySelector(".content").style.display = "block";
                //     });
                console.log(datas)
                datas.style.display = "none";
                // datas.pop();
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
            let phone = data.children[1].children[1].textContent;
            let email = data.children[1].children[2].textContent;
            let gender = data.children[2].children[1].textContent;
            let category = data.children[2].children[0].textContent;
            let date = data.children[3].children[0].textContent;
            gender = gender.split(": ")[1]
            document.querySelector('#fullname').value = d;
            document.querySelector('#city').value = city;
            document.querySelector('#phonenum').value = phone;
            document.querySelector('#mail').value = email;
            // document.querySelector('#inlineRadio').value= gender;
            document.querySelector('#category').value = category;
            document.querySelector('#date').value = date;

            data.style.display = "none";
            console.log({ city, phone, email, gender, category, date })
        }
    })
}
function onHeart(index) {
    console.log(index)
    // return
    // datas.filter(data => {
    //     let name = data.children[1].children[0].textContent;
    //     if(name === td){

    //         document.querySelector("#star").style.display = "inline-block";

    // }

    // });
    // console.log(td);
    // console.log(data);
    // console.log(datas[0]);
    // '<span id="star"><i class="fa fa-star" ></i></span>'
    
    datas.filter(data => {
        console.log(datas[index].fullname);
        datas[index].fullname=  datas[index].fullname + '<span id="star"><i class="fa fa-star" ></i></span>'    
        console.log(datas[index].fullname);
        // (data.fullname).innerHTML =  '<span id="star"><i class="fa fa-star" ></i></span>'
        // console.log(data);
        // let val = "abc";
        // console.log(data);
        
        console.log()
    });

    // selectedRow = td.parentElement.parentElement;
    // console.log(selectedRow);
    // document.querySelector("#star").style.display = "inline-block";


}