# Marker position update

The sample shows how to dynamically update marker position between two locations on the map. In the sample we will travel from *Washington, D.C.* to *San Francisco, California* in 20 seconds.

Lets start with previous [`custom_markers`](https://github.com/sansajn/jstest/tree/main/node/mapbox/custom_markers) sample.

Copy `index.html`, `app.js` and `public` directory to the project `marker_position` directory.

Now run the sample with

```bash
./serve
```

command and open `localhost:3000` in web browser window. You should see the same result as in a case of `custom_markers` sample (no change there yet)

![Map view with marker on the screen](docs/map_with_marker.jpg)


The approch for the `marker_position` sample is straightforward we will linear interpolate between the *Washington* and *San Francisco* locations with 

```math
p = p_b + k*(p_e - p_b)
```

formula, where `p` represents our actuall position, `k` is time based koeficient calculated as 

```math
k=t/T
``` 

where `T=20` represents travel time in seconds and `t` is simulation time. For each simulation step we will calculate new position `p` and update marker's position with `setLngLat()` function call.

So the first step is to define our from/to locations in the client part of the code (`index.html`) this way

```js
const washingtonPos = [-77.032, 38.913]
const sanFranciscoPos = [-122.414, 37.776]
```

then update `geojson` marker position to `washingtonPos` with

```js
const geojson = {
		// <the same as before>
		geometry: {
			type: 'Point',
			coordinates: washingtonPos
		},
		// <the same as before>
	}]
}
```

Instead of looping over the `geojson` features with `for` cycle, create marker with 

```js
const marker = new mapboxgl.Marker(el)
	.setLngLat(geojson.features[0].geometry.coordinates)
	.addTo(map)
```

code. 

Simulate traveling with a `setInterval()` JS call this way

```js
const dt = 1/60  // in s
const simulationDuration = 20  // in s
let t = 0  // simulation time in s

setInterval(() => {
	// calculate new marker position
	t += dt
	const k = t/simulationDuration
	const pos = [
		washingtonPos[0] + k*(sanFranciscoPos[0] - washingtonPos[0]),
		washingtonPos[1] + k*(sanFranciscoPos[1] - washingtonPos[1])
	]
	marker.setLngLat(pos)  // update marker position

	if (t >= simulationDuration)
		t = 0  // start over again

}, dt*1000)
```

where `pos` is calculated by our linear interpolation formula $p=\dots$ from the begginging of the article.

Now run the sample again with

```bash
./serve
```

command and open `localhost:3000` in web browser window. This time you should see travelling marker between *Washington, D.C.* and *San Francisco, California* locations.

https://user-images.githubusercontent.com/1478303/204267789-dfe8b230-7766-459b-ac87-b652c45303be.mp4

In the next article we will show how to provide data for  the animation from server side of the solution (instead of hardcode them in a client side).

See you soon.
