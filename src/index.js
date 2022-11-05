import "./style.css";
import {newCategoryForm, closeFormEvent} from "./hub.js";

const createInterface = () => {
    const contentCon = document.createElement("div");
    contentCon.setAttribute("id", "contentCon");

    const createHub = (contentCon) =>{
        const hubCon = document.createElement("div");
        hubCon.setAttribute("id", "hubCon");
        const hub = document.createElement("div");
        hub.setAttribute("id", "hub");
    
        const createCategories = (hub)=>{
            const categoriesCon = document.createElement("div");
            categoriesCon.setAttribute("id","categoriesCon");
        
            const categories = document.createElement("div");
            categories.setAttribute("id", "categories");
        
            categoriesCon.append(categories);
            hub.append(categoriesCon);
        };
    
        const createCategoryButton = (hub) =>{
            const categoryButtonCon = document.createElement("div");
            categoryButtonCon.setAttribute("id","categoryButtonCon");
            const categoryButton = document.createElement("button");
            categoryButton.setAttribute("id","categoryButton");
            categoryButton.setAttribute("type","button");
            categoryButton.textContent = "Add New List";
        
            const openCategoryForm = (button) =>{
                return button.addEventListener("click", () =>{
                    newCategoryForm(document.body);
                    document.querySelector("#contentCon").setAttribute("class", "blur");
                });
            };
        
            openCategoryForm(categoryButton);
        
            categoryButtonCon.append(categoryButton);
            hub.append(categoryButtonCon);
        }
    
        createCategories(hub);
        createCategoryButton(hub);
    
        hubCon.append(hub);
        contentCon.append(hubCon);
    }
    
    const createList = (contentCon) =>{
        const listCon = document.createElement("div");
        listCon.setAttribute("id", "listCon");
        const list = document.createElement("div");
        list.setAttribute("id", "list");
    
        listCon.append(list);
        contentCon.append(listCon);
    };
     
    createHub(contentCon);
    createList(contentCon);

    document.body.append(contentCon);
}

createInterface();
closeFormEvent().showData();

export {createInterface}