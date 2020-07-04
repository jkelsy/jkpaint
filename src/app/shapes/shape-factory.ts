import { Constants } from './constants';
import { PropertiesShape } from './properties-shape';
import { TLine } from './tline';
import { TSquare } from './tsquare';
import { TCircle } from './tcircle';

export class ShapeFactory {
    static createShape(type: string, properties: PropertiesShape){
        switch (type) {
            case Constants.TLINE:
                return new TLine(properties);
            case Constants.TSQUARE:
                return new TSquare(properties);
            case Constants.TCIRCLE:
                return new TCircle(properties);
        }
    }
}
