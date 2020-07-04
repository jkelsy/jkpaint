import { PropertiesShape } from './properties-shape';
import { IShape } from './ishape';
import { ShapeBase } from './shape-base';

export class TCircle extends ShapeBase implements IShape {
    constructor(properties: PropertiesShape){
        super(properties);
    }

    draw(): void {
        this.context.beginPath();
        this.context.strokeStyle = this.strokeColor;
        this.context.fillStyle = this.fillColor;
        this.context.arc(this.x1, this.y1, (this.x2 - this.x1), 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
        this.context.closePath();
    }
}
