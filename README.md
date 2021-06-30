# Simple Gallery

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Furture Development](#future-development)
- [Technical Decisions](#technical-decisions)

## Description

A simple gallery application. This web app loads photo information from a JSON file and displays the photos in a grid. Users can click on a photo to see the large version of the photo, then click on the window to go back to the grid view.

## Requirements

As provided by Refind:

The application must...

- show photos in a grid view on initial load
- support a full-screen mode
  - when the user clicks on an image, it will show the entire image fullscreen
  - when the user clicks on a 'close' button or the background, it will close the fullscreen image and return to the grid
- work in Chrome; we will not be evaluating other browsers for compatibility
- support smartphone/tablet (<800px wide) and desktop viewports
- query an API for a set of photos
  - sample data is provided in the attached photos.json, but you must access it via an http request, as if it was an API endpoint
- use only vanilla JavaScript; we won't accept solutions that use frameworks like React, Vue, jQuery, etc.
  - ES6 and any required polyfills are perfectly acceptable, but not required


# Future Development

- I would make the grid view more consistent looking for different screen sizes (padding, centering).
- Use a different photo size for the overlay photo to see if that makes it quicker to load.
- Be able to go to the next large photo while in the large photo mode.
- Refactor code so it's more modular and self explanatory.
- For a lot of images (maybe of 10), do a slow load or have multiple pages.

# Technical Decisions

- For the loading of photos from a JSON file, since a HTTP request was required I used XMLHttpRequest. It can easily be changed to use a url instead of a local file.
- For the display I used flex rows and columns to be more flexible with the incoming photos since a grid is more rigid when defined. I'm sure there is a way to dynamically create the grid but I thought this would be quicker.
- The close button was not included but the user can click on the window to close the large image view. This is common on websites.
