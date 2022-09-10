var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];
const optionsPrice = {
  series: [
    {
      name: 'Цена',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ],
  options: {
    title: { text: 'Цена' },
    chart: {
      id: 'area-datetime',
      type: 'area',
      width: 400,
      height: 300
    },

    colors: ['#DCE6EC'],

    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1
    },
    xaxis: {
      categories: [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь'
      ]
    },
    yaxis: {},
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    }
  }
};
const optionsValue = {
  series: [
    {
      name: 'Объём',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ],
  options: {
    title: { text: 'Объём' },
    chart: {
      id: 'area-datetime',
      type: 'area',
      width: 400,
      height: 300,
      zoom: false
    },

    colors: ['#DCE6EC'],

    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1
    },
    xaxis: {
      categories: [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь'
      ]
    },
    yaxis: {},
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    }
  }
};
const optionsCount = {
  series: [
    {
      name: 'Количество участников',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ],
  options: {
    title: { text: 'Количество участников' },
    chart: {
      id: 'area-datetime',
      type: 'area',
      width: 400,
      height: 350,
      zoom: false
    },

    colors: ['#DCE6EC'],

    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1
    },
    xaxis: {
      categories: [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь'
      ]
    },
    yaxis: {},
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    }
  }
};

const optionsContracts = {
  series: [
    { name: 'Всего', data: [44, 55, 41, 64, 22, 43, 21, 34, 43] },
    { name: 'Региональных', data: [53, 32, 33, 52, 13, 44, 32, 90, 67] }
  ],
  options: {
    title: { text: 'Количество местных контрактов к общему' },
    chart: {
      type: 'bar',
      width: 1000,
      height: 350,
      zoom: false
    }
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь']
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      }
    }
  }
};
const optionsPercent = {
  series: [
    {
      name: 'Региональные поставщики',
      data: [44, 55, 41, 67, 22, 43, 23, 45, 5]
    },
    {
      name: 'Общее количество поставщиков',
      data: [13, 23, 20, 8, 13, 27, 78, 83, 67]
    }
  ],
  options: {
    title: { text: 'Количество местных поставщиков к общему в %' },
    chart: {
      type: 'bar',
      width: 550,
      height: 350,
      stacked: true,
      zoom: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2
      }
    },
    xaxis: {
      categories: [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь'
      ]
    },
    legend: {
      position: 'bottom'
    },
    fill: {
      opacity: 1
    }
  }
};

const optionsPercent2 = {
  series: [
    {
      name: 'Региональные поставщики',
      data: [44, 55, 41, 67, 22, 43, 23, 45, 5]
    },
    {
      name: 'Общее количество поставщиков',
      data: [13, 23, 20, 8, 13, 27, 78, 83, 67]
    }
  ],
  options: {
    title: { text: 'Количество местных поставщиков к общему в %' },
    chart: {
      width: 550,
      height: 350,
      type: 'area',
      zoom: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь'
      ]
    },

    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  }
};
const optionsTopSupplierValue = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ],
  options: {
    chart: {
      type: 'bar',
      height: 380,
      width: 550
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        }
      }
    },
    colors: [
      '#33b2df',
      '#546E7A',
      '#d4526e',
      '#13d8aa',
      '#A5978B',
      '#2b908f',
      '#f9a3a4',
      '#90ee7e',
      '#f48024',
      '#69d2e7'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'India'
      ]
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    title: {
      text: 'Топ 10 заказчиков по объёму',
      align: 'left',
      floating: true
    },
    subtitle: {
      text: 'Category Names as DataLabels inside bars',
      align: 'center'
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '';
          }
        }
      }
    }
  }
};
const optionsTopSupplierGoods = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
      width: 550
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  }
};
const optionsTopCustomersValue = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ],
  options: {
    chart: {
      type: 'bar',
      height: 380,
      width: 550
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        }
      }
    },
    colors: [
      '#33b2df',
      '#546E7A',
      '#d4526e',
      '#13d8aa',
      '#A5978B',
      '#2b908f',
      '#f9a3a4',
      '#90ee7e',
      '#f48024',
      '#69d2e7'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'India'
      ]
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    title: {
      text: 'Топ 10 заказчиков по объёму',
      align: 'left',
      floating: true
    },
    subtitle: {
      text: 'Category Names as DataLabels inside bars',
      align: 'center'
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '';
          }
        }
      }
    }
  }
};
const optionsTopCustomersGoods = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
      width: 550
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  }
};
// const optionsDifferentPrice;
export {
  optionsPrice,
  optionsValue,
  optionsCount,
  optionsContracts,
  optionsPercent,
  optionsPercent2,
  optionsTopSupplierValue,
  optionsTopSupplierGoods,
  optionsTopCustomersValue,
  optionsTopCustomersGoods
};
