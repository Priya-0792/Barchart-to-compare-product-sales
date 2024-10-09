const ctx = document.getElementById('salesChart').getContext('2d');

const data = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{
        label: 'Sales(Legend)',
        data: [500, 800, 1200, 1500, 1800],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 3
    }]
};

const salesChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',// Position of the legend
                labels: {
                    color: 'black',
                }
            },
            title: {
                display: true,
                text: 'Product - Sales Comparison', // Title of the chart
                font: {
                    size: 15,
                }
            }
        },
           scales: {
              y: {
                beginAtZero: true,
                title:{
                    display:true,
                    text:'Sales',
                    font:{
                        size:15
                    }  
                }
              },
              x: {
                title:{
                    display:true,
                    text:'Product-names',
                    font:{
                        size:15
                    } 
                }
              
        }}
    }
    
});
