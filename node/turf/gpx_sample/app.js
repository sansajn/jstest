// generates sample GPX file with four points
'use strict'
const fs = require('fs')
const xml2js = require('xml2js')
const turf = require('@turf/turf')

const gpxSampleFile = 'sample.gpx'
const simplifiedFile = 'simplified.gpx'

// returns gpx points as array of {lat: float, lon: float, time: Date} objects
function gpxLoadPoints(gpxFile) {
	let points = []
	try {
		 const gpxContent = fs.readFileSync(gpxFile)
		 xml2js.parseString(gpxContent, (err, journey) => {
			  if (err) return [];
			  console.assert(Array.isArray(journey.gpx.trk), 'expect array')

			  journey.gpx.trk.forEach(track => {  // for each track
					track.trkseg.forEach((segment, idx) => {  // each segment
						 console.assert(Array.isArray(segment.trkpt), 'expects array')

						 points = points.concat(segment.trkpt.map(point => {
							  return {
									lat: parseFloat(point.$.lat),
									lon: parseFloat(point.$.lon),
									time: new Date(Date.parse(point.time))
							  }
						 }))
					})
			  })
		 })
	} catch (err) {
		 console.error(err)
	}

	return points
}

// saves list of {lat, lon, time} points to a GPX file
function gpxSavePoints(points, gpxFile) {
	const now = Date.now()
	
	const gpx = {gpx: {
		$: {
			'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
			xmlns: 'http://www.topografix.com/GPX/1/1',
			'xsi:schemaLocation': 'http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd http://www.topografix.com/GPX/gpx_style/0/2 http://www.topografix.com/GPX/gpx_style/0/2/gpx_style.xsd',
			'xmlns:gpxtpx': 'http://www.garmin.com/xmlschemas/TrackPointExtension/v1',
      	'xmlns:gpxx': 'http://www.garmin.com/xmlschemas/GpxExtensions/v3',
      	'xmlns:gpx_style': 'http://www.topografix.com/GPX/gpx_style/0/2',
      	version: '1.1',
			creator: 'GPX sample app'
		},
		trk: [{
			trkseg: [{
				trkpt: points.map(point => {
					return {
						$: {lat: point.lat, lon: point.lon},
						time: new Date(now + (point.time * 1000))
							.toISOString()
					}
				})
			}]
		}]
	}}

	// convert gpx to xml
	const xmlBuilder = new xml2js.Builder()
	const xml = xmlBuilder.buildObject(gpx)

	fs.writeFile(gpxFile, xml, err => {
		if (err) console.error(err)
	})
}

const samplePoints = gpxLoadPoints(gpxSampleFile)
console.info(`GPX '${gpxSampleFile}' loaded`)
console.info(`sample shape points: ${samplePoints.length}`)

// convert sample points to geoJSON shape
const sampleShape = turf.lineString(samplePoints.map(point => {
	return [point.lon, point.lat]
}))

// compute distance
const distanceKm = turf.length(sampleShape)
console.info(`sample shape distance: ${distanceKm}km`)

// simplify sample with turf, tolerance was choosed to generate 10 geometry points
const simplified = turf.simplify(sampleShape, {tolerance: 0.000001, highQuality: false})
console.info(`simplified shape points: ${turf.coordAll(simplified).length}`)

gpxSavePoints(
	// we need points there not geoJSON
	turf.coordAll(simplified).map((point, idx) => {
		return {
			lon: point[0], 
			lat: point[1],
			time: idx
		}
	}), simplifiedFile
)

console.info(`simplified sample saved as '${simplifiedFile}'`)

console.info('done')
