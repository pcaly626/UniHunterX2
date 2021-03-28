import React, {Component, ChangeEvent, MouseEvent} from 'react';
import Portait from '../../../assets/portaits/rasgrim.png';
import './EncounterMap.css';

export interface EncounterMapProps {}

export interface EncounterMapState {        
    combatants: Array<Object>,
    isDrawing: boolean,
    leftMouseDown: boolean,
    rightMouseDown:boolean,
    //all strokes
    drawings: Array<Object>,
    //coordinates of our cursor
    cursor :{
        x:number,
        y:number,
        prevX:number,
        prevY:number
    },
    //distance from origin
    offset: {
        x:number,
        y:number
    },

    //zoom amount
    scale: number
}

class EncounterMap extends Component<EncounterMapState>{
    state = {
        combatants: [],
        isDrawing: false,
        leftMouseDown: false,
        rightMouseDown:false,
        //all strokes
        drawings: [],
        //coordinates of our cursor
        cursor :{
            x:0,
            y:0,
            prevX:0,
            prevY:0
        },
        //distance from origin
        offset: {
            x:0,
            y:0
        },

        //zoom amount
        scale: 1
    }

    onMouseDown = (event : MouseEvent) => {

                //left click
                if(event.button == 0){
                    this.state.leftMouseDown = true;
                    this.state.rightMouseDown = false;
                    this.state.cursor.x = event.pageX
                    this.state.cursor.prevX = event.pageX
                    this.state.cursor.y = event.pageY
                    this.state.cursor.prevY = event.pageY
                }

                //right click
                if(event.button == 2){
                    this.state.rightMouseDown = true;
                    this.state.leftMouseDown = false;
                }

            }

           onMouseMove = (event : MouseEvent) =>{
                this.state.cursor.x = event.pageX
                this.state.cursor.y = event.pageY
                const scaledX = this.toTrueX(this.state.cursor.x)
                const scaledY = this.toTrueY(this.state.cursor.y)
                const prevScaledX = this.toTrueX(this.state.cursor.prevX)
                const prevScaledY = this.toTrueY(this.state.cursor.prevY)

                if( this.state.leftMouseDown ) {
                    this.state.drawings.push({
                        x0: prevScaledX,
                        x1: scaledX,
                        y0: prevScaledY,
                        y1: scaledY
                    })

                    this.drawLine(this.state.cursor.prevX, this.state.cursor.prevY, this.state.cursor.x, this.state.cursor.y)
                }

                if( this.state.rightMouseDown ) {
                    const canvas = document.getElementById("game-board")
                    const context = canvas.getContext('2d')
                    this.state.offset.x += ( this.state.cursor.x - this.state.cursor.prevX ) / this.state.scale
                    this.state.offset.y += ( this.state.cursor.y - this.state.cursor.prevY ) / this.state.scale
                    this.redrawCanvas(canvas, context)
                }

                this.state.cursor.prevX = this.state.cursor.x
                this.state.cursor.prevY = this.state.cursor.y
            }

            onMouseUp = () => {
                this.state.leftMouseDown = false;
                this.state.rightMouseDown = false;
            }

            onMouseWheel = (event : MouseEvent) =>{
                event.preventDefault()
                const canvas = document.getElementById("game-board")
                const context = canvas.getContext('2d')
                const deltaY = event.deltaY
                const scaleAmount = -deltaY / 500
                this.state.scale = this.state.scale * (1 + scaleAmount)

                var distX = event.pageX / canvas.clientWidth
                var distY = event.pageY / canvas.clientHeight

                const unitsZoomedX = this.trueWidth(canvas) * scaleAmount
                const unitsZoomedY = this.trueHeight(canvas) * scaleAmount

                const unitsAddLeft = unitsZoomedX * distX
                const unitsAddTop = unitsZoomedY * distY

                this.state.offset.x -= unitsAddLeft
                this.state.offset.y -= unitsAddTop

                this.redrawCanvas(canvas, context)
            }

        drawLine = (x0, y0, x1, y1) =>{
            const canvas = document.getElementById("game-board")
            const context = canvas.getContext('2d')
                context.beginPath();
                context.moveTo(x0, y0);
                context.lineTo(x1, y1);
                context.strokeStyle = '#000';
                context.lineWidth = 2;
                context.stroke();
            }

        redrawCanvas = (canvas, context )=>{
                canvas.width = document.body.clientWidth
                canvas.height = document.body.clientHeight

                context.fillStyle = '#fff';
                context.fillRect(0,0, canvas.width, canvas.height)
                for( let i = 0; i < this.state.drawings.length; i++){
                    let line = this.state.drawings[i]
                    this.drawLine(
                        this.toScreenX(line.x0),
                        this.toScreenY(line.y0 ),
                        this.toScreenX(line.x1 ),
                        this.toScreenY(line.y1)
                        )
                }
            }

    toScreenX =( x : number)=> {return (x + this.state.offset.x) * this.state.scale}
    toScreenY=( y : number)=>{return (y + this.state.offset.y) * this.state.scale}
    toTrueX=( x: number)=> {return (x / this.state.scale) - this.state.offset.x}
    toTrueY=( y: number)=> {return (y / this.state.scale) - this.state.offset.y}

    trueHeight=(canvas)=>{return canvas.clientHeight / this.state.scale}
    trueWidth =(canvas) =>{return canvas.clientWidth / this.state.scale}

    render() {
        return(
            <canvas id="game-board" width="400" height="300" 
            onMouseDown={this.onMouseDown} 
            onMouseUp={this.onMouseUp} 
            onMouseMove={this.onMouseMove}
            onWheel={this.onMouseWheel} />
         );
    }
}

export default EncounterMap;
