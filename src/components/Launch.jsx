import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { ipcRenderer } from 'electron';
import Logo from '../assets/app-logo.png';

export default function Launch() {
  const [brokers, setBrokers] = useState(1);
  const [metrics, setMetrics] = useState({
    broker_hard_disk_usage: [],
    broker_jvm_os: [],
    broker_performance: [],
    broker_zookeeper: [],
    cluster_healthcheck: [],
    cluster_replication: [],
    topics_logs: [],
  });
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    ipcRenderer.on('docker:closed', () => {
      ReactDOM.render(
        <>
          <h2>Is Docker running?</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => document.getElementById('loading').remove()}
          >
            Try Again
          </Button>
        </>,
        document.getElementById('loading')
      );
    });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const dashboard in metrics) {
      if (!metrics[dashboard].length) delete metrics[dashboard];
    }
    if (emailDisabled) {
      ipcRenderer.send('preferences:submit', { brokers, metrics });
    } else {
      ipcRenderer.send('preferences:submit', { brokers, metrics, email });
    }
    const loadingScreen = document.createElement('div');
    loadingScreen.setAttribute('id', 'loading');
    const loadingText = document.createElement('h2');
    loadingText.innerText = 'Launching Cluster';
    const loadingAnimation = document.createElement('img');
    loadingAnimation.setAttribute(
      'src',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'
    );
    loadingScreen.append(loadingAnimation, loadingText);
    document.body.append(loadingScreen);
  };

  const handleBrokersChange = (event) => {
    setBrokers(event.target.value);
  };

  const handleMetricsChange = (event) => {
    const dashboard =
      event.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.id;
    if (event.target.checked) {
      const dashboardMetrics = [...metrics[dashboard]];
      dashboardMetrics.push(event.target.name);
      setMetrics({
        ...metrics,
        [dashboard]: dashboardMetrics,
      });
    } else {
      const dashboardMetrics = new Set([...metrics[dashboard]]);
      dashboardMetrics.delete(event.target.name);
      setMetrics({
        ...metrics,
        [dashboard]: Array.from(dashboardMetrics),
      });
    }
  };

  return (
    <center>
      <div id="launch-header">
        <img src={Logo}></img>
      </div>
      <form style={{ padding: '0px 40px' }} onSubmit={handleSubmit}>
        <h2>Cluster Broker Count</h2> 
        <InputLabel id="demo-simple-select-label">Brokers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brokers}
          label="Age"
          sx={{ mb: 3 }}
          onChange={handleBrokersChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h2>Metrics to Track</h2>
        <FormGroup
          sx={{ mb: 4 }}
          onChange={handleMetricsChange}
          id="broker_hard_disk_usage"
        >
          <FormLabel>Hard Disk Usage</FormLabel>
          <Grid container direction="row">
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="global_topics_size" />}
                label="Global topics size"
              />
            </Grid>
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="log_size_per_broker" />}
                label="Log size per broker"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <FormGroup
          sx={{ mb: 4 }}
          onChange={handleMetricsChange}
          id="broker_jvm_os"
        >
          <FormLabel>Java Virtual Machine</FormLabel>
          <Grid container direction="row">
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="memory_usage" />}
                label="Memory usage"
              />
              <FormControlLabel
                control={<Checkbox name="garbage_collection" />}
                label="Garbage collection"
              />
              <FormControlLabel
                control={<Checkbox name="cpu_usage" />}
                label="CPU usage"
              />
            </Grid>
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="open_file_descriptors" />}
                label="Open file descriptors"
              />
              <FormControlLabel
                control={<Checkbox name="available_memory" />}
                label="Available memory"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <FormGroup
          sx={{ mb: 4 }}
          onChange={handleMetricsChange}
          id="broker_performance"
        >
          <FormLabel>Broker Performance</FormLabel>{' '}
          <Grid container direction="row">
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="request_total_time" />}
                label="Total request time"
              />
              <FormControlLabel
                control={<Checkbox name="idle_percent" />}
                label="Idle time percent"
              />
              <FormControlLabel
                control={<Checkbox name="request_rate" />}
                label="Request rate"
              />
            </Grid>
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="queue_size" />}
                label="Queue size"
              />
              <FormControlLabel
                control={<Checkbox name="queue_time" />}
                label="Queue time"
              />
              <FormControlLabel
                control={<Checkbox name="time_placeholder" />}
                label="Time placeholder"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <FormGroup
          sx={{ mb: 4 }}
          onChange={handleMetricsChange}
          id="broker_zookeeper"
        >
          <FormLabel>Zookeeper</FormLabel>
          <Grid container direction="row">
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="zookeeper_metrics" />}
                label="Zookeeper metrics"
              />
            </Grid>
            <Grid display="flex" direction="column" xs={6}></Grid>
          </Grid>
        </FormGroup>
        <FormGroup
          sx={{ mb: 4 }}
          onChange={handleMetricsChange}
          id="cluster_healthcheck"
        >
          <FormLabel>Cluster Health</FormLabel>
          <Grid container direction="row">
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="core_healthcheck" />}
                label="Core health stats"
              />
              <FormControlLabel
                control={<Checkbox name="throughput_io" />}
                label="Throughput I/O"
              />
            </Grid>
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="isr_count_change" />}
                label="In-sync-replica issues"
              />
              <FormControlLabel
                control={<Checkbox name="leaders_partitions" />}
                label="Partition/leader data"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <FormGroup
          sx={{ mb: 4 }}
          onChange={handleMetricsChange}
          id="cluster_replication"
        >
          <FormLabel>Cluster Replication</FormLabel>
          <Grid container direction="row">
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="replication_io" />}
                label="Replication I/O"
              />
              <FormControlLabel
                control={<Checkbox name="replication_lag" />}
                label="Replication lag"
              />
            </Grid>
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="replica_fetcher" />}
                label="Replica fetchers"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <FormGroup
          sx={{ mb: 4 }}
          onChange={handleMetricsChange}
          id="topics_logs"
        >
          <FormLabel>Logs</FormLabel>
          <Grid container direction="row">
            <Grid display="flex" direction="column" xs={6}>
              <FormControlLabel
                control={<Checkbox name="log_info" />}
                label="Key log info"
              />
            </Grid>
          </Grid>
        </FormGroup>
        <h2>Alerting</h2>
        <FormGroup sx={{ mb: 4 }}>
          <FormControlLabel
            control={<Checkbox name="log_info" />}
            label="Email me about key cluster issues"
            onChange={() => setEmailDisabled(!emailDisabled)}
          />
          <TextField
            disabled={emailDisabled}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(text) => setEmail(text.target.value)}
          />
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </center>
  );
}
