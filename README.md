# Calculadora-WEB
Calculadora em HTML, CSS e JavaScript.

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calculadora</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Calculadora</h1>
        <p>by. DuduBertolDev</p>
    </header>
    <main>
        <!--VIEWER-->
        <section>
            <br>
            <textarea name="viewer" id="viewer"></textarea>
        </section>

        <!--BUTTONS-->
        <section>
            <button onclick="AddNum(1)"> 1 </button><button onclick="AddNum(2)"> 2 </button><button onclick="AddNum(3)"> 3 </button>
            <br>
            <button onclick="AddNum(4)"> 4 </button><button onclick="AddNum(5)"> 5 </button><button onclick="AddNum(6)"> 6 </button>
            <br>
            <button onclick="AddNum(7)"> 7 </button><button onclick="AddNum(8)"> 8 </button><button onclick="AddNum(9)"> 9 </button>
            <br>
            <button onclick="AddNum(0)"> 0 </button>
            <br><br>
            <button onclick="SetOperation('sum')"> + </button>
            <button onclick="SetOperation('sub')"> - </button>
            <button onclick="SetOperation('mult')"> * </button>
            <button onclick="SetOperation('div')"> / </button>
            <br><br>
            <button onclick="Cleaner()"> C </button>
            <button onclick="Result()"> = </button>

            <p id="log"></p>
            <p id="tracker"></p>
        </section>

    </main>
    <footer></footer>
    <script src="script.js"></script>
</body>
</html>