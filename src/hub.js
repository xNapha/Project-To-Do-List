import { } from "./index.js";

const newCategoryForm = (x) =>{
    const hubFormCon = document.createElement("div");
    hubFormCon.setAttribute("id", "hubFormCon");
    const hubForm = document.createElement("form");
    hubForm.setAttribute("id", "hubForm");

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

    const addButtonCon = document.createElement("div");
    const addButton = document.createElement("button");
    addButton.setAttribute("id","addButton");
    addButton.setAttribute("type","button");
    addButton.textContent = "Add new list";



    addButtonCon.append(addButton);

    hubForm.append(titleInputCon, descriptionCon, addButtonCon);
    hubFormCon.append(hubForm);
    x.append(hubFormCon);
}

const categoryFormEvent = (area) =>{



}


export {newCategoryForm};