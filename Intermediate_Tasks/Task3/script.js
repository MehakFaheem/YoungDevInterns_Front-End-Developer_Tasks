const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

openModalBtn.onclick = () => {
    modal.style.display = "flex";
};

closeModalBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
    modal.style.display = "none";
    }
};