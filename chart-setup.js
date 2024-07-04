const ctx = document.getElementById('consumptionChart').getContext('2d');
const consumptionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['21 Apr', '22 Apr', '23 Apr', '24 Apr', '25 Apr', '26 Apr', '27 Apr', '28 Apr', '29 Apr', '30 Apr', '01 May', '02 May', '03 May', '04 May', '05 May'], // Dates
        datasets: [{
            label: 'Consumed Taka',
            data: [200.51, 122.43, 118.1, 129.1, 93.28, 43.8, 136.47, 269.95, 146.22, 154.87, 99.96, 5.7, 83.48, 112.95, 98.1], // Taka values
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            tension: 0.4,
            fill: false
        }, {
            label: 'Consumed Unit',
            data: [300, 250, 200, 150, 100, 50, 100, 150, 200, 250, 200, 150, 100, 50, 100], // Unit values
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        // width: 10000,
        // height: 10000,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




// const ctz = document.getElementById('consumptionChart2').getContext('2d');
// const consumptionChart2 = new Chart(ctz, {
//     type: 'line',
//     data: {
//         labels: ['MAY 23','JUN 23','JUL 23','AUG 23','SEP 23','OCT 23','NOV 23','DEC 23', 'JAN 24', 'FEB 24', 'MAR 24', 'APR 24'], // Dates
//         datasets: [ {
//             label: 'Consumed Unit',
//             data: [102.5, 107.8, 200, 150.3, 143.1, 50, 100, 140.5, 200.2, 210, 200, 109.9, 100, 50, 100], // Unit values
//             borderColor: 'rgb(54, 162, 235)',
//             backgroundColor: 'rgba(255, 92, 0, 0.5)',
//             tension: 0.4,
//             fill: false
//         }]
//     },
//     options: {
//         responsive: true,
//         // width: 10000,
//         // height: 10000,
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });




// // Function to fetch data from the API
// async function fetchData() {
//     try {
//         const response = await fetch('http://202.164.214.155:59130/nesco-app/api/energy?meterNo=20330012411');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Function to create and update the chart
// async function updateChart() {
//     const data = await fetchData();

    
//     const labels = data.data.energy.map(entry => entry.dataDt);
//     const consumptionValues = data.data.energy.map(entry => entry.totalElectricity);
//     const consumptionTk = data.data.energy.map(entry => entry.totalAmount);

//     const ctx = document.getElementById('consumptionChart2').getContext('2d');

//     const consumptionChart2 = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Consumption Unit',
//                 data: consumptionValues,
//                 borderColor: 'rgb(54, 162, 235)',
//                 backgroundColor: 'rgba(255, 92, 0, 0.5)',
//                 tension: 0.4,
//                 borderWidth: 2,
//                 fill: false
//             },{
//                 label: 'Consumption TK',
//                 data: consumptionTk,
//                 borderColor: 'rgb(255, 205, 86)',
//                 backgroundColor: 'rgba(255, 205, 86, 0.5)',
//                 tension: 0.4,
//                 borderWidth: 2,
//                 fill: false
//             }]
//         },
//         options: {
//             response:true,
//             scales: {
//                 x: {
//                     reverse: true
//                 },
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }

// // Call the function to update the chart
// updateChart();
















async function fetchData(meterNumber) {
    try {
        const response = await fetch(`http://202.164.214.155:59130/nesco-app/api/energy?meterNo=${meterNumber}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function setupChart(meterNumber) {
    const data = await fetchData(meterNumber);

    // Sort data by date in ascending order
    //data.sort((a, b) => new Date(a.date) - new Date(b.date));

    const labels = data.data.energy.map(entry => entry.dataDt);
    const consumptionValues = data.data.energy.map(entry => entry.totalElectricity);
    const consumptionTk = data.data.energy.map(entry => entry.totalAmount);

    const ctx = document.getElementById('consumptionChart2').getContext('2d');

    const consumptionChart2 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Consumption Unit',
                        data: consumptionValues,
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(255, 92, 0, 0.5)',
                        tension: 0.4,
                        borderWidth: 2,
                        fill: false
                    },{
                        label: 'Consumption TK',
                        data: consumptionTk,
                        borderColor: 'rgb(255, 205, 86)',
                        backgroundColor: 'rgba(255, 205, 86, 0.5)',
                        tension: 0.4,
                        borderWidth: 2,
                        fill: false
                    }]
                },
                options: {
                    response:true,
                    scales: {
                        x: {
                            beginAtZero: true,
                            reverse: true
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
}















