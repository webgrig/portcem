function calc(marka, upakovka){
	var cena;
	switch(upakovka){
		case 45 : cena = (marka == 500)?165:155;
			break;
		case 50 : cena = (marka == 500)?175:165;
			break;
		case 1000 : cena = (marka == 500)?3500:3300;
			break;
		default: cena = false;
	}
	return cena;
};
function stoimost(marka, upakovka, amount){
	var cena;
	var ves;
	var ves;
	marka = parseInt(marka);
	upakovka = parseInt(upakovka);
	amount = parseInt(amount);
	ves = upakovka * amount;
	cena = calc(marka, upakovka);
	if(!cena){
		return false;
	}
	cstoimost = 0;
	if(ves < 5000)
		cstoimost = cena * amount;
	else if(ves >= 5000 && ves < 20000)
		cstoimost = (upakovka==1000)?(cena-66) * amount:(cena-3) * amount;
	else if(ves >= 20000 && ves < 50000)
		cstoimost = (upakovka==1000)?(cena-110) * amount:(cena-5) * amount;
	else if(ves >= 50000 && ves < 100000)
		cstoimost = (upakovka==1000)?(cena-154) * amount:(cena-7) * amount;
	else if(ves >= 100000)
		cstoimost = (upakovka==1000)?(cena-220) * amount:(cena-10) * amount;
	return cstoimost;
}