var colorPalette = ['#DCE6EC', '#DB2B21', '#264B82', '#FEB019', '#FF4560', '#775DD0'];
const optionsPrice = {
  series: [
    {
      name: 'Средняя цена контракта',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ],
  options: {
    title: { text: 'Средняя цена контракта' },
    chart: {
      id: 'area-datetime',
      type: 'area',
      width: 400,
      height: 300,
      zoom: false,
      toolbar: { show: false }
    },

    colors: colorPalette,

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
      name: 'Средний объём контракта в категории',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ],
  options: {
    title: { text: 'Средний объём контракта в категории' },
    chart: {
      id: 'area-datetime',
      type: 'area',
      width: 400,
      height: 300,
      zoom: false,
      toolbar: { show: false }
    },

    colors: colorPalette,

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
      name: 'Среднее количество участников в торгах',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ],
  options: {
    title: { text: 'Среднее количество участников в торгах' },
    chart: {
      id: 'area-datetime',
      type: 'area',
      width: 400,
      height: 350,
      zoom: false,
      toolbar: { show: false }
    },

    colors: colorPalette,

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
    title: { text: 'Отношение количества региональных контрактов к общему количеству' },
    chart: {
      type: 'bar',
      width: 1000,
      height: 350,
      zoom: false,
      toolbar: { show: false }
    },
    colors: ['#DB2B21', '#264B82'],
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
    }
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
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
      name: 'Остальные поставщики',
      data: [13, 23, 20, 8, 13, 27, 78, 83, 67]
    }
  ],
  options: {
    title: { text: 'Отношение количества местных поставщиков к неместным в %' },
    chart: {
      type: 'bar',
      width: 550,
      height: 350,
      stacked: true,

      stackType: '100%',
      zoom: false,
      toolbar: { show: false }
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
    },
    colors: ['#DB2B21', '#264B82']
  }
};

const optionsPercent2 = {
  series: [
    {
      name: 'Региональные поставщики',
      data: [44, 55, 41, 67, 22, 43, 23, 45, 5]
    },
    {
      name: 'Остальные поставщики',
      data: [13, 23, 20, 8, 13, 27, 78, 83, 67]
    }
  ],
  options: {
    title: { text: 'Отношение количества местных поставщиков к неместным в %' },
    chart: {
      width: 550,
      height: 350,
      type: 'area',
      zoom: false,
      toolbar: { show: false }
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
    },
    colors: ['#DB2B21', '#264B82']
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
      height: 780,
      width: 550,
      toolbar: { show: false }
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
        return val;
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
        '"ГБУ ЗДРАВООХРАНЕНИЯ Г МОСКВЫ «ГКБ ИМЕНИ Д.Д. ПЛЕТНЁВА ДЕПАРТАМЕНТА ЗДРАВООХРАНЕНИЯ ГОРОДА МОСКВЫ»"',
        '"ГБУ Г МОСКВЫ СПОРТИВНО-ДОСУГОВЫЙ ЦЕНТР «РАТМИР»"',
        '"ГБКУ Г МОСКВЫ «АГЕНТСТВО ПО ЗАКУПКАМ (КОНТРАКТНАЯ СЛУЖБА) ДЕПАРТАМЕНТА ЗДРАВООХРАНЕНИЯ ГОРОДА МОСКВЫ»"',
        '"ГБОУ Г МОСКВЫ «ШКОЛА № 283»"',
        '"ГБУ КУЛЬТУРЫ Г МОСКВЫ «МУЗЕЙ «САДОВОЕ КОЛЬЦО»"',
        '"ГБУ Г МОСКВЫ «АВТОМОБИЛЬНЫЕ ДОРОГИ»"',
        '"ГБОУ Г МОСКВЫ «ШКОЛА № 1367»"',
        '"ГБОУ Г МОСКВЫ «ЦЕНТР ОБРАЗОВАНИЯ И СПОРТА «МОСКВА-98» ДЕПАРТАМЕНТА СПОРТА ГОРОДА МОСКВЫ"',
        '"ГБУ ЗДРАВООХРАНЕНИЯ Г МОСКВЫ «ДЕТСКАЯ СТОМАТОЛОГИЧЕСКАЯ ПОЛИКЛИНИКА №10 ДЕПАРТАМЕНТА ЗДРАВООХРАНЕНИЯ ГОРОДА МОСКВЫ»"',
        '"ГБУ Г МОСКВЫ "СПОРТИВНАЯ ШКОЛА ОЛИМПИЙСКОГО РЕЗЕРВА № 25" ДЕПАРТАМЕНТА СПОРТА ГОРОДА МОСКВЫ"'
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
    legend: { horizontalAlign: 'left' },
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
  series: [44, 55, 41, 17, 15, 34, 56, 72, 91, 70],
  options: {
    chart: {
      type: 'donut',
      width: 1000,
      toolbar: { show: false }
    },
    title: {
      text: 'Топ 10 товаров у заказчиков',
      align: 'left',
      floating: false
    },
    labels: [
      'Vitek VT-1886(B) пылесос',
      'Philips FC8471/01 PowerPro Compact безмешковый компактный  пылесос',
      'Philips FC9170/02 пылесос',
      'Midea VCB33A1 пылесос',
      'Scarlett SC-VC80B07, Red пылесос',
      'Samsung SC-20M257AWR пылесос',
      'Samsung SC-885HH3P пылесос',
      'Polaris PVC 1730СR, Red пылесос',
      'Samsung VCJG24LV пылесос',
      'Samsung SC-4326 пылесос'
    ],
    legend: {
      position: 'right',
      horizontalAlign: 'left'
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
      width: 550,
      toolbar: { show: false }
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
        return val;
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
        '"ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОСНАБ""',
        '"ООО "Жизнь офиса""',
        '"Индивидуальный предприниматель Кручинина Екатерина Анатольевна"',
        '"ООО "ПРИНСИПАЛ-БМ""',
        '"Общество с ограниченной ответственностью «ФУРАМА»"',
        '"ИП Стадальникас Дмитрий Валерьевич"',
        '"ИП Пивкин Даниил Владимирович"',
        '"ЗАО ФИРМА "ХОПЕР""',
        '"ООО "ТЕХАЛЬЯНС""',
        '"Индивидуальный предприниматель Просвирина Евгения Александровна"'
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
    legend: { horizontalAlign: 'left' },
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
      width: 550,
      toolbar: { show: false }
    },
    title: {
      text: 'Топ 10 товаров у поставщиков',
      align: 'left',
      floating: false
    },
    labels: [
      'Vitek VT-1886(B) пылесос',
      'Philips FC8471/01 PowerPro Compact безмешковый компактный  пылесос',
      'Philips FC9170/02 пылесос',
      'Midea VCB33A1 пылесос',
      'Scarlett SC-VC80B07, Red пылесос'
    ],
    legend: {
      position: 'bottom',
      horizontalAlign: 'left'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'left'
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
