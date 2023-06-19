
function calculardiasDiscount() {
    var timeStart = new Date(document.getElementById("timeStart").value);
    var timeEnd = new Date(document.getElementById("timeEnd").value);
    if (timeEnd > timeStart)
    {
        var diff = timeEnd.getTime() - timeStart.getTime();
        var precioDia = 800;
        var total = precioDia * diff;
        document.getElementById("daysDiscount").value = Math.round(total / (1000 * 60 * 60 * 24));
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        alert("La fecha final de la promoción debe ser mayor a la fecha inicial");
        document.getElementById("daysDiscount").value = 0;
    }
}