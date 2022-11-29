# Measure distances

The sample is Mapbox's [Measure distances](https://docs.mapbox.com/mapbox-gl-js/example/measure) tutorial implementation.

This time Node.js and express are not required, we can do all stuff inside the webbrowser. 

The sample is all about measuring the distance between two or more points with [turf.js](https://turfjs.org/) library. See `map.on('click', ...)` implementation, line

```js
const distance = turf.length(linestring);
```

> see [`turf.length`](https://turfjs.org/docs/#length) more details

We can also see how to handle map mouse input and draw `linestring` in it.
