var names=new Array();
names[0]="Yaakov";
names[1]="Tiebet";
names[2]="Nelson";
names[3]="Basit";
names[4]="Paul";
names[5]="Frank";
names[6]="Davido";
names[7]="Wizkid";
names[8]="Moh";
names[9]="Ishaq";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}