# Image Processing API

is a project i made mainly for my personal practice and for FWD Udacity Advanced Full-Stack Web Development



## Introduction to the project

It is an API that process on stored photos to rescale them.



## How to use

use the command 'npm install' to install the dependencies



### scripts

"build": to compile the typescript files into javascript

"start": to start the server

"test": runs the jasmine unit tests

"lint": runs eslint to make sure the code style is consistent

"format": runs prettier to format



### endpoints

/image

accepts query parameters

"filename": the name of the image

"width": the width of the rescaled image in pixels

"height": the height of the rescaled image in pixels



#### examples: 

- /images/?filename=fjord
- /images/images/?filename=fjord&width=300&height=200
