import "./style.css";
import {newCategoryForm} from "./hub.js";

const createInterface = () => {
    const contentCon = document.createElement("div");
    contentCon.setAttribute("id", "contentCon");

    createHub(contentCon);
    createList(contentCon);

    document.body.append(contentCon);
}

const createHub = (contentCon) =>{
    const hubCon = document.createElement("div");
    hubCon.setAttribute("id", "hubCon");
    const hub = document.createElement("div");
    hub.setAttribute("id", "hub");

    createCategories(hub);
    createCategoryButton(hub);
    
    hubCon.append(hub);
    contentCon.append(hubCon);
}

const createCategories = (hub)=>{
    const categoriesCon = document.createElement("div");
    categoriesCon.setAttribute("class","categoriesCon");

    hub.append(categoriesCon);
}

const createCategoryButton = (hub) =>{
    const categoryButtonCon = document.createElement("div");
    categoryButtonCon.setAttribute("id","categoryButtonCon");
    const categoryButton = document.createElement("button");
    categoryButton.setAttribute("id","categoryButton");
    categoryButton.setAttribute("type","button");
    categoryButton.textContent = "Add New List";

    openCategoryForm(categoryButton);
    
    categoryButtonCon.append(categoryButton);
    hub.append(categoryButtonCon);
}

const openCategoryForm = (button) =>{
    return button.addEventListener("click", () =>{
        newCategoryForm(document.body);
        document.querySelector("#contentCon").setAttribute("class", "blur");
    })
}

const createList = (contentCon) =>{
    const listCon = document.createElement("div");
    listCon.setAttribute("id", "listCon");
    const list = document.createElement("div");
    list.setAttribute("id", "list");

    listCon.append(list);
    contentCon.append(listCon);
}

createInterface();