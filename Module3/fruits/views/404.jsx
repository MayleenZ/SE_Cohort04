const React = require("react");

function notFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <h2>404 </h2>
      <button>
        <a href="/fruits">Click here to go back home</a>
      </button>
    </div>
  );
}

module.exports = notFound;
