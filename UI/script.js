function classifyImage(file) {
    $("#loadingGif").css("display", "block");
    $("#result").html('');
    $("button").attr("disabled", true);
    try {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://hifg1d4yzj.execute-api.ap-south-1.amazonaws.com/dev/malware_classify"
      );
      xhr.setRequestHeader("content-type", "multipart/form-data");
      xhr.responseType = "json";
      xhr.onload = function () {
      $("button").attr("disabled", false);
        $("#loadingGif").css("display", "none");
        if (xhr.status === 200) {
          console.log(xhr.response);
          $('#image-form').trigger("reset");
          const probabilities = xhr.response.probabilities;
          var xValues = [];
          var yValues = [];
          for (const key in probabilities) {
            xValues.push(key);
            yValues.push(probabilities[key]);
          }
          if (yValues[0] >= 0.6) {
            $("#result").html(`<div class="card elevation"><div class="canvas elevation" id="canvas"><h1>${xValues[0]}</h1></div><canvas id="top-classification-chart"></canvas></div>`);
            new Chart("top-classification-chart", {
              type: "bar",
              data: {
                labels: xValues.slice(0, 5),
                skipNull: true,
                datasets: [{
                  data: yValues.slice(0, 5),
                }]
              },
              options: {
                legend: {display: false},
                elements: {
                  line: {
                    fill: false
                  },
                  point: {
                    hoverRadius: 7,
                    radius: 5
                  }
                },
                scales: {
                  xAxes: [{
                    stacked: true,
                  }],
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true,
                      display: false,
                    }
                  }],
                },
              }
            });
          } else {
            $("#result").html(`<div class="alert alert-success" role="alert">Malware not found. Safe to use.</div>`);
          }
        } else {
          $("#result").html(`<div class="alert alert-danger" role="alert">Server error. Please Try again (${xhr.response.error}).</div>`);
        }
      };
      xhr.send(file);
    } catch (error) {
      $("#loadingGif").css("display", "none");
      $("#result").html(`<div class="alert alert-danger" role="alert">Server error. Please Try again (${error}).</div>`);
    }

}

$(document).ready(function(){

    $("#image-form").submit(function (e) {
        e.preventDefault();
        const input = document.getElementById("image-input");
        if (input.files.length == 0) {
          alert("Please select an image to classify. input.files.length == 0");
          return;
        }
        const file = input.files[0];
        classifyImage(file);
    });

    $("#image-form").change(function (e) {
        $("#output").prop("src", URL.createObjectURL(e.target.files[0]));
    });

    $(".sample-image").each(function() {
        $(this).on('click', async function(e) {
          var imagePath = $(this).attr("data-image");
          $("#output").prop("src", imagePath);
          let blob = await fetch(
            imagePath
          ).then((r) => r.blob());
          var file = new File([blob], 'fakeron.png', { type: 'application/png' });
          var formData = new FormData();
          formData.append('image', file);
          classifyImage(file);
        });
    });

    $(".tabbed-button").each(function () {
        $(this).on('click', function(e) {
            var buttonType = $(this).attr("data-button");
            $("#result").html("");
            $('#image-form').trigger("reset");
            $("#output").prop("src", "./white.png");
            if (buttonType === "custom") {
                $(".sample-upload-container").hide();
                $(".custom-upload-container").show();
                $("#custom-button").addClass("button-clicked");
                $("#sample-button").removeClass("button-clicked");
            } else{
                $(".custom-upload-container").hide();
                $(".sample-upload-container").show();
                $("#custom-button").removeClass("button-clicked");
                $("#sample-button").addClass("button-clicked");
            }
        });
    });
});