 

let hub = document.getElementById("task_hub");
let list = document.getElementById("task_list");


function save(){
    localStorage.setItem("data",list.innerHTML);
}



function add(){
    let task =document.createElement("li");
    let val = document.getElementById("inp");
    task.style.margin = "12px";
    task.style.fontFamily = "Impact,Charcoal,sans-serif";
    if(val.value==""){
        window.alert("NO VALUE");
    }
    else{
        let checkb = document.createElement("INPUT");
        checkb.setAttribute("type","checkbox");
        checkb.style.borderRadius = "20px";
        task.appendChild(checkb);
        task.innerText = val.value;
        task.style.backgroundColor = "none";
        let del_btn = document.createElement('BUTTON');
        del_btn.style.width = "5%";
        del_btn.style.height = "30%";
        del_btn.style.margin = "4px";
        localStorage.setItem("t","task");
        del_btn.onclick = function(){
            task.style.display= "none";
            localStorage.removeItem("t");
        }
        
        let del = document.createElement('IMG')
        del.setAttribute("src","https://cdn-icons-png.flaticon.com/512/3405/3405244.png");
        del.style.width = "70%";
        del_btn.appendChild(del);
        task.appendChild(del_btn);
        list.appendChild(task);
        save();
}
}


function show(){
    list.innerHTML = localStorage.getItem("data");
}



show();


