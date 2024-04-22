
window.onload = function () {
    let table = document.getElementById("table");
    table.onclick = function (e) {


        if (e.target && e.target.nodeName ==='BUTTON'){

            if(e.target.textContent === "Delete"){
               let idm = e.target.id;

               Delete(idm);
            }
            if(e.target.textContent === "Edit"){
                let ide = e.target.id;

                edit(ide);
            }

        }
    }
}

function Delete(idm) {
    let i = idm.slice(6,);
    console.log(i)
    let obj = document.getElementById("tr"+i);
    obj.remove();
    let value = Number(obj.childNodes[1].innerText);
    totalExpense -= value;
    balance += value;
    document.querySelector("#expense").innerHTML = "$ " + totalExpense;
    document.querySelector("#Balance").innerHTML = "$" + balance;



}

let editi;
function edit(ide){
    editi = ide.slice(4,);
    let obj = document.getElementById("tr"+editi);
    document.getElementById("modalEA").setAttribute("placeholder",obj.childNodes[1].textContent);
    document.getElementById("modalEA").setAttribute("default",obj.childNodes[1].textContent);
    document.getElementById("modalNE").setAttribute("placeholder",obj.childNodes[0].textContent);
    document.getElementById("modalNE").setAttribute("default",obj.childNodes[0].textContent);
    console.log(obj.childNodes[0].textContent);
    console.log(obj.childNodes[1].textContent);




}



let balance = 0;
function Submit(){
    let principal = Number(document.querySelector("#principal").value);
    if(principal<1){
        document.getElementById("errorSubmit").innerText="your value should be more than 0!";
    }
    else {
        document.querySelector("#AddExpense").removeAttribute("disabled");
        document.getElementById("errorSubmit").innerText="";
        balance = principal;
        let initialAmount = document.querySelector("#initialAmount");
        initialAmount.innerHTML = "$ "+principal;
        let Balance = document.querySelector("#Balance");
        Balance.innerHTML = "$ "+ principal;
    }
    if(i>1){
        let expense = Number((document.getElementById("expense").innerText).slice(2,));
        console.log(expense);
        balance -= expense;
        document.querySelector("#Balance").innerHTML = "$" + balance;

    }

}


let i = 1;
let totalExpense=0;

function AddExpense (){
    let expenseName = document.querySelector("#expenseName").value;

    let expenseAmount = Number(document.querySelector("#expenseAmount").value);
    if(expenseName.length === 0){
        document.getElementById("errorAddName").innerText="your should enter a value!";
    }
    else {
        document.getElementById("errorAddName").innerText="";
        if (expenseAmount < 1) {
            document.getElementById("errorAddExpense").innerText = "your value should be more than 0!";
        } else {
            document.getElementById("errorAddExpense").innerText ="";
            let newTdeN = document.createElement("td");
            newTdeN.setAttribute("id", "tdeN" + i);
            newTdeN.innerHTML = expenseName;


            let newTdeA = document.createElement("td");
            newTdeA.setAttribute("id", "tdeA" + i);
            newTdeA.innerHTML = expenseAmount;

            let newTd3 = document.createElement("td");
            newTd3.setAttribute("id", "tdbtn" + i);

            let btnEdit = document.createElement("button");
            btnEdit.setAttribute("class", "btn");
            btnEdit.setAttribute("id", "Edit" + i);
            btnEdit.setAttribute("data-toggle", "modal");
            btnEdit.setAttribute("data-target", "#myModal");
            //btnEdit.setAttribute("onclick","edit(ide)");
            btnEdit.innerText = "Edit"

            let btnDelete = document.createElement("button");
            btnDelete.setAttribute("class", "btn");
            btnDelete.setAttribute("id", "Delete" + i);
            btnDelete.click({id: i}, Delete);
            /*btnDelete.onclick = function (){
                this.addEventListener("click",Delete(idm))
            }*/
            //btnDelete.setAttribute("onclick","Delete");
            btnDelete.innerText = "Delete"

            let newTr = document.createElement("tr");
            newTr.setAttribute("id", "tr" + i);
            newTd3.appendChild(btnEdit);
            newTd3.appendChild(btnDelete);

            newTr.appendChild(newTdeN);
            newTr.appendChild(newTdeA);
            newTr.appendChild(newTd3);

            document.querySelector("#table").append(newTr);
            totalExpense += expenseAmount;
            balance -= expenseAmount;
            document.querySelector("#expense").innerHTML = "$ " + totalExpense;
            document.querySelector("#Balance").innerHTML = "$" + balance;
            i++;
        }
    }

}


function modalAccept(){
    let modalNE = document.getElementById("modalNE").value;
    let modalEA = document.getElementById("modalEA").value;
    if (modalNE.length != 0){
     document.getElementById("tdeN"+editi).innerText = modalNE;
    }
    if(modalEA.length != 0){
        let lastvalue = Number(document.getElementById("tdeA"+editi).innerText);
        document.getElementById("tdeA"+editi).innerText = modalEA;
        let difference = lastvalue - modalEA;
        totalExpense -= difference;
        balance += difference;
        document.querySelector("#expense").innerHTML = "$ " + totalExpense;
        document.querySelector("#Balance").innerHTML = "$" + balance;
        document.getElementById("modalEA").setAttribute("default",lastvalue);
    }

}