import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IShape } from '../shapes/ishape';
import { PropertiesShape } from '../shapes/properties-shape';
import { ShapeFactory } from '../shapes/shape-factory';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D;
  initialPoint: any;
  finalPoint: any;
  rect: any;
  drawing = false;
  shapeList: any = [];
  shape: IShape;
  selectedShape: string;
  strokeColor: string;
  fillColor: string;

  constructor() { }

  ngOnInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.rect = this.canvas.nativeElement.getBoundingClientRect();
    this.strokeColor = 'black';
    this.fillColor = 'white';
  }

  getPosition(event) {
    const {pageX, pageY} = event.touches ? event.touches[0] : event;
    const x = pageX - this.canvas.nativeElement.offsetLeft - 120;
    const y = pageY - this.canvas.nativeElement.offsetTop - 120;
    return { x, y };
  }

  onCanvasMouseDown(event: MouseEvent): void {
    this.initialPoint = this.getPosition(event);
    this.drawing = true;
  }

  onCanvasMouseMove(event: MouseEvent): void {
    if (this.drawing === true){

      this.finalPoint = this.getPosition(event);
      this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.redraw();

      const properties: PropertiesShape = {
        context: this.context,
        initialPoint: this.initialPoint,
        finalPoint: this.finalPoint,
        strokeColor: this.strokeColor,
        fillColor: this.fillColor,
      };

      this.shape = ShapeFactory.createShape(this.selectedShape, properties);
      this.shape.draw();
    }
  }

  onCanvasMouseUp(event: MouseEvent): void {
    this.finalPoint = this.getPosition(event);
    this.drawing = false;
    this.shapeList.push(this.shape);
  }

  redraw() {
    for (const element of this.shapeList) {
      element.draw();
    }
  }

  onClickShape(selected: string){
    this.selectedShape = selected;
  }
}
