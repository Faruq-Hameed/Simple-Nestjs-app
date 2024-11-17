import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Get()
    findAll(): string[] {
        return this.carsService.findAll();
    }

    @Post()
    create( @Body() car: string): string{
        this.carsService.create(car);
        return `Created new car: ${car}`;
    }

}
