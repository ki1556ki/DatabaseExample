var auto_check(){
	var ch = document.getElementsByClassName("no_border");

	for(var i = 0; i < ch.length; i++){
		if(ch[i].value === "1"){
        	ch[i].checked = true;
		}
	}	
}

auto_check();