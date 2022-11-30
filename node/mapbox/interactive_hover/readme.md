# Create interactive hover effects with Mapbox GL JS

This directory contains Mapbox's [Create interactive hover effects with Mapbox GL JS](https://docs.mapbox.com/help/tutorials/create-interactive-hover-effects-with-mapbox-gl-js/) tutorial implemetnation.

map view

```js
const map = new mapboxgl.Map({
	// ...
```

UI to display earthquake info

```js
const magDisplay = document.getElementById('mag')
const locDisplay = document.getElementById('loc')
const dateDisplay = document.getElementById('date')
```

Add the earthquake data source after the map is loaded with

```js
map.on('load', () => {
	map.addSource('earthquakes', {
		type: 'geojson',
		data: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&minmagnitude=1&starttime=${sevenDaysAgo}`,
		generateId: true  // This ensures that all features have unique IDs
	})
})
```

This will not draw anything new in the map, for that we need to add a new layer.

Add the earthquake layer after the map is loaded with

```js
map.addLayer({
	id: 'earthquakes-viz',
	type: 'circle',
	source: 'earthquakes',
	paint: {
		'circle-stroke-color': '#000',
		'circle-stroke-width': 1,
		'circle-color': '#000'
  }
})
```

After this change we can see earthguake incidents as black dots in the map.

To change earthquake marker after mouse hovering define `circle-radius` and change `circle-color` paint feature for `earthquakes-viz` layer (see the code).

To see earthquake info in left top corner box, we need to handle `mousemove` and `onmouseleave` map events, see 

```js
map.on('mousemove', 'earthquakes-viz', (event) => { /* ... */ })
```

and 

```js
map.on('mouseleave', 'earthquakes-viz', () => { /* ... */ })
```

implementations, where `mouseleave` handler reset feature state after it was set in `mousemove` handler for `quakeID` marker.

