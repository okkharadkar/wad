function filterAnnouncements() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const notices = document.querySelectorAll(".notice");

    notices.forEach(n => {
        if (n.textContent.toLowerCase().includes(input)) {
            n.style.display = "block";
        } else {
            n.style.display = "none";
        }
    });
}
