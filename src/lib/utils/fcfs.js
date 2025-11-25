// fcfs.js — FCFS Scheduling Logic

export function runFCFS(processes) {
  if (!processes || processes.length === 0)
    return { results: [], ganttChart: [] };

  // Sort processes by arrival time
  const sorted = [...processes].sort((a, b) => a.arrival - b.arrival);

  let currentTime = 0;
  const results = [];
  const ganttChart = [];

  sorted.forEach((p) => {
    const startTime = Math.max(currentTime, p.arrival);
    const completionTime = startTime + p.burst;
    const tat = completionTime - p.arrival; // Turnaround Time
    const wt = startTime - p.arrival; // Waiting Time

    results.push({
      id: p.id,
      arrival: p.arrival,
      burst: p.burst,
      start: startTime,
      completion: completionTime,
      tat,
      wt,
    });

    // Add to Gantt Chart
    ganttChart.push({
      process: p.id,
      start: startTime,
      end: completionTime,
    });

    currentTime = completionTime;
  });

  return { results, ganttChart };
}
