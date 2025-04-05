import React, { useState, useRef } from "react";
import ReactApexChart from "react-apexcharts";
import { IoIosArrowUp } from "react-icons/io";

const ApexChart = () => {
//   const [isOpenFilter, setIsOpenFilter] = useState(false);
//   const [selectedDays, setSelectedDays] = useState("");
//   const selectFilterRef = useRef(null);
//   const handleChangeDays = (e) => setSelectedDays(e.target.value);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedDays, setSelectedDays] = useState("Last 7 days");
  const selectFilterRef = useRef(null);

  // Data for different time periods
  const chartData = {
    "Last 7 days": {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      orders: [45, 52, 38, 24, 33, 26, 21],
      income: [8500, 9200, 10100, 7200, 6900, 11500, 9800],
    },
    "Last 30 days": {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      orders: [125, 215, 325, 435],
      income: [25000, 42000, 35000, 57000],
    },
    "Last 90 days": {
      categories: ["Month 1", "Month 2", "Month 3"],
      orders: [540, 360, 480],
      income: [41000, 63000, 72000],
    },
  };

  const handleChangeDays = (e) => {
    setSelectedDays(e.target.value);
  };

  const [chartState] = useState({
    series: [
      {
        name: "Orders",
        data: chartData[selectedDays].orders,
      },
      {
        name: "Income Growth",
        data: chartData[selectedDays].income,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      colors: ["#3b82f6", "#10b981"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [3, 3],
        curve: "smooth",
      },
      title: {
        text: "Orders & Income Growth",
        align: "left",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        markers: {
          radius: 12,
        },
      },
      markers: {
        size: 5,
        hover: {
          sizeOffset: 2,
        },
      },
      xaxis: {
        categories: chartData[selectedDays].categories,
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: [
        {
          title: {
            text: "Orders",
            style: {
              color: "#3b82f6",
            },
          },
          labels: {
            formatter: function (value) {
              return value.toLocaleString();
            },
          },
        },
        {
          opposite: true,
          title: {
            text: "Income ($)",
            style: {
              color: "#10b981",
            },
          },
          labels: {
            formatter: function (value) {
              return "$" + value.toLocaleString();
            },
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (value, { seriesIndex }) {
            return seriesIndex === 1
              ? "$" + value.toLocaleString()
              : value.toLocaleString();
          },
        },
      },
      grid: {
        borderColor: "#f1f1f1",
        row: {
          colors: ["#f9f9f9", "transparent"],
          opacity: 0.5,
        },
      },
    },
  });

  return (
    <div className="chart-container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Analytics Summary</h2>
        <div className="relative w-fit">
          <select
            ref={selectFilterRef}
            className="px-4 py-2 pr-8 appearance-none outline-none bg-slate-950 text-gray-50 rounded-lg"
            onFocus={() => setIsOpenFilter(true)}
            onBlur={() => setIsOpenFilter(false)}
            onChange={handleChangeDays}
            value={selectedDays}
          >
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 90 days">Last 90 days</option>
          </select>
          <IoIosArrowUp
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-50 transition-transform duration-200 ${
              isOpenFilter ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
