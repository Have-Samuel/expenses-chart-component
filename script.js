const myChart = document.querySelector('#myChart').getContext('2d');

const barChart = new CharacterData(myChart, {
  type: 'bar',
  data: {
    days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Amount',
      data: []
    }],
  },
});