
function ShowFilters(){
let elementinquestion = document.getElementById("filterOptions");
const elementCss = window.getComputedStyle(elementinquestion);

let elementCssStatus = elementCss.getPropertyValue("display");
console.log(elementCssStatus)

if(elementCssStatus == "none"){
    elementinquestion.style.display = "flex"
    console.log("the filter options are now visible")
}
if(elementCssStatus == "flex"){
    elementinquestion.style.display = "none"
    console.log("the filters are now hidden")
}




}
function ResetFilter(){
   
    accountSection = document.getElementById("ProductsAvailible")
    accountsAvailible = accountSection.getElementsByClassName("productContainerVisible")
   
    for(i = 0; i < accountsAvailible.length; i++){
       Accountsfound = accountsAvailible[i]
       accountsAvailible[i].style.display = 'flex'
       console.log("filter reset and all accounts displayed")
    }
    document.getElementById("noAccessFilter").checked = false;
    document.getElementById("limitedAccessFilter").checked = false;
    document.getElementById("easyAccessFilter").checked = false;
    document.getElementById("taxFreeFilter").checked = false;
    document.getElementById("notTaxFreeFilter").checked = false;

}

function SubmitFilter(){
filters = document.getElementById("filterCheckboxes")
checkboxes = filters.getElementsByTagName("input")

for(i = 0; i < checkboxes.length; i++){
    Checkboxesfound = checkboxes[i]
       console.log(Checkboxesfound)
       if(i == 0 && checkboxes[i].checked){
        console.log("no access selected")
        ShowNoAccess()
        break
       }
       if(i == 1 && checkboxes[i].checked){
        console.log("Limited access selected")
        ShowLimitedAccessGroup()
        break
       }
       if(i == 2 && checkboxes[i].checked){
        console.log("easy access selected")
        ShowEasyAccessGroup()
        break
       }
       if(i == 3 && checkboxes[i].checked){
        console.log("tax free selected")
        ShowTaxFreeGroup()
        break
       }
       if(i == 4 && checkboxes[i].checked){
        console.log("not tax free selected")
        ShowNotTaxFreeGroup()
        break
       }
}
}

function ShowNoAccess(){
 accountSection = document.getElementById("ProductsAvailible")
 accountsAvailible = accountSection.getElementsByClassName("productContainerVisible")

 for(i = 0; i < accountsAvailible.length; i++){
    Accountsfound = accountsAvailible[i]
    console.log(Accountsfound)
    accountsAvailible[i].style.display = 'none'
    if(i == 4){
        accountsAvailible[i].style.display = 'flex'
        continue
    }

}
}

function ShowLimitedAccessGroup() {
 accountSection = document.getElementById("ProductsAvailible")
 accountsAvailible = accountSection.getElementsByClassName("productContainerVisible")

 for(i = 0; i < accountsAvailible.length; i++){
    Accountsfound = accountsAvailible[i]
    console.log(Accountsfound)
    accountsAvailible[i].style.display = 'none'
    if(i == 2){
        accountsAvailible[i].style.display = 'flex'
        continue
    }
    if(i == 3){
        accountsAvailible[i].style.display = 'flex'
        continue
    }

}
}
function ShowEasyAccessGroup() {
   
    accountSection = document.getElementById("ProductsAvailible")
    accountsAvailible = accountSection.getElementsByClassName("productContainerVisible")
   
    for(i = 0; i < accountsAvailible.length; i++){
       Accountsfound = accountsAvailible[i]
       console.log(Accountsfound)
       accountsAvailible[i].style.display = 'none'
       if(i == 5){
           accountsAvailible[i].style.display = 'flex'
           continue
       }
   
   }

}
function ShowTaxFreeGroup() {

 accountSection = document.getElementById("ProductsAvailible")
 accountsAvailible = accountSection.getElementsByClassName("productContainerVisible")

 for(i = 0; i < accountsAvailible.length; i++){
    Accountsfound = accountsAvailible[i]
    console.log(Accountsfound)
    accountsAvailible[i].style.display = 'none'
    if(i == 2){
        accountsAvailible[i].style.display = 'flex'
        continue
    }

}
 
}
function ShowNotTaxFreeGroup() {
   
    accountSection = document.getElementById("ProductsAvailible")
    accountsAvailible = accountSection.getElementsByClassName("productContainerVisible")
   
    for(i = 0; i < accountsAvailible.length; i++){
       Accountsfound = accountsAvailible[i]
       console.log(Accountsfound)
       accountsAvailible[i].style.display = 'flex'
       if(i == 2){
           accountsAvailible[i].style.display = 'none'
           continue
       }
   
   }

}