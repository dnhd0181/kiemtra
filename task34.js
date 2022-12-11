const N = Number(prompt("Nhap gia tri N",1))
function NumberOneTriangle(){ 	

	for(i=0;i<N;i++) {
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}
		document.writeln("<br/>")
	}
}
		console.log(NumberOneTriangle())