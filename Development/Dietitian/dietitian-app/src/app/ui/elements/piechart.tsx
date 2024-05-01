import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface PieChartProps {
  data1: number[];
  data2: number[];
  label1: string;
  label2: string;
  height: number;
  width: number;
}

const PieChart: React.FC<PieChartProps> = ({ data1, data2, label1, label2, height, width }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let chartInstance: Chart<"pie"> | null = null;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstance) {
          chartInstance.destroy();
        }

        const combinedData = [...data1, ...data2];
        const combinedLabels = [label1, label2];

        chartInstance = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: combinedLabels,
            datasets: [
              {
                label: 'Combined Data',
                data: combinedData,
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
			plugins: {
				legend: {
				  labels: {
					color: 'white', // Change label text color here
				  },
				},
			  },
          },
        });
      }
    }

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data1, data2, label1, label2]);

  return <canvas ref={chartRef} height={height} width={width}></canvas>;
};

export default PieChart;
