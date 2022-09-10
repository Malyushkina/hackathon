import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const CustomerChart = ({ props }) => {
  return (
    <div className="chart">
      <div className="chart__chart">
        <div className="chart__logo" />
        <ApexCharts options={props.options} series={props.series}  width={props.options.chart.width} type={props.options.chart.type}/>
      </div>
    </div>
  );
};

export default CustomerChart;
