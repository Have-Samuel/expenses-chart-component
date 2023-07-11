# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot
### Mobile
![](./design/mobile-design.jpg)

### Desktop
![](./design/desktop-design.jpg)

### Links

- [Github](https://github.com/Have-Samuel/expenses-chart-component)
- [Live Link]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Chart.JS](https://www.chartjs.org/docs/latest/) - Chart.JS library
- javascript
- Git & Gitworkflow
- Positioning
- Best practices

### What I learned
For the `Chart.js`, you have to critally learn the Library for proper use of the concepts, and below is some of the code 🎉 that I learnt for the whole process.

```js
Chart.defaults.borderColor = '#fff';

// SetUp Block

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
    onHover: (event, chartElement) => {
      if (event.native) {
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
      }
    },
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
```
### Continued development
  -  Mouse Cursor Onhover
  - [ToolTip](https://www.chartjs.org/docs/latest/configuration/tooltip.html)
  - Axes [styling](https://www.chartjs.org/docs/latest/axes/styling.html)
  - [Migration](https://www.chartjs.org/docs/latest/axes/styling.html)

### Useful resources

- [ChartJS-Tutorials](https://www.youtube.com/@ChartJS-tutorials) - This helped me to go throught the whole project, I really liked this pattern and will use it going forward.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- [Have Samuel](https://my-portifolio-git-dev-have-samuel.vercel.app/)
- [@Have-Samuel](https://www.frontendmentor.io/profile/Have-Samuel)
- [@samhave](https://twitter.com/samhave)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
