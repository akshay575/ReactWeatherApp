var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a realtime weather application build on ReactJS. Here are some of the tools used to build this app:</p>
      <ul>
        <li><a href="">ReactJS</a> - This is the Javascript Framework used.</li>
        <li><a href="">Open Weather Map</a> - It uses Open Weather Map API to retrieve current weather data by city name.</li>
      </ul>
    </div>
  );
}

module.exports = About;
