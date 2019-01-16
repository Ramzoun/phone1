function verif(){
	cin 	= f1.T1.value;
	
	if(cin.length != 8){
		alert("cin doit etre compose de 8 car");
		return;
	}
	
	if(isNaN(cin)){
		alert("cin doit etre numerique");
		return;
	}
	
	if(cin.charAt(0)!= 1 && cin.charAt(0)!=0){
		alert("cin doit commencer par 0 ou 1");
		return;
	}
	
	
	
	nom 	= f1.T2.value;
	if(nom.length<3 || nom.length>30){
		alert("nom non valide");
		return;
	}
	
	
	prenom 	= f1.T3.value;
	if(prenom.length<3 || prenom.length>30){
		alert("nom non valide");
		return;
	}
	
	
	tel 	= f1.T4.value;
	if(tel.length != 8){
		alert("tel doit etre compose de 8 car");
		return;
	}
	
	if(isNaN(cin)){
		alert("tel doit etre numerique");
		return;
	}
	
	if(cin.charAt(0)== 0){
		alert("tel ne doit pas commencer par 0");
		return;
	}
	
	prix 	= f1.T5.value;
	if(isNaN(prix)){
		alert("prix doit etre numerique");
		return;
	}
	
	if(Number(prix) <= 0){
		alert("prix non valide");
		return;
	}
	
	i = f1.D1.selectedIndex;
	if(i<=0){
		alert("selectionner un article");
		return;
	}
	
	alert("good");
}