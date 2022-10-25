import { } from "./index.js";

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

    const descriptionCon = document.createElement("div");
    descriptionCon.setAttribute("id", "descriptionCon");
    const description = document.createElement("textarea");
    description.setAttribute("id", "description");
    description.setAttribute("placeholder", "Brief description...");
    descriptionCon.append(description);

    const dueDateCon = document.createElement("div");
    dueDateCon.setAttribute("id","dueDateCon");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("id","dueDateLabel");
    dueDateLabel.setAttribute("for","dueDate");
    dueDateLabel.textContent = "Due: ";
    const dueDate = document.createElement("input");
    dueDate.setAttribute("id","dueDate");
    dueDate.setAttribute("type","date");
    dueDate.setAttribute("name","dueDate");
    dueDateCon.append(dueDateLabel,dueDate);

    const priorityCon = document.createElement("div");
    priorityCon.setAttribute("id","priorityCon");
    const priority = document.createElement("input");
    priority.setAttribute("id","priority");
    priority.setAttribute("type","range");
    priority.setAttribute("min","1");
    priority.setAttribute("value","3");
    priority.setAttribute("max","5");
    priorityCon.append(priority);

    const addButtonCon = document.createElement("div");
    const addButton = document.createElement("button");
    addButton.setAttribute("id","addButton");
    addButton.setAttribute("type","button");
    addButton.textContent = "Add new list";
    addButtonCon.append(addButton);

    closeFormEvent(addButton).saveData();

    hubForm.append(titleInputCon, descriptionCon, dueDateCon,priorityCon, addButtonCon);
    hubFormCon.append(hubFormExit,hubForm);
    x.append(hubFormCon);
}

const closeFormEvent = (area) => {
    const closeForm = () => 
        area.addEventListener("click",()=>{
            document.querySelector("#hubFormCon").remove()
            document.querySelector("#contentCon").removeAttribute("class", "blur");
        });
    
    const saveData = () =>{
        area.addEventListener("click",() =>{
            console.log("data saved");
        });
        closeForm(area);
    };

    
    return { closeForm, saveData}
}

const saveData = (area) =>{
    closeFormEvent(area);
};



export {newCategoryForm};