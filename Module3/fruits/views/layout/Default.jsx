const React = require('react');


function DefaultLayout(props) {
    const { title, children } = props;
    return(
        <html>
            <head>
                <title>{title}</title>
            </head>
<nav>
  <a href='/fruits'>Home</a>
</nav>
            <body>
                <h1>{title}</h1>

                {children}
            </body>
        </html>
    )
}

module.exports = DefaultLayout;

//This is a higher order function where we are going to take this component and wrap it around other stuff that we want to pertains to this layout. whatever we pass <DefaultLayout title = "Hello"> This would be the prop that would be used on our page within another jsx file. The children would be whatever is in the body after the title. We can see the use of this on Index.js , Show.js and will show the title of our page