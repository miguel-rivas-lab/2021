<script lang="ts">
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartData: {
      type: Array,
    },
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  }),
  mounted() {
    const orgData = this.chartData.sort((a, b) => {
      let ca = a.date;
      let cb = b.date;
      return ca - cb;
    });
    const dates = orgData.map(
      (d) => `${d.date.slice(0, 4)}/${d.date.slice(-2)}`
    );
    const totals = orgData.map((d) => d.total);

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            data: totals,
            borderColor: "rgba(22, 86, 144, .5)",
            pointBackgroundColor: "rgb(52, 206, 126)",
            backgroundColor: "rgba(56, 118, 204, .8)",
          },
        ],
      },
      this.options
    );
  },
};
</script>