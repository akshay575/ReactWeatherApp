var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var self = this;

    // Before Search Returns Value
    this.setState({
      isLoading: true,
      errorMessage: undefined,
    });

    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      self.setState({
        isLoading: false,
        errorMessage: err.message
      });
    })
  },
  render: function(){
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching current weather...</h3>
      }
      else if(location && temp){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError(){
      if(errorMessage){
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
