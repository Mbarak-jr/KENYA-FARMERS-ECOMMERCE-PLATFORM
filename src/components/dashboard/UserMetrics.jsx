import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const UserMetrics = ({ userRole = 'user' }) => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [activeTab, setActiveTab] = useState('metrics');

  const commonMetrics = [
    { 
      name: 'Active Orders', 
      value: userRole === 'farmer' ? '5' : userRole === 'buyer' ? '2' : '3',
      change: userRole === 'farmer' ? '+1' : userRole === 'buyer' ? '0' : '-1',
      changeType: userRole === 'farmer' ? 'positive' : userRole === 'buyer' ? 'neutral' : 'negative',
      icon: (
        <MetricIcon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      )
    },
    { 
      name: 'Completed', 
      value: userRole === 'farmer' ? '23' : userRole === 'buyer' ? '7' : '14',
      change: userRole === 'farmer' ? '+5' : userRole === 'buyer' ? '+2' : '+3',
      changeType: 'positive',
      icon: (
        <MetricIcon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    { 
      name: userRole === 'farmer' ? 'Revenue (KES)' : userRole === 'buyer' ? 'Total Spent (KES)' : 'Earnings (KES)', 
      value: userRole === 'farmer' ? '145,200' : userRole === 'buyer' ? '32,500' : '28,700',
      change: userRole === 'farmer' ? '+12%' : userRole === 'buyer' ? '+8%' : '+15%',
      changeType: 'positive',
      icon: (
        <MetricIcon path="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    }
  ];

  const roleSpecificMetrics = {
    farmer: [
      { 
        name: 'Active Products', 
        value: '12', 
        change: '+2', 
        changeType: 'positive',
        icon: (
          <MetricIcon path="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        )
      },
      { 
        name: 'Stock Level', 
        value: '78%', 
        change: '+5%', 
        changeType: 'positive',
        icon: (
          <MetricIcon path="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
        )
      }
    ],
    buyer: [
      { 
        name: 'Items in Cart', 
        value: '3', 
        change: '+1', 
        changeType: 'positive',
        icon: (
          <MetricIcon path="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        )
      },
      { 
        name: 'Wishlist', 
        value: '7', 
        change: '+2', 
        changeType: 'positive',
        icon: (
          <MetricIcon path="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        )
      }
    ],
    transporter: [
      { 
        name: 'Available Jobs', 
        value: '5', 
        change: '+2', 
        changeType: 'positive',
        icon: (
          <MetricIcon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        )
      },
      { 
        name: 'Completed Jobs', 
        value: '18', 
        change: '+3', 
        changeType: 'positive',
        icon: (
          <MetricIcon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        )
      }
    ]
  };

  const metrics = [...commonMetrics, ...(roleSpecificMetrics[userRole] || [])];

  // Chart data based on user role
  const getChartData = () => {
    const baseData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: userRole === 'farmer' ? 'Crop Sales (KES)' : 
                 userRole === 'buyer' ? 'Purchases (KES)' : 'Earnings (KES)',
          data: userRole === 'farmer' ? [12000, 19000, 30000, 25000, 22000, 35000] :
                userRole === 'buyer' ? [5000, 8000, 12000, 9000, 15000, 10000] :
                [8000, 12000, 10000, 15000, 18000, 22000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }
      ]
    };

    if (userRole === 'farmer') {
      baseData.datasets.push({
        label: 'Crop Yield (kg)',
        data: [150, 220, 300, 280, 350, 400],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        tension: 0.4
      });
    }

    return baseData;
  };

  const getPieData = () => {
    if (userRole === 'farmer') {
      return {
        labels: ['Maize', 'Beans', 'Vegetables', 'Fruits', 'Other'],
        datasets: [{
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      };
    } else if (userRole === 'buyer') {
      return {
        labels: ['Grains', 'Vegetables', 'Fruits', 'Dairy', 'Other'],
        datasets: [{
          data: [40, 30, 15, 10, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderWidth: 1
        }]
      };
    } else {
      return {
        labels: ['Short Haul', 'Long Haul', 'Perishables', 'Equipment', 'Other'],
        datasets: [{
          data: [45, 25, 20, 5, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderWidth: 1
        }]
      };
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">
          Agricultural Dashboard
        </h2>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-lg shadow">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex space-x-1 bg-white p-1 rounded-lg shadow">
            <button 
              onClick={() => setTimeRange('weekly')} 
              className={`px-3 py-1 text-sm rounded-md ${timeRange === 'weekly' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            >
              Weekly
            </button>
            <button 
              onClick={() => setTimeRange('monthly')} 
              className={`px-3 py-1 text-sm rounded-md ${timeRange === 'monthly' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setTimeRange('yearly')} 
              className={`px-3 py-1 text-sm rounded-md ${timeRange === 'yearly' ? 'bg-green-600 text-white' : 'text-gray-600'}`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg mb-6">
        <div className="flex overflow-x-auto pb-2 mb-4">
          <button 
            onClick={() => setActiveTab('metrics')}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-lg font-medium ${activeTab === 'metrics' ? 'bg-white text-green-700 shadow' : 'text-gray-600'}`}
          >
            Key Metrics
          </button>
          <button 
            onClick={() => setActiveTab('trends')}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-lg font-medium ${activeTab === 'trends' ? 'bg-white text-green-700 shadow' : 'text-gray-600'}`}
          >
            Market Trends
          </button>
          <button 
            onClick={() => setActiveTab('analysis')}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-lg font-medium ${activeTab === 'analysis' ? 'bg-white text-green-700 shadow' : 'text-gray-600'}`}
          >
            Crop Analysis
          </button>
          {userRole === 'transporter' && (
            <button 
              onClick={() => setActiveTab('logistics')}
              className={`whitespace-nowrap px-4 py-2 mr-2 rounded-lg font-medium ${activeTab === 'logistics' ? 'bg-white text-green-700 shadow' : 'text-gray-600'}`}
            >
              Logistics
            </button>
          )}
        </div>

        {activeTab === 'metrics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <MetricCard 
                key={metric.name}
                name={metric.name}
                value={metric.value}
                change={metric.change}
                changeType={metric.changeType}
                icon={metric.icon}
              />
            ))}
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              {userRole === 'farmer' ? 'Sales & Yield Trends' : 
               userRole === 'buyer' ? 'Purchase Trends' : 'Earnings Trend'}
            </h3>
            <div className="h-64">
              <Line 
                data={getChartData()} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    tooltip: {
                      mode: 'index',
                      intersect: false,
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }} 
              />
            </div>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {userRole === 'farmer' ? 'Crop Distribution' : 
                 userRole === 'buyer' ? 'Purchase Categories' : 'Job Types'}
              </h3>
              <div className="h-64">
                <Pie 
                  data={getPieData()} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                      }
                    }
                  }} 
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {userRole === 'farmer' ? 'Monthly Production' : 
                 userRole === 'buyer' ? 'Monthly Expenditure' : 'Monthly Jobs'}
              </h3>
              <div className="h-64">
                <Bar 
                  data={getChartData()} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'logistics' && userRole === 'transporter' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Transport Analytics</h3>
            <div className="h-64">
              <Line 
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  datasets: [
                    {
                      label: 'Completed Jobs',
                      data: [8, 12, 15, 10, 18, 20],
                      borderColor: 'rgba(75, 192, 192, 1)',
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      fill: true,
                      tension: 0.4
                    },
                    {
                      label: 'Revenue (KES)',
                      data: [12000, 18000, 22000, 15000, 25000, 30000],
                      borderColor: 'rgba(153, 102, 255, 1)',
                      backgroundColor: 'rgba(153, 102, 255, 0.2)',
                      fill: true,
                      tension: 0.4
                    }
                  ]
                }} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }} 
              />
            </div>
          </div>
        )}
      </div>

      {/* Weather/Seasonal Widget */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl shadow-lg mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Seasonal Insights</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <div className="text-3xl mb-1">🌧️</div>
            <p className="text-sm font-medium text-gray-500">Rainfall</p>
            <p className="text-lg font-bold">120mm</p>
            <p className="text-xs text-gray-500">+15% from avg</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <div className="text-3xl mb-1">🌡️</div>
            <p className="text-sm font-medium text-gray-500">Temperature</p>
            <p className="text-lg font-bold">24°C</p>
            <p className="text-xs text-gray-500">Ideal for crops</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <div className="text-3xl mb-1">🌱</div>
            <p className="text-sm font-medium text-gray-500">Planting Season</p>
            <p className="text-lg font-bold">Active</p>
            <p className="text-xs text-gray-500">Mar - Jun</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-center">
            <div className="text-3xl mb-1">💰</div>
            <p className="text-sm font-medium text-gray-500">Market Prices</p>
            <p className="text-lg font-bold">+8%</p>
            <p className="text-xs text-gray-500">Maize trending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Metric Card with hover effects
const MetricCard = ({ name, value, change, changeType, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start">
      <div className="flex-shrink-0 p-2 bg-green-100 rounded-md">
        {icon}
      </div>
      <div className="ml-4 flex-1">
        <p className="text-sm font-medium text-gray-500 truncate">{name}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-gray-900 truncate">{value}</p>
          <ChangeIndicator change={change} changeType={changeType} />
        </div>
      </div>
    </div>
  </div>
);

const ChangeIndicator = ({ change, changeType }) => {
  const colorClasses = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800'
  };

  const icon = {
    positive: '↑',
    negative: '↓',
    neutral: '→'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[changeType]}`}>
      {icon[changeType]} {change}
    </span>
  );
};

const MetricIcon = ({ path }) => (
  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);

export default UserMetrics;