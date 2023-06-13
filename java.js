<html>
    <head>
        <body>
            <h1>Java String Methods</h1>
            <p id="demo"></p>
            <p id="demo1"></p>
            <p id="demo2"></p>
            <p id="demo3"></p>
            <p id="demo4"></p>

            <p id="demo5"></p>
            <p id="demo6"></p>
            <p id="demo7"></p>
            <p id="demo8"></p>
            <p id="demo9"></p>

            <script>
                let fruits="apple","mango","orange","choclate";
                document.getElementbyid("demo").innerHTML=fruits.length;

                let java="java script","css","bootstrap";
                document.getElementbyid("demo1").innerHTML=java.toUpperCase;

                let css = "Cascading Style Sheet"
                document.getElementbyId("demo2").innerHTML = css.toLowerCase;

                let computer = "dell,Lenova,hp"
                document.getElementById("demo3").innerHTML = computer.slice();

                let accordion = "slide,Settings,"
                docutment.getElementById("demo4").innerHTML = accordion.replace("Settings,applet");

                let google1="gmail"
                let google2="apps"
                let google3=google1.Concat(" ",google2);
                document.getElementById("demo5").innerHTML=google3.Concat;

                let text1="   lets go   ";
                let text2=text1.trim();
                document.getElementById("demo6").innerHTML=text2.trim();

                var text="Lets do it";
                document.getElementById("demo7").innerHTML=charAt(0);

                let schools="a,b,c,d,e,f";
                My Array=schools.split(",");
                document.getElementById("demo8").innerHTML=My Array (0)
            </script>
        </body>
    </head>
</html>