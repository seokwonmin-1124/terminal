const type = document.querySelector('#type');
const effect = new TypeIt(type, {
    strings: "Type the '--help' command to see the commands on this site.",
    speed: 50,
});

type.addEventListener('focus', () => {
    effect.reset();
});

type.addEventListener('blur', (e) => {
    if (!e.target.value.length) {
        effect.go();
    }
});

effect.go();

function terminal() {
    const value = document.getElementById("type").value;
    const user = "lesh.monster@10.0.0.1:~$ &nbsp;";
    const history = "<p>lesh.monster@10.0.0.1:~$ &nbsp;" + value + "</p>"
    const userWithNoSpace = "lesh.monster@10.0.0.1:~$";
    if (value === "ls") {
        document.getElementById("type").value = "";
        document.getElementById("terminal").innerHTML += history + "<p><span>hello world</span></p>";
    }
    else if (value === "clear") {
        document.getElementById("type").value = "";
        document.getElementById("terminal").innerHTML = "";
    }
    else if (value === "cd " + "helloworld") {
        document.getElementById("type").value = "";
        document.getElementById("terminal").innerHTML += history + "<p><span><a href='https://www.google.com/'>helloworld</a></span></p>";
    }
    else if (value === "--help") {
        document.getElementById("type").value = "";
        document.getElementById("terminal").innerHTML += history + "<span>df<span>";
    }
    // 만약 value 가 read + 파일명 형식이라면 그 파일 경로로 이동한다.
    else if (value.includes("read")) {
        document.getElementById("type").value = "";
        document.getElementById("terminal").innerHTML += history + "<p><a href='https://www.google.com/'>helloworld</a></p>";
    }
    else {
        document.getElementById("type").value = "";
        document.getElementById("terminal").innerHTML += history + "<p>lesh.monster:&nbsp;" + "command not found: " + "<span>" + value + "</span>" + "</p>";
    }
}