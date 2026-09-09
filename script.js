/* ================= COPY SERVER IP ================= */

function copyIP() {

    const ip =
        document.getElementById("serverIP").innerText;

    navigator.clipboard.writeText(ip)
        .then(function () {

            alert(
                "✅ Server IP copied!\n\n" +
                ip
            );

        })
        .catch(function () {

            alert(
                "❌ IP copy nahi ho paya."
            );

        });
}


/* ================= BUY RANK ================= */

function buyRank(rankName) {

    alert(
        "🛒 " +
        rankName +
        " Rank selected!\n\n" +
        "NovaSMP Store payment system coming soon."
    );

}


/* ================= DISCORD ================= */

const discordButton =
    document.querySelector(".discord-social");

if (discordButton) {

    discordButton.addEventListener(
        "click",
        function (event) {

            if (
                discordButton.getAttribute("href")
                === "#"
            ) {

                event.preventDefault();

                alert(
                    "💬 NovaSMP Discord invite link\n" +
                    "will be added soon!"
                );

            }

        }
    );

}


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    function () {

        console.log(
            "⚔️ NovaSMP website loaded successfully!"
        );

    }
);
