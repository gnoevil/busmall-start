'use strict';

function getTableData() {
  for (var i = 0; i < allProducts.length; i++) {
    imageClicksArray.push(allProducts[i].numClicks);
    imageNameArray.push(allProducts[i].name);
    imageShownArray.push(allProducts[i].numShown);
  }
}
function createTable() {
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontFamily = 'Work Sans';
  Chart.defaults.global.defaultFontSize = 12;
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    responsive: true,
    height: 950,
    width: 950,
    data: {
      labels: imageNameArray,
      datasets: [{
        label: '# Times Clicked',
        data: imageClicksArray,
        backgroundColor: [
          'rgba(255, 0, 0, 1, 0.3)',
          'rgba(0, 255, 0, 1, 0.3)',
          'rgba(0, 0, 255, 1, 0.3)',
          'rgba(255, 255, 0, 1, 0.3)',
          'rgba(0, 255, 255, 1, 0.3)',
          'rgba(255, 255, 255, 1, 0.3)',
          'rgba(128, 0, 0, 1, 0.3)',
          'rgba(0, 128, 0, 1, 0.3)',
          'rgba(0, 0, 128, 1, 0.3)',
          'rgba(128, 128, 0, 1, 0.3)',
          'rgba(128, 0, 128, 1, 0.3)',
          'rgba(0, 128, 128, 1, 0.3)',
          'rgba(128, 128, 128, 1, 0.3)',
          'rgba(64, 0, 0, 1, 0.3)',
          'rgba(0, 64, 0, 1, 0.3)',
          'rgba(0, 0, 64, 1, 0.3)',
          'rgba(64, 64, 0, 1, 0.3)',
          'rgba(64, 0, 64, 1, 0.3)',
          'rgba(0, 64, 64, 1, 0.3)',
          'rgba(64, 64, 64, 1, 0.3)'
        ]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Sales Chart for Bus Mall'
      },
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false,
          }
        }],
        yAxes: [{
          height: 900,
          ticks: {
            stepSize: 1
          },
          scaleLabel: {
            fontSize: 14,
            display: true,
            labelString: 'Times Clicked'
          }
        }]
      },
      legend: {
        display: false,
      }
    }
  });
}
function showResults() {
  getTableData();
  createTable();
}
