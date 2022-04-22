 //calcular média 
 var check = window.parseInt(window.prompt('de 2 a 10, quantas notas deseja calcular a média?'));
 var calcular = null;
 
 switch (check){
     case 2:
     var n1,n2;
     n1 = Number.parseFloat(window.prompt('Insira a primeira nota..'));
     n2 = Number.parseFloat(window.prompt('Insira a segunda nota..'));
     if(n1 <= 10 && n2 <= 10){
         calcular = (n1 + n2) / 2;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira a nota de 0 a 10.');
     }
     break;
     case 3: 
     var n3;
     n1 = Number.parseFloat(window.prompt('Insira a primeira nota..'));
     n2 = Number.parseFloat(window.prompt('Insira a segunda nota..'));
     n3 = Number.parseFloat(window.prompt('Insira a terceira nota..'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10){
         calcular = (n1 + n2 + n3) / 3;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida: ${n3}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira a nota de 0 a 10.');
     }
     break;
     case 4:
     var n4;
     n1 = Number(window.prompt('Insira a primeira nota..'));
     n2 = Number(window.prompt('Insira a segunda nota...'));
     n3 = Number(window.prompt('insira a terceira nota..'));
     n4 = Number(window.prompt('insira a quarta nota..'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10){
         calcular = (n1 + n2 + n3 + n4) / 4;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida : ${n3}\n4° Nota inserida : ${n4}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira a nota de 0 a 10.');
     }
     break;
     case 5:
     var n5;
     n1 = Number(window.prompt('Insira a primeira nota..'));
     n2 = Number(window.prompt('Insira a segunda nota..'));
     n3 = Number(window.prompt('Insira a terceira nota..'));
     n4 = Number(window.prompt('Insira a quarta nota..'));
     n5 = Number(window.prompt('Insira a quinta nota..'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10 && n5 <= 10){
         calcular = (n1 + n2 + n3 + n4 + n5) / 5;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida : ${n3}\n4° Nota inserida : ${n4}\n5° Nota inserida : ${n5}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira a nota de 0 a 10');
     }
     break;
     case 6:
     var n6;
     n1 = Number(window.prompt('Insira a primeira nota..'));
     n2 = Number(window.prompt('Insira a segunda nota..'));
     n3 = Number(window.prompt('Insira a terceira nota..'));
     n4 = Number(window.prompt('Insira a quarta nota..'));
     n5 = Number(window.prompt('Insira a quinta nota..'));
     n6 = Number(window.prompt('Insira a sexta nota..'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10 && n5 <= 10 && n6 <= 10){
         calcular = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida : ${n3}\n4° Nota inserida : ${n4}\n5° Nota inserida : ${n5}\n6° Nota inserida: ${n6}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira a nota de 0 a 10');
     }
     break;
     case 7:
     var n7;
     n1 = Number(window.prompt('Insira a primeira nota..'));
     n2 = Number(window.prompt('Insira a segunda nota..'));
     n3 = Number(window.prompt('Insira a terceira nota..'));
     n4 = Number(window.prompt('Insira a quarta nota..'));
     n5 = Number(window.prompt('Insira a quinta nota..'));
     n6 = Number(window.prompt('Insria a sexta nota..'));
     n7 = Number(window.prompt('Insira a sete nota..'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10 && n5 <= 10 && n6 <= 10 && n7 <= 10){
         calcular = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida : ${n3}\n4° Nota inserida : ${n4}\n5° Nota inserida : ${n5}\n6° Nota inserida : ${n6}\n7° Nota inserida : ${n7}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira a nota de 0 a 10');
     }
     break;
     case 8:
     var n8;
     n1 = Number(window.prompt('Insira a primeira nota..'));
     n2 = Number(window.prompt('Insira a segunda nota..'));
     n3 = Number(window.prompt('Insira a terceira nota..'));
     n4 = Number(window.prompt('Insira a quarta nota..'));
     n5 = Number(window.prompt('Insira a quinta nota..'));
     n6 = Number(window.prompt('Insira a sexta nota..'));
     n7 = Number(window.prompt('Insira a setima nota..'));
     n8 = Number(window.prompt('Insria a oitava nota'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10 && n5 <= 10 && n6 <= 10 && n7 <= 10 && n8 <= 10){
         calcular = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8) / 8;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida : ${n3}\n4° Nota inserida : ${n4}\n5° Nota inserida : ${n5}\n6° Nota inserida : ${n6}\n7° Nota inserida : ${n7}\n8° Nota inserida : ${n8}\nMédia : ${calcular.toFixed(1)}`)                
     }else{
         window.alert('Notas invalidas, insira as notas de 0 a 10....');
     }
     break;
     case 9: 
     var n9;
     n1 = Number(window.prompt('Insira a primeira nota'));
     n2 = Number(window.prompt('Insira a segunda nota'));
     n3 = Number(window.prompt('Insira a terceira nota'));
     n4 = Number(window.prompt('Insira a quarta nota..'));
     n5 = Number(window.prompt('Insira a quinta nota..'));
     n6 = Number(window.prompt('Insira a sexta nota'));
     n7 = Number(window.prompt('Insira a setima nota.'));
     n8 = Number(window.prompt('Insria a oitava nota...'));
     n9 = Number(window.prompt('Insira a nona nota..'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10 && n5 <= 10 && n6 <= 10 && n7 <= 10 & n8 <= 10 && n9 <= 10){
         calcular = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9) / 9;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida : ${n3}\n4° Nota inserida : ${n4}\n5° Nota inserida : ${n5}\n6° Nota inserida : ${n6}\n7° Nota inserida : ${n7}\n8° Nota inserida : ${n8}\n9° Nota inserida : ${n9}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira as notas de 0 a 10....');
     }
     break;
     case 10:
     var n10;
     n1 = Number(window.prompt('Insira a primeira nota'));
     n2 = Number(window.prompt('Insira a segunda nota..'));
     n3 = Number(window.prompt('Insira a terceira nota'));
     n4 = Number(window.prompt('Insira a quarta nota..'));
     n5 = Number(window.prompt('Insira a quinta nota.'));
     n6 = Number(window.prompt('Insria a sexta nota..'));
     n7 = Number(window.prompt('Insira a setima nota...'));
     n8 = Number(window.prompt('Insira a oitava nota'));
     n9 = Number(window.prompt('Insira a nona nota..'));
     n10 = Number(window.prompt('Insira a decima nota...'));
     if(n1 <= 10 && n2 <= 10 && n3 <= 10 && n4 <= 10 && n5 <= 10 && n6 <=10 && n7 <= 10 && n8 <= 10 && n9 <= 10 && n10 <= 10){
         calcular = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;
         window.alert(`1° Nota inserida : ${n1}\n2° Nota inserida : ${n2}\n3° Nota inserida : ${n3}\n4° Nota inserida : ${n4}\n5° Nota inserida : ${n5}\n6° Nota inserida : ${n6}\n7° Nota inserida : ${n7}\n8° Nota inserida : ${n8}\n9° Nota inserida : ${n9}\n10° Nota inserida : ${n10}\nMédia : ${calcular.toFixed(1)}`);
     }else{
         window.alert('Notas invalidas, insira as notas de 0 a 10..........');
     }
 }