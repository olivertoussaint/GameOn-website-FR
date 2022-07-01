// display error
function visibleError(elememt, errorMsg) {
    document.getElementById(elememt).setAttribute("data-error-visible", true);
    document.getElementById(elememt).setAttribute("data-error", errorMsg)
}

// remove error
function removeError(elememt) {
    document.getElementById(elememt).setAttribute("data-error-visible", false);
    document.getElementById(elememt).setAttribute("data-error", "");
  }
