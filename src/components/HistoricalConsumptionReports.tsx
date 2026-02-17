import React, { useEffect, useState } from 'react';
import * as Chart from 'chart.js/auto';
import { fetchMonthlyUsageRecords } from '../api/mockConsumptionApi';

const HistoricalConsumptionReports: React.FC = () => {
  const [usageData, setUsageData] = useState<Chart.ChartData<'line', number[], string>>({
    labels: [],
    datasets: [{
      label: 'Monthly Usage',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  });

  useEffect(() => {
    (async () => {
      const usageRecords = await fetchMonthlyUsageRecords();
      setUsageData({
        labels: usageRecords.map(record => record.month),
        datasets: [{
          data: usageRecords.map(record => record.usage),
        }],
      });
    })();
  }, []);

  return (
    <div>
      <h1>Historical Consumption Reports</h1>
      <canvas id="usageChart"></canvas>
      <script type="text/javascript">
        const ctx = document.getElementById('usageChart') as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'line',
          data: usageData,
        });
      </script>
    </div>
  );
};

export default HistoricalConsumptionReports;
```

```
index e69de29..fc8f3ac 100644