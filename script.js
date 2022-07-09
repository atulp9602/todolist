const arrOfTodo = localStorage.getItem("todo") == null ? [] : JSON.parse(localStorage.getItem("todo")) ;

function display(){
    if(arrOfTodo.length != 0){
        for(let i=0; i<arrOfTodo.length; i++)
        {
            let li = document.createElement("li");
            li.innerHTML = `${arrOfTodo[i]}&nbsp;<button type="button" id="edit" onclick="edit(${i})"><i class="fa fa-check-square-o"></i></button>
                            <button type="button" id="del" onclick="cut(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
            document.getElementById("list").appendChild(li);
        }
    }
}

function addTodo(){
    let todo;
    todo = document.getElementById("todo").value;

    if(!todo){
        document.getElementById("msg").innerHTML = "Please, Add Something!!";
        return false;
    }
    else{

        if(eindex != null){
            // alert(eindex);
            arrOfTodo[eindex] = todo;
        }
        else{
            arrOfTodo.push(todo);
        }
        localStorage.setItem("todo", JSON.stringify(arrOfTodo));
        return true;
    }
  
}

function cut(index){
  let arr =   JSON.parse(localStorage.getItem("todo"));
  arr.splice(index,1);
  localStorage.setItem("todo", JSON.stringify(arr));
  location.reload();
}

let eindex;
function edit(index){
    eindex = index;
    document.getElementById("todo").value = JSON.parse(localStorage.getItem("todo"))[eindex];
}