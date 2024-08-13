function OpenFilters(){
    if (filterSelections.style.display !== "none"){
        filterSelections.style.display = "none"
    }
    else {
        filterSelections.style.display = "flex"
    }

}

filterSelections = document.getElementById("filterSelections").innerHTML
filterSelections = false