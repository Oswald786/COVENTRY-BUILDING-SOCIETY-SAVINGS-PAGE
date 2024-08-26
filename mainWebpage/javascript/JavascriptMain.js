function openFilters(){
    var x = document.getElementById("hiddenElement")
    if (x.style.display !== "none"){
        x.style.display = "none"
    }
    else {
        x.style.display = "flex"
    }

}

var JuniorIsa = document.getElementById("Junior isa")
var regularSaver = document.getElementById("First Home Saver (2)")
var FourAccessIsa = document.getElementById("FourAccessIsa")
var FourAccessSaver = document.getElementById("Four Access Saver (2)")
var FixedBond = document.getElementById("Fixed Bond (344) 31.08.2026")
var EasyAccessSaver = document.getElementById("Easy Access Saver (7)")

AccountKinds = [JuniorIsa,regularSaver,FourAccessIsa,FourAccessSaver,FixedBond]

VariableAccounts = [JuniorIsa,regularSaver,FourAccessIsa,FourAccessSaver]


function ShowVariable(){
    showing = false
    for (var i =0; i < AccountKinds.length ; i++){
        if (VariableAccounts.includes(AccountKinds[i])){
            console.log("accounts found")
            
        }
        else{
            AccountKinds[i].style.display = "none"
        }
    

}}
