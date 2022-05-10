
function main() {
    var input = document.getElementById("input");
    var buttons = document.getElementsByClassName("btn");
    var err = document.getElementsByClassName("err")[0];
    var rsWrap = document.getElementsByClassName("result-wrap")[0];
    var rsLink = document.getElementById("result");

    var type = "shrtco.de";

    for (let btn of buttons) {
        btn.onclick = () => {
            for (let button of buttons)
                button.classList.remove("black");
            btn.classList.add("black");
            type = btn.innerHTML;
        }
    }

    document.getElementsByClassName("get-btn")[0].onclick = () => {

        err.style.display = "none";
        rsWrap.style.display = "none";

        console.log(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
        fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
            .then(res => res.json())
            .then(res => {
                if (res.ok) {
                    err.style.display = "none";
                    let shortenLink = "";
                    switch (type) {
                        case "shrtco.de":
                            shortenLink=res.result.full_short_link;
                            break;
                        case "9qr.de":
                            shortenLink=res.result.full_short_link2;
                            break;
                        case "shiny.link":
                            shortenLink=res.result.full_short_link3;
                            break;
                        default:
                            shortenLink=res.result.full_short_link;
                    }
                    rsLink.href = shortenLink;
                    rsLink.innerHTML = shortenLink;
                    rsWrap.style.display = "block";
                }else{
                    err.style.display = "block";
                }
            })
    }
}
main();