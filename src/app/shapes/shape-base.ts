import { PropertiesShape } from './properties-shape';
export class ShapeBase {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    context: CanvasRenderingContext2D;
    strokeColor: string;
    fillColor: string;

    constructor(properties: PropertiesShape){
        this.x1 = properties.initialPoint.x;
        this.y1 = properties.initialPoint.y;
        this.x2 = properties.finalPoint.x;
        this.y2 = properties.finalPoint.y;
        this.context = properties.context;
        this.strokeColor = properties.strokeColor;
        this.fillColor = properties.fillColor;
    }
}
