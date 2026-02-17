import { MonthlyUsageRecord } from '../types/consumption';

export const fetchMonthlyUsageRecords = async (): Promise<MonthlyUsageRecord[]> => {
  return [
    { month: '2023-01', usage: 120 },
    { month: '2023-02', usage: 150 },
    { month: '2023-03', usage: 180 },
    { month: '2023-04', usage: 210 },
    { month: '2023-05', usage: 240 },
    { month: '2023-06', usage: 270 },
    { month: '2023-07', usage: 300 },
    { month: '2023-08', usage: 330 },
    { month: '2023-09', usage: 360 },
    { month: '2023-10', usage: 390 },
    { month: '2023-11', usage: 420 },
    { month: '2023-12', usage: 450 },
  ];
};

interface MonthlyUsageRecord {
  month: string;
  usage: number;
}
```

```
new file mode 100644
index 0000000..b9a3c6e