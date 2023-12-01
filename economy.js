// Adding Chart.js script tag in the HTML
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// JavaScript code in economy.js
document.addEventListener('DOMContentLoaded', function () {
    var trumpData = {
        // Sample data for Trump's term
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
        datasets: [{
            label: 'GDP Growth',
            data: [2.9, 2.3, 2.2, -3.5], // Example data
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    var bidenData = {
        // Data for Biden's term
        labels: ['Year 1', 'Year 2'],
        datasets: [{
            label: 'GDP Growth',
            data: [5.7, 4.2], // Example data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    var trumpCtx = document.getElementById('trumpChart').getContext('2d');
    var bidenCtx = document.getElementById('bidenChart').getContext('2d');

    new Chart(trumpCtx, {
        type: 'line',
        data: trumpData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(bidenCtx, {
        type: 'line',
        data: bidenData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
