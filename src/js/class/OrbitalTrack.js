export default class OrbitalTrack {

    constructor (radius, resolution, origin) {

        radius = typeof radius !== 'undefined' ? radius : 256;
        resolution = typeof resolution !== 'undefined' ? resolution : 360;
        origin = typeof origin !== 'undefined' ? origin : [0, 0];

        this.points = [];

        for (var i = 0; i < resolution; i++) {
            this.points.push([
                Math.cos(
                    i * (
                        2 * Math.PI
                    ) / resolution
                ) * radius * gameScaleBase + origin[0],
                Math.sin(
                    i * (
                        2 * Math.PI
                    ) / resolution
                ) * radius * gameScaleBase + origin[1]
            ]);
        }

        this.radius = radius;
        this.resolution = resolution;
        this.origin = origin;

    }

    getPoint (index) {
        if (index < this.resolution) {
            return this.points[index];
        } else {
            return false;
        }
    }

    getPointByDegree (degree) {
        if (degree >= 0 && degree < 360) {
            if (degree >= 359.5) {
                degree = 0;
            }
            return this.getPoint(Math.round(degree * (this.resolution / 360)));
        } else {
            return false;
        }
    }

}
