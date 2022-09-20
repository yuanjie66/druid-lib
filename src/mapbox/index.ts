import mapboxGl from 'mapbox-gl'

mapboxGl.accessToken =
    'pk.eyJ1IjoibW9vcnkiLCJhIjoiY2pwOWc3ZndtMGEyejNwczRsbjZ0dTBrYSJ9.c2jSxHosxv46ksEM_VJ9Gw'

class DruidMapbox {
    private map: any = {}

    /**
     * 初始化页面
     * @param id
     */
    public initMap(id: string) {

        this.map = new mapboxGl.Map({
            container: id, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [104.15, 30.7], // starting position [lng, lat]
            zoom: 10, // starting zoom
        })
    }

    /**
     * 添加自定义marker
     */
    public addMarker() {
        const druidMark = document.createElement('div')
        druidMark.className = 'dr-marker'

        new mapboxGl.Marker({
            element: druidMark,
        })
            .setLngLat([104.15, 30.7])
            .addTo(this.map)
    }
}

export default DruidMapbox
