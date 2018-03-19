
# react-alert-component

A simple alert presentation component that changes styles based on props. Works great with [react-scepter-alert-decorator](https://github.com/source4societyorg/react-scepter-alert-decorator).

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-alert-component.svg?branch=master)](https://travis-ci.org/source4societyorg/react-alert-component)

[![codecov](https://codecov.io/gh/source4societyorg/react-alert-component/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-alert-component)

# Installation

    npm install @source4society/react-alert-component

or

    yarn add @source4society/react-alert-component

## accepted props

    alertType   // String, The type of alert such as info, warning, or error. This will dictate the style
    className   // Custom class name to be appended to alert. Useful for overidding the default styles.
    showIcon    // Determines whether or not a span tag with iconClass is rendered
    iconClass   // The class name for the span tag if the showIcon property is set

The message displayed by the alert is simply wrapped by the alert tag or passed as a child.