$(function () {
  $("#date").datepicker({
    changeYear: true,
  });

  $(".radiobtn").checkboxradio({
    icon: false,
  });
  $("#radio-container").controlgroup();

  $("#slider-range-weight").slider({
    range: "max",
    min: 1,
    max: 300,
    value: 20,
    slide: function (event, ui) {
      $("#weight").val(ui.value);
    },
  });
  $("#weight").val($("#slider-range-weight").slider("value"));

  $("#slider-range-height").slider({
    range: "max",
    min: 1,
    max: 50,
    value: 10,
    slide: function (event, ui) {
      $("#height").val(ui.value);
    },
  });
  $("#height").val($("#slider-range-height").slider("value"));

  $("#numOfEyes").spinner({
    spin: function (event, ui) {
      if (ui.value > 10) {
        $(this).spinner("value", -10);
        return false;
      } else if (ui.value < -10) {
        $(this).spinner("value", 10);
        return false;
      }
    },
  });

  $("#numOfArms").spinner({
    spin: function (event, ui) {
      if (ui.value > 10) {
        $(this).spinner("value", -10);
        return false;
      } else if (ui.value < -10) {
        $(this).spinner("value", 10);
        return false;
      }
    },
  });

  $("#numOfLegs").spinner({
    spin: function (event, ui) {
      if (ui.value > 10) {
        $(this).spinner("value", -10);
        return false;
      } else if (ui.value < -10) {
        $(this).spinner("value", 10);
        return false;
      }
    },
  });

  function hexFromRGB(r, g, b) {
    var hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }
  function refreshSwatch() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#swatch").css("background-color", "#" + hex);
  }
  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch,
  });
  $("#red").slider("value", 255);
  $("#green").slider("value", 140);
  $("#blue").slider("value", 60);

  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 500,
    },
    hide: {
      effect: "explode",
      duration: 1000,
    },
  });
  $("#submitBtn").on("click", function () {
    $("#dialog").dialog("open");
  });
});
