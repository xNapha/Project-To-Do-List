import { listInfo, closeFormEvent} from "./hub.js";

const showList = (x) =>{    
    const removeList = () =>{
        document.querySelector("#list").remove();
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
    
        const priorityCon = document.createElement("div");
        priorityCon.setAttribute("id","priorityCon");
    
        const editCon = document.createElement("button");
        editCon.setAttribute("id", "editButton");
        editCon.textContent = "E";
    
        editCon.addEventListener("click",()=>{
            editInfo(x);
        });
    
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id","addTaskButton");
        deleteButton.textContent = "-";
    
        deleteButton.addEventListener("click",()=>{

            x.remove = true;
            localStorage[x.taskCount] = JSON.stringify(x);
            document.querySelector("#task"+x.taskCount).remove();
            document.querySelector("#infoCon").remove()
            document.querySelector("#toDoCon").remove()
        });
        
        buttonsCon.append(editCon, deleteButton);
        settingsCon.append(dueDateCon, buttonsCon);
        headerCon.append(textCon, settingsCon);
    
        const toDoCon = document.createElement("div");
        toDoCon.setAttribute("id","toDoCon");
    
        infoCon.append(headerCon);
        list.append(infoCon, toDoCon);
        listCon.append(list);
    
        importToDosFromList(x);
    };

    const editInfo = (x) =>{
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
        titleInput.setAttribute("value", x.title);
        titleInput.setAttribute("name", "title");
        titleInputCon.append(titleInput);
    
        const descriptionInputCon = document.createElement("div");
        descriptionInputCon.setAttribute("id", "descriptionInputCon");
        const descriptionInput = document.createElement("textarea");
        descriptionInput.setAttribute("id", "descriptionInput");
        descriptionInput.textContent = x.description;
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
        dueDateInput.setAttribute("value", x.dueDate);
        dueDateInputCon.append(dueDateLabel,dueDateInput);
    
        const priorityInputCon = document.createElement("div");
        priorityInputCon.setAttribute("id","priorityInputCon");
        const priorityInput = document.createElement("input");
        priorityInput.setAttribute("id","priorityInput");
        priorityInput.setAttribute("type","range");
        priorityInput.setAttribute("min","1");
        priorityInput.setAttribute("value", x.priority);
        priorityInput.setAttribute("max","3");
        priorityInputCon.append(priorityInput);
    
        const addButtonCon = document.createElement("div");
        const addButton = document.createElement("button");
        addButton.setAttribute("id","addButton");
        addButton.setAttribute("type","button");
        addButton.textContent = "Edit list";
        addButtonCon.append(addButton);
    
        closeFormEvent(addButton).closeForm();
        addButton.addEventListener("click", ()=>{
            saveEdit(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
        });
    
        hubForm.append(titleInputCon, descriptionInputCon, dueDateInputCon,priorityInputCon, addButtonCon);
        hubFormCon.append(hubFormExit,hubForm);
        document.body.append(hubFormCon);
    
        const saveEdit = (a,b,c,d) =>{
            document.querySelector("#taskPriority"+x.taskCount).classList.remove("priority"+x.priority);
            
            x.title = a;
            x.description = b;
            x.dueDate = c;
            x.priority = d;
    
            document.querySelector("#taskTitle"+x.taskCount).textContent = x.title;
            document.querySelector("#title").textContent = x.title;
            document.querySelector("#description").textContent = x.description;
            document.querySelector("#dueDateCon").textContent = x.dueDate;
            document.querySelector("#taskPriority"+x.taskCount).classList.add("priority"+d);
            localStorage[x.taskCount] = JSON.stringify(x);
        };
    };

    removeList();
    createList(x);
};

const importToDosFromList = (x) =>{
    const addToDo = (x) =>{
        const toDoCon = document.querySelector("#toDoCon");
        const addToDoButton = document.createElement("button");
        addToDoButton.setAttribute("id", "addToDo");
        addToDoButton.classList.add("toDos");
        addToDoButton.textContent = "Add";
    
        addToDoButton.addEventListener("click",()=>{
            addToDoForm(x);
            removeToDoList();
            importToDosFromList(x);
        });
        toDoCon.append(addToDoButton);
    };

    const addToDoForm = (x) =>{
        var tempCounter = x.list.length;
        const hubFormCon = document.createElement("div");
        hubFormCon.setAttribute("id", "hubFormCon");
    
        const hubFormExit = document.createElement("div");
        hubFormExit.setAttribute("id","hubFormExit");
    
        const hubForm = document.createElement("form");
        hubForm.setAttribute("id", "hubForm");
    
        closeFormEvent(hubFormExit).closeForm();
    
        const descriptionInputCon = document.createElement("div");
        descriptionInputCon.setAttribute("id", "descriptionInputCon");
        const descriptionInput = document.createElement("textarea");
        descriptionInput.setAttribute("id", "descriptionInput");
        descriptionInput.setAttribute("placeholder", "Brief description...");
    
        descriptionInputCon.append(descriptionInput);
    
        const addButtonCon = document.createElement("div");
        const addButton = document.createElement("button");
        addButton.setAttribute("id","addButton");
        addButton.setAttribute("type","button");
        addButton.textContent = "Add new list";
        addButtonCon.append(addButton);
    
        closeFormEvent(addButton).closeForm();
        addButton.addEventListener("click",()=>{
            x.list[tempCounter] = listInfo(descriptionInput.value, false, false, tempCounter);
            removeToDoList();
            importToDosFromList(x);
            localStorage[x.taskCount] = JSON.stringify(x);
        });
        
    
        hubForm.append(descriptionInputCon, addButtonCon);
        hubFormCon.append(hubFormExit,hubForm);
        document.body.append(hubFormCon);
    };

    const removeToDoList = () =>{
        document.querySelector("#toDoCon").remove();
        const list = document.querySelector("#list");
        const toDoCon = document.createElement("div");
        toDoCon.setAttribute("id","toDoCon");
        list.append(toDoCon);
    };

    const createToDo = (listInfo) =>{
        if(listInfo.remove){
            return;
        };
        const checkedOff = (toDo, listInfo) => {
            if(listInfo.check == true){
                listInfo.check = false;
                localStorage[x.taskCount] = JSON.stringify(x);
                toDo.classList.remove("darken");
            } else{
                listInfo.check = true;
                localStorage[x.taskCount] = JSON.stringify(x);
                toDo.classList.add("darken");
            };
            isEverythingDone(x)
        };
    
        const darken = (toDo,listInfo) =>{
            if(listInfo.check == true){
                toDo.classList.add("darken");
            }
        };

        const editListForm = (listInfo) =>{
            const hubFormCon = document.createElement("div");
            hubFormCon.setAttribute("id", "hubFormCon");
        
            const hubFormExit = document.createElement("div");
            hubFormExit.setAttribute("id","hubFormExit");
        
            const hubForm = document.createElement("form");
            hubForm.setAttribute("id", "hubForm");
        
            closeFormEvent(hubFormExit).closeForm();
        
            const descriptionInputCon = document.createElement("div");
            descriptionInputCon.setAttribute("id", "descriptionInputCon");
            const descriptionInput = document.createElement("textarea");
            descriptionInput.setAttribute("id", "descriptionInput");
            descriptionInput.setAttribute("placeholder", "Brief description...");
            descriptionInput.textContent = listInfo.task;
        
            descriptionInputCon.append(descriptionInput);
        
            const addButtonCon = document.createElement("div");
            const addButton = document.createElement("button");
            addButton.setAttribute("id","addButton");
            addButton.setAttribute("type","button");
            addButton.textContent = "Edit list";
            addButtonCon.append(addButton);
        
            closeFormEvent(addButton).closeForm();

            const edit = (a) =>{
                x.list[listInfo.count].task = a;
                document.querySelector("#listText"+listInfo.count).textContent = a;
                localStorage[x.taskCount] = JSON.stringify(x);
            }

            addButton.addEventListener("click",()=>{
                edit(descriptionInput.value)
            });

            
        
            hubForm.append(descriptionInputCon, addButtonCon);
            hubFormCon.append(hubFormExit,hubForm);
            document.body.append(hubFormCon);
        }

        const removeList = (listInfo) =>{
            x.list[listInfo.count].remove = true;
            x.list[listInfo.count].check = true;
            document.querySelector("#list"+listInfo.count).remove();
            localStorage[x.taskCount] = JSON.stringify(x);
            isEverythingDone(x);
        }
    
        const toDoCon = document.querySelector("#toDoCon");
        const toDo = document.createElement("div");
        toDo.setAttribute("id","list"+listInfo.count);
        toDo.classList.add("toDos");

        const toDoText = document.createElement("p");
        toDoText.setAttribute("id","listText"+listInfo.count);
        toDoText.textContent = listInfo.task;

        const toDoEdit = document.createElement("button");
        toDoEdit.textContent = "E";
        toDoEdit.addEventListener("click",() =>{
            editListForm(listInfo);
        });
        
        const toDoRemove = document.createElement("button");
        toDoRemove.textContent = "R";
        toDoRemove.addEventListener("click",() =>{
            removeList(listInfo);
        });
        
        darken(toDo,listInfo);

        toDoText.addEventListener("click", ()=>{
           checkedOff(toDo,listInfo);
        });
        toDo.append(toDoText, toDoEdit, toDoRemove)
        toDoCon.append(toDo);
    };

    

    for (let i = 0; i<x.list.length; i++){
        createToDo(x.list[i]);
    };
    isEverythingDone(x)
    addToDo(x);

};

const isEverythingDone = (x) =>{
    var temp = 0;
    for(let i = 0; i < x.list.length; i++){
        if(x.list[i].check){
            temp++
        }
        if(temp == x.list.length){
            document.querySelector("#task"+ x.taskCount).classList.add("darken");
        } else if(temp != x.list.length){
            document.querySelector("#task"+ x.taskCount).classList.remove("darken");
        }
    }
};

export {showList, isEverythingDone}