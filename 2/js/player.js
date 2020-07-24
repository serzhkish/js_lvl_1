/**
 * Объект игрока
 */

 const player = {
     x: 0,
     y: 0,

    /**
     * Передвижение игрока
     * @param {{x: Int, y: Int}} nextPoint Следующая точка
     */
     move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
     }
 }