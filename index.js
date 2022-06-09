function full(){
	op1 = parseInt(document.querySelector('#operando1').value);
	op2 = parseInt(document.querySelector('#operando2').value);
	op = document.querySelector('#operacao').value;
	resultado = document.querySelector('.resultado');
	
	if(op == 1){
		res = op1 + op2;
		resultado.innerHTML = "É "+res+".";
	}else if(op == 2){
		res = op1 - op2;
		resultado.innerHTML = "É "+res+".";
	}else if(op == 3){
		res = op1 * op2;
		resultado.innerHTML = "É "+res+".";
	}else{
		res = op1/op2;
		resultado.innerHTML = "É "+res+".";
	}
	console.log(res);
}
