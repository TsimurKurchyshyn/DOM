let direction = 'Right';
let offset = 0;
$("#heading").offset({left: offset, top: offset});

let moveHeading = function (){
    if (direction === 'Right'){
        $("#heading").offset({left: offset})
        offset++;
        if (offset > 200) {
            offset = 0;
            direction = 'Down';
        }
    }else if (direction === 'Down'){
        $("#heading").offset({top: offset})
        offset++;
        if (offset > 200) {
            offset = 200;
            direction = 'Left';
        }
    }else if (direction === 'Left'){
        $("#heading").offset({left: offset})
        offset--;
        if (offset < 0) {
            offset = 200;
            direction = 'Top';
        }
    }else if (direction === 'Top') {
        $("#heading").offset({top: offset})
        offset--;
        if (offset < 0){
            offset = 0;
            direction = 'Right';
        }
    }
};
setInterval(moveHeading, 30)