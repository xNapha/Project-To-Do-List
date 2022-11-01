import { hubInfoStorage, listInfo} from "./hub";

const showList = (x) =>{
    if (x == undefined){
        removeList();
        createList(x);
    } else{
        removeList();
        createList(x);
    }
};

const createList = (x) =>{
    const listCon = document.querySelector("#listCon");
    const list = document.createElement("div");
    list.setAttribute("id", "list");

    const infoCon = document.createElement("div");
    infoCon.setAttribute("id","infoCon");

    const headerCon  = document.createElement("div");
    headerCon.setAttribute("id","headerCon")

    const title = document.createElement("h1");
    title.setAttribute("id","title");
    title.textContent = x.title;

    const description = document.createElement("p");
    description.setAttribute("id","description");
    description.textContent = x.description;

    const textCon = document.createElement("div");
    textCon.setAttribute("id","textCon");
    textCon.append(title, description);

    const settingsCon = document.createElement("div");
    settingsCon.setAttribute("id", "settingsCon");

    const dueDateCon = document.createElement("div");
    dueDateCon.setAttribute("id","dueDateCon");
    dueDateCon.textContent = x.dueDate;

    const buttonsCon = document.createElement("div");
    buttonsCon.setAttribute("id","buttonsCon");

    const editCon = document.createElement("button");
    editCon.setAttribute("id","editCon");
    editCon.textContent = "E";

    const priorityCon = document.createElement("div");
    priorityCon.setAttribute("id","priorityCon");

    const addTaskButton = document.createElement("button");
    addTaskButton.setAttribute("id","addTaskButton");
    addTaskButton.textContent = "R";
    
    buttonsCon.append(editCon, addTaskButton);
    settingsCon.append(dueDateCon, buttonsCon);
    headerCon.append(textCon, settingsCon);

    const toDoCon = document.createElement("div");
    toDoCon.setAttribute("id","toDoCon");

    infoCon.append(headerCon);
    list.append(infoCon, toDoCon);
    listCon.append(list);

    importToDoFromList(x);
};

const removeList = () =>{
    document.querySelector("#list").remove();
};

const importToDoFromList = (x) =>{
    if(x.list == undefined){
        return;
    };
    for (let i = 0; i<x.list.length; i++){
        createToDo(x.list[i]);
    };
    addToDo(x);
    
};

const createToDo = (y) =>{
    const toDoCon = document.querySelector("#toDoCon");
    const toDo = document.createElement("div");
    toDo.classList.add("toDos");
    toDo.textContent = y.task;
    darken(toDo,y);
    toDo.addEventListener("click", ()=>{
       checkedOff(toDo,y);
    });
    toDoCon.append(toDo);
};

const addToDo = (x) =>{
    const toDoCon = document.querySelector("#toDoCon");
    const addToDoButton = document.createElement("button");
    addToDoButton.setAttribute("id", "addToDo");
    addToDoButton.classList.add("toDos");
    addToDoButton.textContent = "Add";

    addToDoButton.addEventListener("click",()=>{
        addToDoEvent(x.list);
        removeToDoList();
        importToDoFromList(x);
    });
    toDoCon.append(addToDoButton);
}

const addToDoEvent = (y) =>{
    var tempCounter = y.length;
    y[tempCounter] = listInfo("test", false);
    console.log(tempCounter)
    console.log(y)
};

const checkedOff = (toDo, y) =>{
    if(y.check == true){
        y.check = false;
        toDo.classList.remove("darken");
        return;
    } else{
        y.check = true;
        toDo.classList.add("darken");
    }
}

const darken = (toDo,y) =>{
    if(y.check == true){
        toDo.classList.add("darken");
    }
};

const removeToDoList = () =>{
    document.querySelector("#toDoCon").remove();
    const list = document.querySelector("#list");
    const toDoCon = document.createElement("div");
    toDoCon.setAttribute("id","toDoCon");
    list.append(toDoCon);
}


export {showList}