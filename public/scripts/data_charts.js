var ctx = $("#line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "Mon, Dec 11","Tue, Dec 12","Wed, Dec 13","Thu, Dec 14","Fri, Dec 15","Sat, Dec 17","Sun, Dec 18","Mon, Dec 19","Tue, Dec 20","Wed, Dec 21","Thu, Dec 22","Fri, Dec 23","Sat, Dec 24","Sun, Dec 25"
        ],
        datasets: [{
            label: "Price $",
            backgroundColor: "rgb(232,140,21)",
            borderColor: "rgb(255,255,255)",
            borderWidth: 1,
            pointBackgroundColor: "#535353",
            pointRadius: 7,
            data: [213.5,133.2,453.3,344.58,543.32,665.16,137.44,224.5,212.4,453.3,344.58,143.32,165.16,337.44]
        }]
    },
    options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
              }
            }
          }]
        }
      }
});
