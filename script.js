// const myChart = document.querySelector('#myChart');

// // Global Options
// // myChart.defaults.global.defaultFontSize = 16;

// new Chart(myChart, {
//   type: 'bar',
//   data: {
//     labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//       label: 'Amount of Cash',
//       data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
//       // borderWidth: 0.5,
//       borderRadius: 5,
//       backgroundColor: [
//         '#ec755d',
//         '#ec755d',
//         '#76B5BC',
//         '#ec755d',
//         '#ec755d',
//         '#ec755d',
//         '#ec755d',
//       ],
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'Amounts',
//       fontSize: 20,
//       color: 'black'
//     },
//     legend: {
//       position: 'right',
//   },
//   }
// });

const ctx = document.querySelector('#myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun' ],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,4],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      title: {
        text: 'Amount',
        color: 'red',
      }
    },
  });