'use strict';

function getTableData() {
  for (var i = 0; i < allProducts.length; i++) {
    imageClicksArray.push(allProducts[i].numClicks);
    imageNameArray.push(allProducts[i].name);
    imageShownArray.push(allProducts[i].numShown);
    imagePercArray.push(Math.ceil((imageClicksArray[i] / imageShownArray[i]) * 100));
  }

}
function createTable() {
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontFamily = 'Work Sans';
  Chart.defaults.global.defaultFontSize = 6;
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    responsive: true,
    data: {
      labels: imageNameArray,
      datasets: [{
        label: '# Times Clicked',
        data: imageClicksArray,
        backgroundColor: ['#bcbcbc'],
        borderColor: ['#a0a0a0']
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {beginAtZero: true}
        }]
      }
    }
  });
}
function showResults() {
  getTableData();
  createTable();
}
