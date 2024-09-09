/*you need to keep an eye on this fucntion makes sure it works when you finish up
function ShowFilters(){
filterOptions = document.getElementById("filterOptions");
filterOptions.classList.replace('HiddenContentStatus','visibleContentStatus')
console.log("class Replaced")
}*/


/*you need to work on this as it needs to be checked to make sure that it is correct and needs to be finsihed 
function SubmitFilter(){
    noAccessFilter = document.getElementById("noAccessFilter");
    limitedAccessFilter = document.getElementById("limitedAccessFilter");
    easyAccessFilter = document.getElementById("easyAccessFilter");
    taxFreeFilter = document.getElementById("taxFreeFilter");
    notTaxFreeFilter = document.getElementById("notTaxFreeFilter");

    if (){
        ShowNoAccess
    }
    else if(limitedAccessFilter == true){
        ShowLimitedAccessGroup
    }
    else if(easyAccessFilter == true){
        ShowEasyAccessGroup
    }
    else if (taxFreeFilter == true){
        ShowTaxFreeGroup
    }
    else if(notTaxFreeFilter == true){
        ShowNotTaxFreeGroup
    }
        

}

function ResetFilters(){

}
*/




function ShowNoAccess(){
noaccess = document.getElementById("no-access");
limitedaccess = document.getElementById("limited-access");
easyaccess = document.getElementById("easy-access");
taxfree = document.getElementById("tax-free");
nottaxfree = document.getElementById("not-tax-free");

young_saver = document.getElementById("young_saver");
first_home_saver = document.getElementById("first_home_saver");
four_access_isa = document.getElementById("four_access_isa");
four_access_saver = document.getElementById("four_access_saver");
fixed_bond = document.getElementById("fixed_bond");
easy_access_saver = document.getElementById("easy_access_saver");

// Using add() and remove() instead of replace()
young_saver.classList.remove('productContainerVisible');
young_saver.classList.add('productContainerInvisible');

first_home_saver.classList.remove('productContainerVisible');
first_home_saver.classList.add('productContainerInvisible');

four_access_isa.classList.remove('productContainerVisible');
four_access_isa.classList.add('productContainerInvisible');

four_access_saver.classList.remove('productContainerVisible');
four_access_saver.classList.add('productContainerInvisible');

easy_access_saver.classList.remove('productContainerVisible');
easy_access_saver.classList.add('productContainerInvisible');
}

function ShowLimitedAccessGroup() {
    // Elements in the 'limited access' group
    four_access_isa = document.getElementById("four_access_isa");
    four_access_saver = document.getElementById("four_access_saver");

    // Elements not in the 'limited access' group
    young_saver = document.getElementById("young_saver");
    first_home_saver = document.getElementById("first_home_saver");
    easy_access_saver = document.getElementById("easy_access_saver");
    fixed_bond = document.getElementById("fixed_bond");

    // Make 'limited access' elements visible and log the action
    four_access_isa.classList.remove('productContainerInvisible');
    four_access_isa.classList.add('productContainerVisible');
    console.log("Made 'four_access_isa' visible");

    four_access_saver.classList.remove('productContainerInvisible');
    four_access_saver.classList.add('productContainerVisible');
    console.log("Made 'four_access_saver' visible");

    // Hide non-'limited access' elements and log the action
    young_saver.classList.remove('productContainerVisible');
    young_saver.classList.add('productContainerInvisible');
    console.log("Made 'young_saver' invisible");

    first_home_saver.classList.remove('productContainerVisible');
    first_home_saver.classList.add('productContainerInvisible');
    console.log("Made 'first_home_saver' invisible");

    easy_access_saver.classList.remove('productContainerVisible');
    easy_access_saver.classList.add('productContainerInvisible');
    console.log("Made 'easy_access_saver' invisible");

    fixed_bond.classList.remove('productContainerVisible');
    fixed_bond.classList.add('productContainerInvisible');
    console.log("Made 'fixed_bond' invisible");
}
function ShowEasyAccessGroup() {
    // Element in the 'easy access' group
    easy_access_saver = document.getElementById("easy_access_saver");

    // Elements not in the 'easy access' group
    young_saver = document.getElementById("young_saver");
    first_home_saver = document.getElementById("first_home_saver");
    four_access_isa = document.getElementById("four_access_isa");
    four_access_saver = document.getElementById("four_access_saver");
    fixed_bond = document.getElementById("fixed_bond");

    // Make 'easy access' element visible and log the action
    easy_access_saver.classList.remove('productContainerInvisible');
    easy_access_saver.classList.add('productContainerVisible');
    console.log("Made 'easy_access_saver' visible");

    // Hide non-'easy access' elements and log the action
    young_saver.classList.remove('productContainerVisible');
    young_saver.classList.add('productContainerInvisible');
    console.log("Made 'young_saver' invisible");

    first_home_saver.classList.remove('productContainerVisible');
    first_home_saver.classList.add('productContainerInvisible');
    console.log("Made 'first_home_saver' invisible");

    four_access_isa.classList.remove('productContainerVisible');
    four_access_isa.classList.add('productContainerInvisible');
    console.log("Made 'four_access_isa' invisible");

    four_access_saver.classList.remove('productContainerVisible');
    four_access_saver.classList.add('productContainerInvisible');
    console.log("Made 'four_access_saver' invisible");

    fixed_bond.classList.remove('productContainerVisible');
    fixed_bond.classList.add('productContainerInvisible');
    console.log("Made 'fixed_bond' invisible");
}
function ShowTaxFreeGroup() {
    // Element in the 'tax-free' group
    four_access_isa = document.getElementById("four_access_isa");

    // Elements not in the 'tax-free' group
    young_saver = document.getElementById("young_saver");
    first_home_saver = document.getElementById("first_home_saver");
    easy_access_saver = document.getElementById("easy_access_saver");
    four_access_saver = document.getElementById("four_access_saver");
    fixed_bond = document.getElementById("fixed_bond");

    // Make 'tax-free' element visible and log the action
    four_access_isa.classList.remove('productContainerInvisible');
    four_access_isa.classList.add('productContainerVisible');
    console.log("Made 'four_access_isa' visible");

    // Hide non-'tax-free' elements and log the action
    young_saver.classList.remove('productContainerVisible');
    young_saver.classList.add('productContainerInvisible');
    console.log("Made 'young_saver' invisible");

    first_home_saver.classList.remove('productContainerVisible');
    first_home_saver.classList.add('productContainerInvisible');
    console.log("Made 'first_home_saver' invisible");

    easy_access_saver.classList.remove('productContainerVisible');
    easy_access_saver.classList.add('productContainerInvisible');
    console.log("Made 'easy_access_saver' invisible");

    four_access_saver.classList.remove('productContainerVisible');
    four_access_saver.classList.add('productContainerInvisible');
    console.log("Made 'four_access_saver' invisible");

    fixed_bond.classList.remove('productContainerVisible');
    fixed_bond.classList.add('productContainerInvisible');
    console.log("Made 'fixed_bond' invisible");
}
function ShowNotTaxFreeGroup() {
    // Elements in the 'not tax-free' group
    young_saver = document.getElementById("young_saver");
    first_home_saver = document.getElementById("first_home_saver");
    easy_access_saver = document.getElementById("easy_access_saver");
    four_access_saver = document.getElementById("four_access_saver");
    fixed_bond = document.getElementById("fixed_bond");

    // Element that is in the 'tax-free' group
    four_access_isa = document.getElementById("four_access_isa");

    // Make 'not tax-free' elements visible and log the action
    young_saver.classList.remove('productContainerInvisible');
    young_saver.classList.add('productContainerVisible');
    console.log("Made 'young_saver' visible");

    first_home_saver.classList.remove('productContainerInvisible');
    first_home_saver.classList.add('productContainerVisible');
    console.log("Made 'first_home_saver' visible");

    easy_access_saver.classList.remove('productContainerInvisible');
    easy_access_saver.classList.add('productContainerVisible');
    console.log("Made 'easy_access_saver' visible");

    four_access_saver.classList.remove('productContainerInvisible');
    four_access_saver.classList.add('productContainerVisible');
    console.log("Made 'four_access_saver' visible");

    fixed_bond.classList.remove('productContainerInvisible');
    fixed_bond.classList.add('productContainerVisible');
    console.log("Made 'fixed_bond' visible");

    // Hide 'tax-free' element and log the action
    four_access_isa.classList.remove('productContainerVisible');
    four_access_isa.classList.add('productContainerInvisible');
    console.log("Made 'four_access_isa' invisible");
}



/*USE AS A REFERENCE POINT ACROSS ALL FUCNTIONS FOR VARIABLES
noaccess = document.getElementById("no-access");
limitedaccess = document.getElementById("limited-access");
easyaccess = document.getElementById("easy-access");
taxfree = document.getElementById("tax-free");
nottaxfree = document.getElementById("not-tax-free");

young_saver = document.getElementById("young_saver");
first_home_saver =document.getElementById("first_home_saver");
four_access_isa = document.getElementById("four_access_isa");
four_access_saver = document.getElementById("four_access_saver");
fixed_bond = document.getElementById("fixed_bond");
easy_access_saver = document.getElementById("easy_access_saver");*/
/*young_saver.classList.replace('HiddenContentStatus','visibleContentStatus')
    first_home_saver.classList.replace('HiddenContentStatus','visibleContentStatus')
    four_access_isa.classList.replace('HiddenContentStatus','visibleContentStatus')
    four_access_saver.classList.replace('HiddenContentStatus','visibleContentStatus')
    fixed_bond.classList.replace('HiddenContentStatus','visibleContentStatus')
    easy_access_saver.classList.replace('HiddenContentStatus','visibleContentStatus')*/


    /*CLASSESS TO SWAP ARE AS FOLLOWS COPY AND PASTE productContainerVisible AND productContainerInvisible*/