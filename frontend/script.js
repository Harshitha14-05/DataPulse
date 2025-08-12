window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:5000/api/data")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("card-container");
            container.innerHTML = "";

            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.textContent = item;
                    container.appendChild(card);
                });
            } else {
                container.innerHTML = "<p>No items found</p>";
            }
        })
        .catch(err => {
            console.error("Error fetching data:", err);
            document.getElementById("card-container").innerHTML = "<p>Failed to load data</p>";
        });
});
