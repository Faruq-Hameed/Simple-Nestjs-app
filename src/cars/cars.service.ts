import { Injectable } from '@nestjs/common';

@Injectable()

export class CarsService {
    private readonly cars = [];
    
    findAll(): string[] {
        return this.cars;
    }

    create(car: string): void {
        this.cars.push({car, id: this.cars.length +1});
    }
}
