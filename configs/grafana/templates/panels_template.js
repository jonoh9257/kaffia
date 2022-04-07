module.exports = {
  broker_hard_disk_usage: {
    global_topics_size: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 9,
          w: 12,
          x: 0,
          y: 0,
        },
        id: 2,
        legend: {
          alignAsTable: true,
          avg: false,
          current: true,
          max: false,
          min: false,
          rightSide: true,
          show: true,
          sort: 'current',
          sortDesc: true,
          total: false,
          values: true,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: true,
        steppedLine: false,
        targets: [
          {
            expr: 'sum(kafka_log_size{env="$env"}) by (topic)',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{topic}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Global Topics Size (including replicas)',
        tooltip: {
          shared: true,
          sort: 1,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'decbytes',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 9,
          w: 12,
          x: 12,
          y: 0,
        },
        id: 5,
        legend: {
          alignAsTable: true,
          avg: false,
          current: true,
          max: false,
          min: false,
          rightSide: true,
          show: true,
          total: false,
          values: true,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'sum(sum(kafka_log_size{env="$env"}) by (topic, partition) / sum(kafka_cluster_partition_replicascount{env="$env"}) by(partition, topic)) by (topic)',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{topic}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Global Topics Size (without replication)',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'decbytes',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
    log_size_per_broker: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 7,
          w: 12,
          x: 0,
          y: 9,
        },
        id: 3,
        legend: {
          alignAsTable: false,
          avg: false,
          current: false,
          max: false,
          min: false,
          rightSide: false,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: true,
        steppedLine: false,
        targets: [
          {
            expr: 'sum(kafka_log_size{env="$env"}) by (instance)',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Log Size Per Broker (including replicas)',
        tooltip: {
          shared: true,
          sort: 1,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'decbytes',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
  },
  broker_jvm_os: {
    memory_usage: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 7,
          w: 7,
          x: 0,
          y: 0,
        },
        id: 8,
        legend: {
          alignAsTable: false,
          avg: false,
          current: false,
          max: false,
          min: false,
          rightSide: false,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_non_heap_usage{env="$env", type="used"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}} ',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'JVM Memory Used (Non-Heap)',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'decbytes',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 7,
          w: 8,
          x: 7,
          y: 0,
        },
        id: 6,
        legend: {
          alignAsTable: false,
          avg: false,
          current: false,
          max: false,
          min: false,
          rightSide: false,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_heap_usage{env="$env", type="used"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'JVM Memory Used (Heap)',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'decbytes',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
    garbage_collection: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 7,
          w: 9,
          x: 15,
          y: 0,
        },
        id: 10,
        legend: {
          alignAsTable: true,
          avg: false,
          current: false,
          max: false,
          min: false,
          rightSide: true,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_gc_collection_time{env="$env"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}} / {{name}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'GC Process Time',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'ms',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
    cpu_usage: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 5,
          w: 12,
          x: 0,
          y: 7,
        },
        id: 4,
        legend: {
          avg: false,
          current: false,
          max: false,
          min: false,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_os_systemcpuload{env="$env"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'CPU',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            decimals: null,
            format: 'percentunit',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 5,
          w: 12,
          x: 12,
          y: 7,
        },
        id: 11,
        legend: {
          avg: false,
          current: false,
          max: false,
          min: false,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_os_processcpuload{env="$env"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Process CPU',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            decimals: null,
            format: 'percentunit',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
    open_file_descriptors: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        fill: 1,
        gridPos: {
          h: 5,
          w: 12,
          x: 0,
          y: 12,
        },
        id: 2,
        legend: {
          alignAsTable: true,
          avg: false,
          current: true,
          max: false,
          min: false,
          rightSide: true,
          show: true,
          total: false,
          values: true,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_os_openfiledescriptorcount{env="$env"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Open File Descriptors',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
    available_memory: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        description: 'The amount of free physical memory in bytes.',
        fill: 1,
        gridPos: {
          h: 5,
          w: 6,
          x: 12,
          y: 12,
        },
        id: 13,
        legend: {
          avg: false,
          current: false,
          max: false,
          min: false,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_os_freephysicalmemorysize{env="$env"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Free Physical Memory',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'decbytes',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        description:
          'The amount of virtual memory that is guaranteed to be available to the running process in bytes',
        fill: 1,
        gridPos: {
          h: 5,
          w: 6,
          x: 18,
          y: 12,
        },
        id: 14,
        legend: {
          avg: false,
          current: false,
          max: false,
          min: false,
          show: true,
          total: false,
          values: false,
        },
        lines: true,
        linewidth: 1,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_jvm_os_committedvirtualmemorysize{env="$env"}',
            format: 'time_series',
            intervalFactor: 1,
            legendFormat: '{{instance}}',
            refId: 'A',
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Available Virtual Memory',
        tooltip: {
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            decimals: null,
            format: 'decbytes',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            decimals: null,
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
  },
  broker_performance: {
    request_total_time: [
      {
        aliasColors: {},
        bars: false,
        dashLength: 10,
        dashes: false,
        datasource: 'Prometheus',
        editable: true,
        error: false,
        fill: 1,
        grid: {},
        gridPos: {
          h: 8,
          w: 15,
          x: 0,
          y: 1,
        },
        id: 1,
        isNew: true,
        legend: {
          alignAsTable: true,
          avg: false,
          current: true,
          max: false,
          min: false,
          rightSide: true,
          show: true,
          total: false,
          values: true,
        },
        lines: true,
        linewidth: 2,
        links: [],
        nullPointMode: 'null',
        percentage: false,
        pointradius: 5,
        points: false,
        renderer: 'flot',
        seriesOverrides: [],
        spaceLength: 10,
        stack: false,
        steppedLine: false,
        targets: [
          {
            expr: 'kafka_network_request_metrics_time_ms{instance=~"$instance", request=~"$request", aggregate=~"Mean", scope=~"Total",env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            legendFormat: '{{instance}} / {{ aggregate}}',
            refId: 'A',
            step: 10,
          },
          {
            expr: 'kafka_network_request_metrics_time_ms{instance=~"$instance", request=~"$request", aggregate=~"99thPercentile", scope=~"Total",env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            legendFormat: '{{instance}} / {{ aggregate}}',
            refId: 'B',
            step: 10,
          },
          {
            expr: 'kafka_network_request_metrics_time_ms{instance=~"$instance", request=~"$request", aggregate=~"75thPercentile", scope=~"Total",env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            legendFormat: '{{instance}} / {{ aggregate}}',
            refId: 'C',
            step: 10,
          },
        ],
        thresholds: [],
        timeFrom: null,
        timeShift: null,
        title: 'Request Total Time Ms',
        tooltip: {
          msResolution: false,
          shared: true,
          sort: 0,
          value_type: 'individual',
        },
        type: 'graph',
        xaxis: {
          buckets: null,
          mode: 'time',
          name: null,
          show: true,
          values: [],
        },
        yaxes: [
          {
            format: 'ms',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
          {
            format: 'short',
            label: null,
            logBase: 1,
            max: null,
            min: null,
            show: true,
          },
        ],
        yaxis: {
          align: false,
          alignLevel: null,
        },
      },
    ],
    idle_percent: [
      {
        cacheTimeout: null,
        colorBackground: false,
        colorValue: false,
        colors: [
          'rgba(245, 54, 54, 0.9)',
          'rgba(237, 129, 40, 0.89)',
          'rgba(50, 172, 45, 0.97)',
        ],
        datasource: 'Prometheus',
        decimals: null,
        editable: true,
        error: false,
        format: 'percentunit',
        gauge: {
          maxValue: 1,
          minValue: 0,
          show: true,
          thresholdLabels: false,
          thresholdMarkers: true,
        },
        gridPos: {
          h: 4,
          w: 3,
          x: 15,
          y: 1,
        },
        id: 16,
        interval: null,
        isNew: true,
        links: [],
        mappingType: 1,
        mappingTypes: [
          {
            name: 'value to text',
            value: 1,
          },
          {
            name: 'range to text',
            value: 2,
          },
        ],
        maxDataPoints: 100,
        nullPointMode: 'connected',
        nullText: null,
        postfix: '',
        postfixFontSize: '50%',
        prefix: '',
        prefixFontSize: '50%',
        rangeMaps: [
          {
            from: 'null',
            text: 'N/A',
            to: 'null',
          },
        ],
        sparkline: {
          fillColor: 'rgba(31, 118, 189, 0.18)',
          full: false,
          lineColor: 'rgb(31, 120, 193)',
          show: true,
        },
        tableColumn: '',
        targets: [
          {
            expr: 'kafka_network_socket_server_processor_avg_idle_percent{instance=~"$instance",env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            refId: 'A',
            step: 60,
          },
        ],
        thresholds: '0.3,0.5,0.8',
        title: 'Network Socket Avg Idle Percent',
        type: 'singlestat',
        valueFontSize: '80%',
        valueMaps: [
          {
            op: '=',
            text: 'N/A',
            value: 'null',
          },
        ],
        valueName: 'current',
      },
      {
        cacheTimeout: null,
        colorBackground: false,
        colorValue: false,
        colors: [
          'rgba(245, 54, 54, 0.9)',
          'rgba(237, 129, 40, 0.89)',
          'rgba(50, 172, 45, 0.97)',
        ],
        datasource: 'Prometheus',
        decimals: null,
        editable: true,
        error: false,
        format: 'percentunit',
        gauge: {
          maxValue: 1,
          minValue: 0,
          show: true,
          thresholdLabels: false,
          thresholdMarkers: true,
        },
        gridPos: {
          h: 4,
          w: 3,
          x: 18,
          y: 1,
        },
        id: 15,
        interval: null,
        isNew: true,
        links: [],
        mappingType: 1,
        mappingTypes: [
          {
            name: 'value to text',
            value: 1,
          },
          {
            name: 'range to text',
            value: 2,
          },
        ],
        maxDataPoints: 100,
        nullPointMode: 'connected',
        nullText: null,
        postfix: '',
        postfixFontSize: '50%',
        prefix: '',
        prefixFontSize: '50%',
        rangeMaps: [
          {
            from: 'null',
            text: 'N/A',
            to: 'null',
          },
        ],
        sparkline: {
          fillColor: 'rgba(31, 118, 189, 0.18)',
          full: false,
          lineColor: 'rgb(31, 120, 193)',
          show: true,
        },
        tableColumn: '',
        targets: [
          {
            expr: 'kafka_server_request_handler_avg_idle_percent{instance=~"$instance", aggregate=~"OneMinuteRate",env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            refId: 'A',
            step: 60,
          },
        ],
        thresholds: '0.3,0.5,0.8',
        title: 'Request Handler Avg Idle Percent',
        type: 'singlestat',
        valueFontSize: '80%',
        valueMaps: [
          {
            op: '=',
            text: 'N/A',
            value: 'null',
          },
        ],
        valueName: 'current',
      },
    ],
    request_rate: [
      {
        cacheTimeout: null,
        colorBackground: false,
        colorValue: true,
        colors: [
          'rgba(245, 54, 54, 0.9)',
          'rgba(237, 129, 40, 0.89)',
          'rgba(50, 172, 45, 0.97)',
        ],
        datasource: 'Prometheus',
        editable: true,
        error: false,
        format: 'none',
        gauge: {
          maxValue: 100,
          minValue: 0,
          show: false,
          thresholdLabels: false,
          thresholdMarkers: true,
        },
        gridPos: {
          h: 4,
          w: 3,
          x: 21,
          y: 1,
        },
        id: 12,
        interval: null,
        isNew: true,
        links: [],
        mappingType: 1,
        mappingTypes: [
          {
            name: 'value to text',
            value: 1,
          },
          {
            name: 'range to text',
            value: 2,
          },
        ],
        maxDataPoints: 100,
        nullPointMode: 'connected',
        nullText: null,
        postfix: '',
        postfixFontSize: '50%',
        prefix: '',
        prefixFontSize: '50%',
        rangeMaps: [
          {
            from: 'null',
            text: 'N/A',
            to: 'null',
          },
        ],
        sparkline: {
          fillColor: 'rgba(31, 118, 189, 0.18)',
          full: false,
          lineColor: 'rgb(31, 120, 193)',
          show: false,
        },
        tableColumn: '',
        targets: [
          {
            expr: 'kafka_network_request_per_sec{aggregate=~"OneMinuteRate",instance=~"$instance",request=~"$request",env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            legendFormat: '',
            metric: '',
            refId: 'A',
            step: 60,
          },
        ],
        thresholds: '',
        title: 'Requests Per Sec',
        type: 'singlestat',
        valueFontSize: '80%',
        valueMaps: [
          {
            op: '=',
            text: 'N/A',
            value: 'null',
          },
        ],
        valueName: 'avg',
      },
    ],
    queue_size: [
      {
        cacheTimeout: null,
        colorBackground: false,
        colorValue: true,
        colors: [
          'rgba(245, 54, 54, 0.9)',
          'rgba(237, 129, 40, 0.89)',
          'rgba(50, 172, 45, 0.97)',
        ],
        datasource: 'Prometheus',
        editable: true,
        error: false,
        format: 'none',
        gauge: {
          maxValue: 100,
          minValue: 0,
          show: false,
          thresholdLabels: false,
          thresholdMarkers: true,
        },
        gridPos: {
          h: 4,
          w: 3,
          x: 15,
          y: 5,
        },
        id: 10,
        interval: null,
        isNew: true,
        links: [],
        mappingType: 1,
        mappingTypes: [
          {
            name: 'value to text',
            value: 1,
          },
          {
            name: 'range to text',
            value: 2,
          },
        ],
        maxDataPoints: 100,
        nullPointMode: 'connected',
        nullText: null,
        postfix: '',
        postfixFontSize: '50%',
        prefix: '',
        prefixFontSize: '50%',
        rangeMaps: [
          {
            from: 'null',
            text: 'N/A',
            to: 'null',
          },
        ],
        sparkline: {
          fillColor: 'rgba(31, 118, 189, 0.18)',
          full: true,
          lineColor: 'rgb(31, 120, 193)',
          show: true,
        },
        tableColumn: '',
        targets: [
          {
            expr: 'kafka_network_request_channel_queue_size{instance=~"$instance", queue=~"Response",env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            legendFormat: '{{instance}}',
            metric: '',
            refId: 'A',
            step: 60,
          },
        ],
        thresholds: '0,50,1000',
        title: 'Response Queue Size',
        type: 'singlestat',
        valueFontSize: '80%',
        valueMaps: [
          {
            op: '=',
            text: 'N/A',
            value: 'null',
          },
        ],
        valueName: 'avg',
      },
      {
        cacheTimeout: null,
        colorBackground: false,
        colorValue: true,
        colors: [
          'rgba(245, 54, 54, 0.9)',
          'rgba(237, 129, 40, 0.89)',
          'rgba(50, 172, 45, 0.97)',
        ],
        datasource: 'Prometheus',
        editable: true,
        error: false,
        format: 'none',
        gauge: {
          maxValue: 100,
          minValue: 0,
          show: false,
          thresholdLabels: false,
          thresholdMarkers: true,
        },
        gridPos: {
          h: 4,
          w: 3,
          x: 18,
          y: 5,
        },
        id: 9,
        interval: null,
        isNew: true,
        links: [],
        mappingType: 1,
        mappingTypes: [
          {
            name: 'value to text',
            value: 1,
          },
          {
            name: 'range to text',
            value: 2,
          },
        ],
        maxDataPoints: 100,
        nullPointMode: 'connected',
        nullText: null,
        postfix: '',
        postfixFontSize: '50%',
        prefix: '',
        prefixFontSize: '50%',
        rangeMaps: [
          {
            from: 'null',
            text: 'N/A',
            to: 'null',
          },
        ],
        sparkline: {
          fillColor: 'rgba(31, 118, 189, 0.18)',
          full: true,
          lineColor: 'rgb(31, 120, 193)',
          show: true,
        },
        tableColumn: '',
        targets: [
          {
            expr: 'kafka_network_request_channel_queue_size{instance=~"$instance", queue=~"Request", env="$env"}',
            format: 'time_series',
            intervalFactor: 2,
            legendFormat: '{{instance}}',
            metric: '',
            refId: 'A',
            step: 60,
          },
        ],
        thresholds: '0,50,1000',
        title: 'Request Queue Size',
        type: 'singlestat',
        valueFontSize: '80%',
        valueMaps: [
          {
            op: '=',
            text: 'N/A',
            value: 'null',
          },
        ],
        valueName: 'avg',
      },
    ],
  },
  broker_zookeeper: {},
  cluster_healthcheck: {},
  cluster_replication: {},
  topics_logs: {},
};