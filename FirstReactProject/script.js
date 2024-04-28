function Greeting(){
    return React.createElement("hi",{},"hello guys");

}
ReactDom.render(Greeting(),document.getElementById("root"));