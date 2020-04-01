

let percent = 66;

switch(true){
    case (percent > 100 || percent < 0):
        text = "Error: Please insert a number between 0 to 100";
        console.log(text);
        break;
    case (percent>=90):
        text = "A";
        console.log(text);
        break;
    case (percent>=80):
        text = "B";
        console.log(text);
        break;
    case (percent>=70):
        text = "C";
        console.log(text);
        break;
    case (percent>=60):
        text = "D";
        console.log(text);
        break;
    case (percent>=50):
        text = "E";
        console.log(text);
        break;
    case (percent < 50):
        text = "F";
        console.log(text);
        break;
}