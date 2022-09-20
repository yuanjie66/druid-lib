import React from 'react'
// 打包目录
const { DruidMapbox } = require('dist/index')
import 'dist/style/index.css'
// src目录
// import { DruidMapbox } from '@@/index'
// import '@@/assets/style/style.css'
// 添加mapbox-gl的样式
import 'mapbox-gl/dist/mapbox-gl.css'
import './index.less'

const Home = () => {
    React.useEffect(() => {
        const map = new DruidMapbox()
        map.initMap('home-map')
        map.addMarker()
    }, [])

    return (
        <div className="home">
            <div id="home-map" />
        </div>
    )
}

export default Home
