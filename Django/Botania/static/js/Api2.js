
//profe este es el unico api pero por pruebas le puse api2.


$.ajax({
    url: "https://apis.digital.gob.cl/dpa/regiones",
    type: "GET",
    crossDomain: true,
    dataType: "jsonp",
    success: function (data) {
      $.each(data, function (i, item) {
        $("#cboRegiones").append(
          "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
        );
      });
    },
    error: function (xhr, status, error) {
      console.log("Error al obtener las regiones: " + error);
    },
  });
  


  $("#cboRegiones").change(function () {
    var idRegion = $("#cboRegiones").val();
    $("#cboProvincias").attr("disabled",false);
    $("#cboProvincias").empty();
    $("#cboProvincias").append("<option hidden disable>Seleccione una opcion</option>");
    $("#cboComunas").empty();
    $("#cboComunas").append("<option hidden disable>Seleccione una opcion</option>");
    $.ajax({
      url: "https://apis.digital.gob.cl/dpa/regiones/"+idRegion+"/provincias",
      type: "GET",
      crossDomain: true,
      dataType: "jsonp",
      success: function (data) {
        $.each(data, function (i, item) {
          $("#cboProvincias").append(
            "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
          );
        });
      },
      error: function (xhr, status, error) {
        console.log("Error al obtener las regiones: " + error);
      },
    });
  });

  $("#cboProvincias").change(function () {
    var idRegion = $("#cboRegiones").val();
    var idProvincia = $("#cboProvincias").val();
    $("#cboComunas").attr("disabled",false);
    $("#cboComunas").empty();
    $("#cboComunas").append("<option hidden disable>Seleccione una opcion</option>");
    $.ajax({
      url: "https://apis.digital.gob.cl/dpa/regiones/"+idRegion+"/provincias/"+idProvincia+"/comunas",
      type: "GET",
      crossDomain: true,
      dataType: "jsonp",
      success: function (data) {
        $.each(data, function (i, item) {
          $("#cboComunas").append(
            "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
          );
        });
      },
      error: function (xhr, status, error) {
        console.log("Error al obtener las regiones: " + error);
      },
    });
  });
