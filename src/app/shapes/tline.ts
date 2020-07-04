import { IShape } from './ishape';
import { PropertiesShape } from './properties-shape';
import { ShapeBase } from './shape-base';

export class TLine extends ShapeBase implements IShape {

    constructor(properties: PropertiesShape){
        super(properties);
    }
        
    draw(): void {
        this.context.beginPath();
        this.context.strokeStyle = this.strokeColor;
        this.context.moveTo(this.x1, this.y1);
        this.context.lineTo(this.x2, this.y2);
        this.context.stroke();
        this.context.closePath();
    }
}
