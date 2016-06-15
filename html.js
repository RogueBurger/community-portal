import React from 'react'
const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
    render () {
        let css;
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }}/>
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
                    />
                    <title>Looking For Gamers - Community Portal</title>
                    <link rel="shortcut icon" href={this.props.favicon}/>
                    {css}
                </head>
                <body>
                    <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }}/>
                    <script src={`/bundle.js?t=${BUILD_TIME}`}/>
                </body>
            </html>
        )
    },
})
