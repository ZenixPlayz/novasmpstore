function copyIP() {

    const ip = document.getElementById("serverIP").innerText;

    navigator.clipboard.writeText(ip)
        .then(() => {

            alert("✅ Server IP copied!\n\n" + ip);

        })
        .catch(() => {

            alert("❌ IP copy nahi ho paya.");

        });
}


// Rank buttons

document.querySelectorAll(".rank button").forEach(button => {

    button.addEventListener("click", () => {

        alert("🛒 Store coming soon!\nNovaSMP");

    });

});
