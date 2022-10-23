import "./style.css";
import {} from "./hub.js";

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

    
    categoryButtonCon.append(categoryButton);
    hub.append(categoryButtonCon);
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