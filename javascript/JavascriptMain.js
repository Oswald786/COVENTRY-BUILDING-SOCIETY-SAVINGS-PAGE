
function ShowFilters(){
filterOptions = document.getElementById("filterOptions");
filterOptions.classList.replace('HiddenContentStatus','visibleContentStatus')
console.log("class Replaced")
}
function ResetFilter(){
    young_saver = document.getElementById("young_saver");
    first_home_saver = document.getElementById("first_home_saver");
    four_access_isa = document.getElementById("four_access_isa");
    four_access_saver = document.getElementById("four_access_saver");
    fixed_bond = document.getElementById("fixed_bond");
    easy_access_saver = document.getElementById("easy_access_saver");
   
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

noaccess = document.getElementById("no-access");
limitedaccess = document.getElementById("limited-access");
easyaccess = document.getElementById("easy-access");
taxfree = document.getElementById("tax-free");
nottaxfree = document.getElementById("not-tax-free");

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
 young_saver = document.getElementById("young_saver");
 first_home_saver = document.getElementById("first_home_saver");
 four_access_isa = document.getElementById("four_access_isa");
 four_access_saver = document.getElementById("four_access_saver");
 fixed_bond = document.getElementById("fixed_bond");
 easy_access_saver = document.getElementById("easy_access_saver");

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
 young_saver = document.getElementById("young_saver");
 first_home_saver = document.getElementById("first_home_saver");
 four_access_isa = document.getElementById("four_access_isa");
 four_access_saver = document.getElementById("four_access_saver");
 fixed_bond = document.getElementById("fixed_bond");
 easy_access_saver = document.getElementById("easy_access_saver");

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
    young_saver = document.getElementById("young_saver");
    first_home_saver = document.getElementById("first_home_saver");
    four_access_isa = document.getElementById("four_access_isa");
    four_access_saver = document.getElementById("four_access_saver");
    fixed_bond = document.getElementById("fixed_bond");
    easy_access_saver = document.getElementById("easy_access_saver");
   
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
    young_saver = document.getElementById("young_saver");
 first_home_saver = document.getElementById("first_home_saver");
 four_access_isa = document.getElementById("four_access_isa");
 four_access_saver = document.getElementById("four_access_saver");
 fixed_bond = document.getElementById("fixed_bond");
 easy_access_saver = document.getElementById("easy_access_saver");

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
    young_saver = document.getElementById("young_saver");
    first_home_saver = document.getElementById("first_home_saver");
    four_access_isa = document.getElementById("four_access_isa");
    four_access_saver = document.getElementById("four_access_saver");
    fixed_bond = document.getElementById("fixed_bond");
    easy_access_saver = document.getElementById("easy_access_saver");
   
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