/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// // Global Options
Chart.defaults.borderColor = '#fff';

// SetUp Block

// Data
const numbers = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Amount of Cash',
    data: numbers,
    borderRadius: 5,
    backgroundColor: [
      '#ec755d',
      '#ec755d',
      '#76B5BC',
      '#ec755d',
      '#ec755d',
      '#ec755d',
      '#ec755d',
    ],
  }],
};

// Tooltip title
const titleTooltip = (tooltipItems) => `£${numbers[tooltipItems[0].dataIndex]}`;

const labelTooltip = () => '';
// Configuring the chart
const config = {
  type: 'bar',
  data,
  options: {
    plugins: {
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        titleMarginBottom: 0,
        backgroundColor: '#382314',
        borderColor: '#fff',
        borderWidth: 0.5,
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
  },
};

// Rendering the chart
const myChart = new Chart(document.getElementById('myChart'), config);
