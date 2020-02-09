const fetchEventDailyData = () => {
    return fetch('http://localhost:5555/events/daily')
    .then((response) => {
      return response.json();
    });
};
const fetchEventHourlyData = () => {
    return fetch('http://localhost:5555/events/hourly')
    .then((response) => {
      return response.json();
    });
};
const fetchStatsDaily = () => {
  return fetch('http://localhost:5555/stats/daily')
  .then((response) => {
    return response.json();
  })
}

export {
    fetchEventHourlyData,
    fetchEventDailyData,
    fetchStatsDaily
};