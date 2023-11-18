
        document.querySelector("#dialog h2 span").onclick = hide;
        document.querySelector("#backdrop").onclick = hide;
        document.querySelector("button").onclick = show;
        function show(){
            document.querySelector("#backdrop").style.display = "block ";
            document.querySelector("#dialog").style.display = "block ";
        }
        function hide(){
            document.querySelector("#backdrop").style.display = "none ";
            document.querySelector("#dialog").style.display = "none ";
        }