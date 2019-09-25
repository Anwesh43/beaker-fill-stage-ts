const colors : Array<String> = ["#673AB7", "#00C853", "#3F51B5", "#f44336", "#0D47A1"]
const scGap : number = 0.01
const backColor : string = "#BDBDBD"
const strokeFactor : number = 90
const delay : number = 50
const w : number = window.innerWidth
const h : number = window.innerHeight

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
