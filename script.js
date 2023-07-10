// const myChart = document.querySelector('#myChart');

// // Global Options
// Chart.defaults.backgroundColor = 'rgba(255, 255, 255, 0.5)';
// Chart.defaults.fontColor = '#777';
// Chart.defaults.fontSize = 16;
// Chart.defaults.fontFamily = 'Helvetica Neue';
// Chart.defaults.fontStyle = 'bold';
// Chart.defaults.borderColor = '#fff';

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
//     }],
//   },
//   options: {
//     scales: {
//       myScale: {
//         type: 'logarithmic',
//         position: 'left', // `axis` is determined by the position as `'y'`
//       }
//     }
//   },
// });

const ctx = document.querySelector('#myChart');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3, 4],
//       borderWidth: 1,
//       backgroundColor: [
//         '#ec755d',
//       ],
//     }],
//   },
//   options: {
//     scales: {
//     },
//     title: {
//       text: 'Amount',
//       color: 'red',
//     },
//   },
// });

new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'First dataset',
      data: [0, 20, 40, 50],
    }],
    labels: ['January', 'February', 'March', 'April'],
  },
  options: {
    scales: {
      y: {
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  },
});gi