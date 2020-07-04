import { PropertiesShape } from './properties-shape';
import { ShapeBase } from './shape-base';
import { IShape } from './ishape';

export class TSquare extends ShapeBase implements IShape{
    constructor(properties: PropertiesShape){
        super(properties);
    }

    draw(): void {
        this.context.beginPath();
        this.context.strokeStyle = this.strokeColor;
        this.context.fillStyle = this.fillColor;
        this.context.rect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}
