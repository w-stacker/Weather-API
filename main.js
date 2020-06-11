const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("City").innerHTML = x;
}

function weatherApi(city) {
  $.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${name}&appid=f298a20c163650a0a661521f8a10f45f&units=imperial`,
    function (data) {
      console.log(data);
      $(".result").html(data);
      // alert("Load was performed.");
      
      var title1 = data.name;
      var cardTitle = $(".card-title").text(title1);
      $("#W21").append(cardTitle);
      $("#W22").append(cardTitle);
      $("#W23").append(cardTitle);
      $("#W24").append(cardTitle);
      $("#W25").append(cardTitle);
    }
  );
}

$("#forecast-button").click(function(event){
  // console.log(event)
  var text = $("#input-text").val()
  console.log(text);
  weatherApi(text);
});






{
  /* <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text"><h3></h3></p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div> */
}
