$(function() {
  $("#calcular").on("click", function() {
    calc();
  });
});

$(function(){
  $(document).keypress(function(a) {
    13 == a.keyCode && (a.preventDefault(), calc());
  });
});

function calc() {
  let sueldoBruto = getNumberValue("#sueldoBruto", 0);
  let metrosCuadrados = getNumberValue("#metrosCuadrados", 0);
  let UVA = 67.39;
  let precioInmueble = metrosCuadrados * UVA * 1000;
  let creditoHipotecario = precioInmueble * 0.8;
  let tiempoTotal = 0
  if (sueldoBruto != 0) {
    tiempoTotal = dosDecimales(creditoHipotecario / sueldoBruto * 0.3);
  }
  let alquilerAnual = precioInmueble * 0.05;
  let alquilerMensual = dosDecimales(alquilerAnual / 12);

  $("#precioInmueble").text("$" + precioInmueble);
  $("#tiempoTotal").text(tiempoTotal + " Años");
  $("#precioAlquiler").text("$" + alquilerMensual);
}

function getNumberValue(label, defaultValue) {
  let value = $(label).val();
  return value != "" ? Number(value) : defaultValue;
}

function dosDecimales(n) {
  let t=n.toString();
  let regex=/(\d*.\d{0,2})/;
  return t.match(regex)[0];
}
