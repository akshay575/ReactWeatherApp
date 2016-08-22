var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations which you can try out:</p>
      <ol>
        <li>
          <Link to="/?location=Bangalore">Bangalore, India</Link>
        </li>
        <li>
          <Link to="/location=Texas">Texas, US</Link>
        </li>
        <li>
          <Link to="/location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
