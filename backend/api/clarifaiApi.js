const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
	apiKey: process.env.CLARIFAI_API_KEY || 'test',
});

const recognizeFace = async image => {
    const data = await clarifaiApp.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        image
    );
    const detectedFaces = data.outputs[ 0 ].data.regions;
	if (detectedFaces) {
		return calculateFacesCoords(detectedFaces);
	}
}

const calculateFacesCoords = detectedFaces =>
	detectedFaces.map(face => {
		const coords = face.region_info.bounding_box;
		return {
			id: face.id,
			top: coords.top_row * 100,
			left: coords.left_col * 100,
			right: (1 - coords.right_col) * 100,
			bottom: (1 - coords.bottom_row) * 100,
		};
    });
    
module.exports = { recognizeFace };
