const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	


    var inputSearch = document.forms["myForm"]["inputSearch"];

    if(inputSearch.value == "") {
		inputSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "Introduce tu búsqueda";
		acumErrores ++;
    }
    else if(!validar_search(inputSearch.value)){
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "¿Qué estamos buscando?";
    acumErrores ++;
    }
	
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_search(search) {
	var regex = /^((?=.*[a-zA-Z0-9\.: @]).{3,})+$/;
	return regex.test(search) ? true : false;
}
