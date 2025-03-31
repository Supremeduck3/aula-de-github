let nota = 6;


switch(nota){
    case 10:
    case 9:
        console.log("Excelente");
        break
    case 8:
    case 7:
        console.log("Muito bom");
        break
    case 6:
    case 5:
        console.log("Ok");
        break
    case 4:
    case 3:
        console.log("Ruim");
        break
    case 2:
    case 1:
    case 0:
        console.log("Vai embora do curso!");
        break
    default:console.log("Esse caractere não é valido!");
}