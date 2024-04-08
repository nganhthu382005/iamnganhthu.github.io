function submit() {
    var item = document.getElementById("item").value;
    var amount = document.getElementById("amount").value;

    document.getElementById("ketqua").innerHTML = document.getElementById("ketqua").innerHTML + `
    <div id="ketqua">
            <b>${item}:</b>
            ${amount}₫
        </div>
    `;
}