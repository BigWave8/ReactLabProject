import Notebook1 from "../../images/notebook1.png";
import Notebook2 from "../../images/notebook2.png";
import Notebook3 from "../../images/notebook3.png";

export const setTextAndImages = (initialData) => {
    initialData.forEach((item) => {
        if (parseInt(item.id)%9 == 0){
            item.image = Notebook1;
            item.title = "Standard notebook";
        }else if(parseInt(item.id)%9 == 1){
            item.image = Notebook2;
            item.title = "Dear cover";
        }else if(parseInt(item.id)%9 == 2){
            item.image = Notebook2;
            item.title = "Dear cover";
        }else if(parseInt(item.id)%9 == 3){
            item.image = Notebook1;
            item.title = "Cheap notebook";
        }else if(parseInt(item.id)%9 == 4){
            item.image = Notebook3;
            item.title = "Apple notebook";
        }else if(parseInt(item.id)%9 == 5){
            item.image = Notebook3;
            item.title = "Thick cover";
        }else if(parseInt(item.id)%9 == 6){
            item.image = Notebook1;
            item.title = "Thick cover";
        }else if(parseInt(item.id)%9 == 7){
            item.image = Notebook3;
            item.title = "Cheap notebook";
        }else {
            item.image = Notebook2;
            item.title = "Apple notebook";
        }
    });
    return initialData;
};