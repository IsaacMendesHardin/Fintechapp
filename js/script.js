// Gráfico
var barChartOptions = {
  series: [{
    data: [5, 8, 6, 8, 10]
  }],
  chart: {
    type: 'bar',
    height: 450,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 10,
      horizontal: false,
      columnWidth: '70%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Transações", "Economias", "Promoções", "Cartões", "Pagamentos"],
  },
  yaxis: {
    title: {
      text: "Gráfico"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


