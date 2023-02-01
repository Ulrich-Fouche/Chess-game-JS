const allSquares = document.getElementsByClassName("square");
// console.log(allSquares);

const clickedElement = []

for (const x of allSquares){
    x.addEventListener("click", function () {
        // push element in empty Array

        console.log(clickedElement);

        const idOfElement = x.getAttribute("id");
        const innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;
        if(clickedElement.length > 0){
            clickedElement[0].removeAttribute("style");
            clickedElement.length = 0;
        }
        //console.log(x);
        if(
            innerHtmlOfElement.includes('black') || 
            innerHtmlOfElement.includes('white')
        ) {
            document.getElementById(idOfElement).style.backgroundColor = "#CDDA61"; // "#CDDA61" = GREEN COLOR
            clickedElement.push(x);
        }
    }); 
}
