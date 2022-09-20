declare class DruidMapbox {
    private map;
    /**
     * 初始化页面
     * @param id
     */
    initMap(id: string): void;
    /**
     * 添加自定义marker
     */
    addMarker(): void;
}
export default DruidMapbox;
