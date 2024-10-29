while (true) {
    let s = prompt("When ukraine gained independence?");
    let number = Number(s);

    if (number > 1991){
        alert("No, earlier");
    }
    else if (number < 1991){
        alert("No, later");
        continue;
    }
    else{
        alert("Correct");
        break;
    }
        }