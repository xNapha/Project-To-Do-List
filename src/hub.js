import {showList} from "./list.js";

let hubInfoStorage = [];
let counter = 0;

const newCategoryForm = (x) =>{
    const hubFormCon = document.createElement("div");
    hubFormCon.setAttribute("id", "hubFormCon");

    const hubFormExit = document.createElement("div");
    hubFormExit.setAttribute("id","hubFormExit");

    const hubForm = document.createElement("form");
    hubForm.setAttribute("id", "hubForm");

    closeFormEvent(hubFormExit).closeForm();

    const titleInputCon = document.createElement("div");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Task...");
    titleInput.setAttribute("name", "title");
    titleInputCon.append(titleInput);

    const descriptionInputCon = document.createElement("div");
    descriptionInputCon.setAttribute("id", "descriptionInputCon");
    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "descriptionInput");
    descriptionInput.setAttribute("placeholder", "Brief description...");
    descriptionInputCon.append(descriptionInput);

    const dueDateInputCon = document.createElement("div");
    dueDateInputCon.setAttribute("id","dueDateInputCon");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("id","dueDateLabel");
    dueDateLabel.setAttribute("for","dueDate");
    dueDateLabel.textContent = "Due: ";
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("id","dueDateInput");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInputCon.append(dueDateLabel,dueDateInput);

    const priorityInputCon = document.createElement("div");
    priorityInputCon.setAttribute("id","priorityInputCon");
    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("id","priorityInput");
    priorityInput.setAttribute("type","range");
    priorityInput.setAttribute("min","1");
    priorityInput.setAttribute("value","2");
    priorityInput.setAttribute("max","3");
    priorityInputCon.append(priorityInput);

    const addButtonCon = document.createElement("div");
    const addButton = document.createElement("button");
    addButton.setAttribute("id","addButton");
    addButton.setAttribute("type","button");
    addButton.textContent = "Add new list";
    addButtonCon.append(addButton);

    closeFormEvent(addButton).saveData();

    hubForm.append(titleInputCon, descriptionInputCon, dueDateInputCon,priorityInputCon, addButtonCon);
    hubFormCon.append(hubFormExit,hubForm);
    x.append(hubFormCon);
};

const closeFormEvent = (area) => {
    const closeForm = () => {
        area.addEventListener("click",()=>{
            document.querySelector("#hubFormCon").remove();
            document.querySelector("#contentCon").removeAttribute("class", "blur");
        });
    };

    const saveData = () => {
        area.addEventListener("click",() =>{
            counter++;
            hubInfoStorage[counter] =  storeInfo(document.querySelector("#titleInput").value, document.querySelector("#descriptionInput").value, document.querySelector("#dueDateInput").value, document.querySelector("#priorityInput").value, [], false, counter);
            createNewTask(hubInfoStorage[counter]);
        });
        closeForm();
    };

    const showData = () =>{
        for(let i = 0; i<hubInfoStorage.length; i++){
            if (hubInfoStorage[i].remove == false){
                createNewTask(hubInfoStorage[i]);
            };
        };
    };

    return {closeForm, saveData, showData};
};

const createNewTask = (storage) => {
    const perm = counter;
    const categories = document.querySelector("#categories");

    const newTaskCon  = document.createElement("div");
    newTaskCon.setAttribute("id", "task"+perm);
    newTaskCon.setAttribute("class", "newTask");

    newTaskCon.addEventListener("click",() =>{
        showList(hubInfoStorage[perm]);
    });
    
    const taskLabel = document.createElement("h1");
    taskLabel.setAttribute("id","taskTitle"+ counter);
    taskLabel.textContent = storage.title;

    const taskPriority = document.createElement("div");
    taskPriority.setAttribute("id", "taskPriority"+perm);
    taskPriority.classList.add("priority","priority"+storage.priority);

    newTaskCon.append(taskLabel, taskPriority);
    categories.append(newTaskCon);
};

const storeInfo = (a, b, c, d, e, f, g) => {
    const title = a;
    const description = b;
    const dueDate = c;
    const priority = d;
    const list = e;
    const remove = f;
    const taskCount = g;

    return{title, description, dueDate, priority, list , remove, taskCount};
};

const listInfo = (a,b,c,d) =>{
    const task = a;
    const check = b;
    const remove = c;
    const count = d;

    return{task, check, remove, count};
};

const taskOne = listInfo("1", false, false, 0);
const taskTwo = listInfo("2", true, false, 1);
const taskThree = listInfo("3", false, false, 2);
const test = storeInfo("test","hello1","2022-10-29","2",[taskOne,taskTwo, taskThree], false ,0);
hubInfoStorage[0] = test;

export {newCategoryForm,closeFormEvent, listInfo};
