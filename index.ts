const colors : Array<String> = ["#673AB7", "#00C853", "#3F51B5", "#f44336", "#0D47A1"]
const scGap : number = 0.01
const backColor : string = "#BDBDBD"
const strokeFactor : number = 90
const delay : number = 50
const w : number = window.innerWidth
const h : number = window.innerHeight
const sizeFactor : number = 5

class BeakerFillStage {

    canvas : HTMLCanvasElement = document.createElement('canvas')
    context : CanvasRenderingContext2D

    initCanvas() {
        this.canvas.width = w
        this.canvas.height = h
        this.context = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    }

    render() {
        this.context.fillStyle = backColor
        this.context.fillRect(0, 0, w, h)
    }

    handleTap() {
        this.canvas.onmousedown = () => {

        }
    }

    static init() {
        const stage : BeakerFillStage = new BeakerFillStage()
        stage.initCanvas()
        stage.render()
        stage.handleTap()
    }
}

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.divideScale(scale, i, n)) * n
    }
}

class DrawingUtil {

    static drawBeaker(context : CanvasRenderingContext2D, hb : number, wb : number) {
        context.lineCap = 'round'
        context.lineWidth = Math.min(w, h) / strokeFactor
        context.beginPath()
        context.moveTo(0, -hb)
        context.lineTo(0, 0)
        context.lineTo(wb, 0)
        context.lineTo(wb, -hb)
        context.stroke()
    }

    static drawFillRect(context : CanvasRenderingContext2D, sc : number, size : number) {
        context.fillRect(0, -size * sc, size, size * sc)
    }

    static drawBFNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        const sc1 : number = ScaleUtil.divideScale(scale, 0, 3)
        const sc2 : number = ScaleUtil.divideScale(scale, 1, 3)
        const sc3 : number = ScaleUtil.divideScale(scale, 2, 3)
        const size : number = w / sizeFactor
        context.fillStyle = colors[i]
        context.strokeStyle = colors[i]
        context.save()
        context.translate(-size + (w / 2 + size / 2) * sc1 + (w / 2 - size / 2) * sc3, 9 * h / 10)
        DrawingUtil.drawBeaker(context, size, 2 * size)
        DrawingUtil.drawFillRect(context, sc2, size)
        context.restore()
    }
}
