# react-alert-component

Display an alert and style based on the type of alert.

## Installation

We recommending forking this repository and using as a submodule. To use as a git submodule in your project, navigate to your components directory and run:

    git submodule add git@github.com:source4societyorg/react-alert-component.git 

Replace the url with the url of your fork as needed.

For more information on how to use submodules, refer to the [git submodule reference](https://git-scm.com/docs/git-submodule) and this article from [TechJini](http://www.techjini.com/blog/working-with-git-submodules/)

## Setup

This module depends upon a styled-component being created in your `styles` folder called `AlertStyle`. This will allow you to apply custom styling to your component on an app by app basis. The styled-component will receive props for `alertType` and `iconClass`. 

## Example

To use, simply pass the relevant props and the alert to be displayed as a child node (note: glyphicons must be installed for this example to work):

    <Alert alertType={'danger'} iconClass={'glyhpicon glyphicon-ok'}>Your alert message here </Alert>
