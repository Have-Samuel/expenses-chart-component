const myChart = document.querySelector('#myChart');

const barChart = new Chart(myChart, {
  type: 'bar',
  data: {
    label: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [
      17.45,
      34.91,
      52.36,
      31.07,
      23.39,
      43.28,
      25.48,
    ],
    // backgroundColor: 'red',
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)',
    ],
  },
  options: {

  },
});