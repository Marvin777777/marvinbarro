import React, { useEffect, useRef, useState } from "react";

export default function FCFS() {
  const [arrivalTime, setArrivalTime] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [processes, setProcesses] = useState([]);
  const [gantt, setGantt] = useState([]);
  const [results, setResults] = useState([]);
  const [averages, setAverages] = useState(null);
  const [visualized, setVisualized] = useState(false);
  const visualizationRef = useRef(null);

  const handleAddProcess = () => {
    if (arrivalTime === "" || burstTime === "") return;

    const newProcess = {
      id: processes.length + 1,
      name: `P${processes.length + 1}`,
      arrivalTime: Number(arrivalTime),
      burstTime: Number(burstTime),
    };

    setProcesses([...processes, newProcess]);
    setArrivalTime("");
    setBurstTime("");
  };

  const handleDelete = (id) => {
    setProcesses(processes.filter((p) => p.id !== id));
  };

  const calculateFCFS = () => {
    const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);

    let currentTime = 0;
    let ganttData = [];
    let resultsData = [];

    sorted.forEach((p) => {
      const start = Math.max(currentTime, p.arrivalTime);
      const end = start + p.burstTime;

      ganttData.push({ name: p.name, start, end });

      const completionTime = end;
      const turnaround = completionTime - p.arrivalTime;
      const waiting = turnaround - p.burstTime;

      resultsData.push({ ...p, completionTime, turnaround, waiting });

      currentTime = end;
    });

    const avgWT = (
      resultsData.reduce((acc, p) => acc + p.waiting, 0) / resultsData.length
    ).toFixed(2);

    const avgTAT = (
      resultsData.reduce((acc, p) => acc + p.turnaround, 0) /
      resultsData.length
    ).toFixed(2);

    setGantt(ganttData);
    setResults(resultsData);
    setAverages({ avgWT, avgTAT });
    setVisualized(true);
  };

  const resetAll = () => {
    setArrivalTime("");
    setBurstTime("");
    setProcesses([]);
    setGantt([]);
    setResults([]);
    setAverages(null);
    setVisualized(false);
  };

  useEffect(() => {
    if (visualized && visualizationRef.current) {
      visualizationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [visualized]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-4 py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 right-10 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl space-y-10">
        <div className="rounded-3xl border border-emerald-100/60 bg-white/80 p-10 shadow-2xl shadow-emerald-200/40 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-600/70" style={{ fontFamily: "satoshi-medium" }}>
                CPU Scheduling
              </p>
              <h1 className="mt-2 text-4xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
                FCFS Planning Console
              </h1>
              <p className="mt-3 text-stone-600 max-w-2xl" style={{ fontFamily: "satoshi-medium" }}>
                Queue processes, visualize the flow, and surface insights in a layout that mirrors the rest of the portfolio aesthetic.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50 to-sky-50 px-5 py-4 text-right text-xs font-semibold text-emerald-800" style={{ fontFamily: "satoshi-medium" }}>
              <p className="tracking-[0.35em] text-emerald-500">Policy</p>
              <p className="text-2xl" style={{ fontFamily: "satoshi-black" }}>
                FCFS
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-stone-100 bg-white/90 p-6 shadow-lg shadow-emerald-100/30">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-400" style={{ fontFamily: "satoshi-medium" }}>
                Add a process
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-stone-500">
                  Arrival Time
                  <input
                    type="number"
                    placeholder="0, 1, 2..."
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none ring-emerald-200 focus:ring-2"
                  />
                </label>
                <label className="text-sm text-stone-500">
                  Burst Time
                  <input
                    type="number"
                    placeholder="CPU cycles"
                    value={burstTime}
                    onChange={(e) => setBurstTime(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none ring-emerald-200 focus:ring-2"
                  />
                </label>
              </div>
              <button
                onClick={handleAddProcess}
                className="mt-6 w-full rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-900/15 transition hover:-translate-y-0.5"
                style={{ fontFamily: "satoshi-bold" }}
              >
                + Queue Task
              </button>

              {processes.length > 0 ? (
                <div className="mt-6 space-y-3">
                  {processes.map((p) => (
                    <div
                      key={p.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-stone-100 bg-gradient-to-r from-emerald-50/80 to-sky-50/80 px-4 py-4 text-sm shadow-sm"
                    >
                      <div>
                        <p className="text-lg text-stone-900" style={{ fontFamily: "satoshi-bold" }}>
                          {p.name}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.4em] text-stone-400">
                          waiting
                        </p>
                      </div>
                      <div className="flex gap-6 text-xs text-stone-600" style={{ fontFamily: "satoshi-medium" }}>
                        <span>
                          AT <span className="text-stone-900">{p.arrivalTime}</span>
                        </span>
                        <span>
                          BT <span className="text-stone-900">{p.burstTime}</span>
                        </span>
                      </div>
                      <button
                        aria-label={`Delete ${p.name}`}
                        onClick={() => handleDelete(p.id)}
                        className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500 transition hover:bg-rose-100"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-dashed border-stone-200 bg-white/60 px-4 py-6 text-sm text-stone-400" style={{ fontFamily: "satoshi-medium" }}>
                  No queued processes yet. Add at least one to unlock the controls.
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-stone-100 bg-white/90 p-6 shadow-lg shadow-emerald-100/30 text-sm text-stone-600" style={{ fontFamily: "satoshi-medium" }}>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-400">Controls</p>
                <p className="mt-2 text-xs text-stone-500">Preview the run order or clear the scene for another exploration.</p>
                <div className="mt-5 space-y-3">
                  <button
                    disabled={processes.length === 0}
                    onClick={calculateFCFS}
                    className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition enabled:hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
                    style={{ fontFamily: "satoshi-bold" }}
                  >
                    ▶ Visualize FCFS
                  </button>
                  <button
                    disabled={processes.length === 0}
                    onClick={resetAll}
                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-600 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                    style={{ fontFamily: "satoshi-bold" }}
                  >
                    ↺ Reset Workspace
                  </button>
                </div>
                <div className="mt-6 rounded-2xl border border-stone-100 bg-gradient-to-br from-white to-emerald-50 px-5 py-4 text-center text-xs">
                  <p className="text-stone-400">Current Queue Size</p>
                  <p className="text-4xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
                    {processes.length}
                  </p>
                </div>
              </div>

              {visualized && averages && (
                <div className="grid grid-cols-2 gap-4 text-center text-xs" style={{ fontFamily: "satoshi-medium" }}>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-5 shadow-inner shadow-emerald-100/60">
                    <p className="uppercase tracking-[0.4em] text-emerald-500">Avg WT</p>
                    <p className="mt-2 text-4xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
                      {averages.avgWT} ms
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-5 shadow-inner shadow-sky-100/60">
                    <p className="uppercase tracking-[0.4em] text-sky-500">Avg TAT</p>
                    <p className="mt-2 text-4xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
                      {averages.avgTAT} ms
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {visualized && (
          <div ref={visualizationRef} className="space-y-8">
            <div className="rounded-3xl border border-stone-100 bg-white/90 p-8 shadow-xl shadow-emerald-100/40">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-400" style={{ fontFamily: "satoshi-medium" }}>
                    Timeline
                  </p>
                  <h2 className="text-2xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
                    Gantt Projection
                  </h2>
                </div>
                <span className="rounded-full border border-stone-100 bg-stone-50 px-4 py-1 text-xs text-stone-500" style={{ fontFamily: "satoshi-medium" }}>
                  {gantt.length} slices
                </span>
              </div>
              <div className="mt-6 flex items-end gap-4 overflow-x-auto rounded-2xl border border-dashed border-stone-200 bg-gradient-to-r from-white to-emerald-50 p-6">
                {gantt.map((g, i) => (
                  <div key={i} className="min-w-[120px] text-center text-sm text-stone-700" style={{ fontFamily: "satoshi-medium" }}>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-stone-900 shadow-sm" style={{ fontFamily: "satoshi-bold" }}>
                      {g.name}
                    </div>
                    <div className="mt-2 rounded-xl border border-stone-100 bg-white px-3 py-1 font-mono text-[11px] text-stone-500">
                      {g.start} → {g.end}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-stone-100 bg-white/90 p-8 shadow-xl shadow-emerald-100/40">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-400" style={{ fontFamily: "satoshi-medium" }}>
                    Insights
                  </p>
                  <h2 className="text-2xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
                    Process Breakdown
                  </h2>
                </div>
                <span className="rounded-full border border-stone-100 bg-stone-50 px-4 py-1 text-xs text-stone-500" style={{ fontFamily: "satoshi-medium" }}>
                  {results.length} rows
                </span>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-stone-100">
                <table className="w-full text-left text-sm text-stone-600" style={{ fontFamily: "satoshi-medium" }}>
                  <thead className="bg-stone-50 text-[11px] uppercase tracking-[0.4em] text-stone-400">
                    <tr>
                      <th className="px-4 py-3">Process</th>
                      <th className="px-4 py-3">AT</th>
                      <th className="px-4 py-3">BT</th>
                      <th className="px-4 py-3">CT</th>
                      <th className="px-4 py-3">TAT</th>
                      <th className="px-4 py-3">WT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r, idx) => (
                      <tr key={r.id} className={idx % 2 === 0 ? "bg-white" : "bg-emerald-50/40"}>
                        <td className="px-4 py-3 text-stone-900" style={{ fontFamily: "satoshi-bold" }}>
                          {r.name}
                        </td>
                        <td className="px-4 py-3">{r.arrivalTime}</td>
                        <td className="px-4 py-3">{r.burstTime}</td>
                        <td className="px-4 py-3">{r.completionTime}</td>
                        <td className="px-4 py-3">{r.turnaround}</td>
                        <td className="px-4 py-3 text-amber-600" style={{ fontFamily: "satoshi-bold" }}>
                          {r.waiting}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
