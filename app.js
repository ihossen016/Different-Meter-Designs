// CHART CONFIG
// -----------------------------
let chartConfig1 = {
  graphset: [
    {
      type: 'gauge',
      width: '60%',
      height: '100%',
      x: '20%',
      y: '0px',
      title: {
        text: 'Engine RunTime',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: 'Hours',
        bold: false,
        fontSize: '15px',
        y: '59%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        csize: '14%',
        size: '56%',
      },
      plotarea: {
        marginBottom: '20%',
      },
      scale: {
        sizeFactor: 0.9,
      },
      scale2: {
        sizeFactor: 0.55,
      },
      scaleR: {
        values: '100:0:10',
        aperture: 320,
        center: {
          visible: false,
        },
        item: {
          visible: false,
        },
        ring: {
          backgroundColor: '#02e084',
          size: '20px',
        },
        tick: {
          visible: false,
        },
      },
      scaleR2: {
        values: '0:100:10',
        aperture: 320,
        center: {
          backgroundColor: '#06ab00',
          borderColor: '#07c900',
          borderWidth: '1px',
          size: '14px',
        },
        item: {
          fontSize: '16px',
          offsetR: -1,
        },
        label: {
          text: 'text',
        },
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        ring: {
          visible: false,
        },
        tick: {
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          size: '15px',
        },
      },
      series: [
        {
          values: [runTime],
          valueBox: {
            text: '%v',
            fontColor: '#515151',
            fontSize: '28px',
            offsetY: '40px',
            placement: 'center',
          },
          backgroundColor: '#45f550',
        },
      ],
    },
  ],
}
let chartConfig2 = {
  graphset: [
    {
      type: 'gauge',
      width: '60%',
      height: '100%',
      x: '20%',
      y: '0px',
      title: {
        text: 'Engine StopTime',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: 'Hours',
        bold: false,
        fontSize: '15px',
        y: '59%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        csize: '14%',
        size: '56%',
      },
      plotarea: {
        marginBottom: '20%',
      },
      scale: {
        sizeFactor: 0.9,
      },
      scale2: {
        sizeFactor: 0.55,
      },
      scaleR: {
        values: '100:0:10',
        aperture: 320,
        center: {
          visible: false,
        },
        item: {
          visible: false,
        },
        ring: {
          backgroundColor: '#02e084',
          size: '20px',
        },
        tick: {
          visible: false,
        },
      },
      scaleR2: {
        values: '0:100:10',
        aperture: 320,
        center: {
          backgroundColor: '#06ab00',
          borderColor: '#07c900',
          borderWidth: '1px',
          size: '14px',
        },
        item: {
          fontSize: '16px',
          offsetR: -1,
        },
        label: {
          text: 'text',
        },
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        ring: {
          visible: false,
        },
        tick: {
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          size: '15px',
        },
      },
      series: [
        {
          values: [stopTime],
          valueBox: {
            text: '%v',
            fontColor: '#515151',
            fontSize: '28px',
            offsetY: '40px',
            placement: 'center',
          },
          backgroundColor: '#45f550',
        },
      ],
    },
  ],
}
let chartConfig3 = {
  graphset: [
    {
      type: 'gauge',
      width: '60%',
      height: '100%',
      x: '20%',
      y: '0px',
      title: {
        text: 'Current Meter',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: 'KWH',
        bold: false,
        fontSize: '15px',
        y: '59%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        csize: '14%',
        size: '56%',
      },
      plotarea: {
        marginBottom: '20%',
      },
      scale: {
        sizeFactor: 0.9,
      },
      scale2: {
        sizeFactor: 0.55,
      },
      scaleR: {
        values: '100:0:10',
        aperture: 320,
        center: {
          visible: false,
        },
        item: {
          visible: false,
        },
        ring: {
          backgroundColor: '#02e084',
          size: '20px',
        },
        tick: {
          visible: false,
        },
      },
      scaleR2: {
        values: '0:100:10',
        aperture: 320,
        center: {
          backgroundColor: '#06ab00',
          borderColor: '#07c900',
          borderWidth: '1px',
          size: '14px',
        },
        item: {
          fontSize: '16px',
          offsetR: -1,
        },
        label: {
          text: 'text',
        },
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        ring: {
          visible: false,
        },
        tick: {
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          size: '15px',
        },
      },
      series: [
        {
          values: [unit],
          valueBox: {
            text: '%v',
            fontColor: '#515151',
            fontSize: '28px',
            offsetY: '40px',
            placement: 'center',
          },
          backgroundColor: '#45f550',
        },
      ],
    },
  ],
}
let chartConfig5 = {
  graphset: [
    {
      type: 'gauge',
      width: '60%',
      height: '100%',
      x: '20%',
      y: '0px',
      title: {
        text: 'Production',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: 'Liter',
        bold: false,
        fontSize: '15px',
        y: '59%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        csize: '14%',
        size: '56%',
      },
      plotarea: {
        marginBottom: '20%',
      },
      scale: {
        sizeFactor: 0.9,
      },
      scale2: {
        sizeFactor: 0.55,
      },
      scaleR: {
        values: '100:0:10',
        aperture: 320,
        center: {
          visible: false,
        },
        item: {
          visible: false,
        },
        ring: {
          backgroundColor: '#02e084',
          size: '20px',
        },
        tick: {
          visible: false,
        },
      },
      scaleR2: {
        values: '0:100:10',
        aperture: 320,
        center: {
          backgroundColor: '#06ab00',
          borderColor: '#07c900',
          borderWidth: '1px',
          size: '14px',
        },
        item: {
          fontSize: '16px',
          offsetR: -1,
        },
        label: {
          text: 'text',
        },
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        ring: {
          visible: false,
        },
        tick: {
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          size: '15px',
        },
      },
      series: [
        {
          values: [production],
          valueBox: {
            text: '%v',
            fontColor: '#515151',
            fontSize: '28px',
            offsetY: '40px',
            placement: 'center',
          },
          backgroundColor: '#45f550',
        },
      ],
    },
  ],
}
let chartConfig7 = {
  graphset: [
    {
      type: 'gauge',
      width: '60%',
      height: '100%',
      x: '20%',
      y: '0px',
      title: {
        text: 'Demo',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: 'Liter',
        bold: false,
        fontSize: '15px',
        y: '59%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        csize: '14%',
        size: '56%',
      },
      plotarea: {
        marginBottom: '20%',
      },
      scale: {
        sizeFactor: 0.9,
      },
      scale2: {
        sizeFactor: 0.55,
      },
      scaleR: {
        values: '100:0:10',
        aperture: 320,
        center: {
          visible: false,
        },
        item: {
          visible: false,
        },
        ring: {
          backgroundColor: '#02e084',
          size: '20px',
        },
        tick: {
          visible: false,
        },
      },
      scaleR2: {
        values: '0:100:10',
        aperture: 320,
        center: {
          backgroundColor: '#06ab00',
          borderColor: '#07c900',
          borderWidth: '1px',
          size: '14px',
        },
        item: {
          fontSize: '16px',
          offsetR: -1,
        },
        label: {
          text: 'text',
        },
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        ring: {
          visible: false,
        },
        tick: {
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          size: '15px',
        },
      },
      series: [
        {
          values: [70],
          valueBox: {
            text: '%v',
            fontColor: '#515151',
            fontSize: '28px',
            offsetY: '40px',
            placement: 'center',
          },
          backgroundColor: '#45f550',
        },
      ],
    },
  ],
}
let chartConfig9 = {
  graphset: [
    {
      type: 'gauge',
      width: '60%',
      height: '100%',
      x: '20%',
      y: '0px',
      title: {
        text: 'Demo',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: 'Liter',
        bold: false,
        fontSize: '15px',
        y: '59%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        csize: '14%',
        size: '56%',
      },
      plotarea: {
        marginBottom: '20%',
      },
      scale: {
        sizeFactor: 0.9,
      },
      scale2: {
        sizeFactor: 0.55,
      },
      scaleR: {
        values: '100:0:10',
        aperture: 320,
        center: {
          visible: false,
        },
        item: {
          visible: false,
        },
        ring: {
          backgroundColor: '#02e084',
          size: '20px',
        },
        tick: {
          visible: false,
        },
      },
      scaleR2: {
        values: '0:100:10',
        aperture: 320,
        center: {
          backgroundColor: '#06ab00',
          borderColor: '#07c900',
          borderWidth: '1px',
          size: '14px',
        },
        item: {
          fontSize: '16px',
          offsetR: -1,
        },
        label: {
          text: 'text',
        },
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        ring: {
          visible: false,
        },
        tick: {
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          size: '15px',
        },
      },
      series: [
        {
          values: [70],
          valueBox: {
            text: '%v',
            fontColor: '#515151',
            fontSize: '28px',
            offsetY: '40px',
            placement: 'center',
          },
          backgroundColor: '#45f550',
        },
      ],
    },
  ],
}
let chartConfig4 = {
  graphset: [
    {
      type: 'bar',
      width: '50%',
      height: '100%',
      x: '25%',
      y: '0px',
      title: {
        text: 'Water Flow',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: '%',
        bold: false,
        fontSize: '15px',
        y: '76%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        barsOverlap: '100%',
        borderRadius: '2px',
        hoverState: {
          visible: false,
        },
      },
      plotarea: {
        marginTop: '10%',
        marginBottom: '30%',
      },
      scaleX: {
        visible: false,
      },
      scaleY: {
        values: '0:100:10',
        guide: {
          visible: false,
        },
        item: {
          fontSize: '16px',
          rules: [
            {
              rule: '%i % 2 == 1',
              visible: false,
            },
          ],
        },
        lineColor: 'none',
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        tick: {
          margin: '3px',
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          rules: [
            {
              lineWidth: '2px',
              rule: '%i % 2 == 1',
            },
          ],
          size: '15px',
        },
      },
      scaleY2: {
        values: '0:100:10',
        guide: {
          visible: false,
        },
        item: {
          visible: false,
        },
        lineColor: 'none',
        tick: {
          margin: '0px',
          padding: '0px',
          lineColor: '#fff',
          offsetX: '50px',
          placement: 'inner',
          rules: [
            {
              rule: '%i == 0 || %i == 10',
              visible: false,
            },
          ],
          size: '40px',
        },
      },
      series: [
        {
          values: [100],
          tooltip: {
            visble: false,
          },
          backgroundColor: '#fff',
          barWidth: '100%',
          borderColor: '#0284e0',
          borderWidth: '4px',
          maxTrackers: 0,
        },
        {
          values: [waterFlow],
          tooltip: {
            visble: false,
          },
          valueBox: {
            text: '%v',
            fontColor: '#000',
            fontSize: '28px',
            offsetY: '0px',
            placement: 'bottom-out',
          },
          backgroundColor: '#37c5f8',
          barWidth: '93%',
          maxTrackers: 0,
        },
      ],
    },
  ],
}
let chartConfig6 = {
  graphset: [
    {
      type: 'bar',
      width: '50%',
      height: '100%',
      x: '25%',
      y: '0px',
      title: {
        text: 'Water Level',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: '%',
        bold: false,
        fontSize: '15px',
        y: '76%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        barsOverlap: '100%',
        borderRadius: '2px',
        hoverState: {
          visible: false,
        },
      },
      plotarea: {
        marginTop: '10%',
        marginBottom: '30%',
      },
      scaleX: {
        visible: false,
      },
      scaleY: {
        values: '0:100:10',
        guide: {
          visible: false,
        },
        item: {
          fontSize: '16px',
          rules: [
            {
              rule: '%i % 2 == 1',
              visible: false,
            },
          ],
        },
        lineColor: 'none',
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        tick: {
          margin: '3px',
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          rules: [
            {
              lineWidth: '2px',
              rule: '%i % 2 == 1',
            },
          ],
          size: '15px',
        },
      },
      scaleY2: {
        values: '0:100:10',
        guide: {
          visible: false,
        },
        item: {
          visible: false,
        },
        lineColor: 'none',
        tick: {
          margin: '0px',
          padding: '0px',
          lineColor: '#fff',
          offsetX: '50px',
          placement: 'inner',
          rules: [
            {
              rule: '%i == 0 || %i == 10',
              visible: false,
            },
          ],
          size: '40px',
        },
      },
      series: [
        {
          values: [100],
          tooltip: {
            visble: false,
          },
          backgroundColor: '#fff',
          barWidth: '100%',
          borderColor: '#0284e0',
          borderWidth: '4px',
          maxTrackers: 0,
        },
        {
          values: [waterLevel],
          tooltip: {
            visble: false,
          },
          valueBox: {
            text: '%v',
            fontColor: '#000',
            fontSize: '28px',
            offsetY: '0px',
            placement: 'bottom-out',
          },
          backgroundColor: '#37c5f8',
          barWidth: '93%',
          maxTrackers: 0,
        },
      ],
    },
  ],
}
let chartConfig8 = {
  graphset: [
    {
      type: 'bar',
      width: '50%',
      height: '100%',
      x: '25%',
      y: '0px',
      title: {
        text: 'Cumulative Production',
        bold: false,
        fontColor: '#000',
        y: '80%',
      },
      subtitle: {
        text: 'Liter',
        bold: false,
        fontSize: '15px',
        y: '76%',
      },
      plot: {
        tooltip: {
          visible: false,
        },
        barsOverlap: '100%',
        borderRadius: '2px',
        hoverState: {
          visible: false,
        },
      },
      plotarea: {
        marginTop: '10%',
        marginBottom: '30%',
      },
      scaleX: {
        visible: false,
      },
      scaleY: {
        values: '0:100:10',
        guide: {
          visible: false,
        },
        item: {
          fontSize: '16px',
          rules: [
            {
              rule: '%i % 2 == 1',
              visible: false,
            },
          ],
        },
        lineColor: 'none',
        minorTick: {
          lineColor: '#000',
          placement: 'inner',
          size: '7px',
        },
        minorTicks: 4,
        tick: {
          margin: '3px',
          lineColor: '#000',
          lineWidth: '4px',
          placement: 'outter',
          rules: [
            {
              lineWidth: '2px',
              rule: '%i % 2 == 1',
            },
          ],
          size: '15px',
        },
      },
      scaleY2: {
        values: '0:100:10',
        guide: {
          visible: false,
        },
        item: {
          visible: false,
        },
        lineColor: 'none',
        tick: {
          margin: '0px',
          padding: '0px',
          lineColor: '#fff',
          offsetX: '50px',
          placement: 'inner',
          rules: [
            {
              rule: '%i == 0 || %i == 10',
              visible: false,
            },
          ],
          size: '40px',
        },
      },
      series: [
        {
          values: [100],
          tooltip: {
            visble: false,
          },
          backgroundColor: '#fff',
          barWidth: '100%',
          borderColor: '#0284e0',
          borderWidth: '4px',
          maxTrackers: 0,
        },
        {
          values: [cumulativeProduction],
          tooltip: {
            visble: false,
          },
          valueBox: {
            text: '%v',
            fontColor: '#000',
            fontSize: '28px',
            offsetY: '0px',
            placement: 'bottom-out',
          },
          backgroundColor: '#37c5f8',
          barWidth: '93%',
          maxTrackers: 0,
        },
      ],
    },
  ],
}

// RENDER CHARTS
// -----------------------------
zingchart.render({
  id: 'myChart1',
  data: chartConfig1,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart2',
  data: chartConfig2,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart3',
  data: chartConfig3,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart4',
  data: chartConfig4,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart5',
  data: chartConfig5,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart6',
  data: chartConfig6,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart7',
  data: chartConfig7,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart8',
  data: chartConfig8,
  height: '100%',
  width: '100%',
})
zingchart.render({
  id: 'myChart9',
  data: chartConfig9,
  height: '100%',
  width: '100%',
})
