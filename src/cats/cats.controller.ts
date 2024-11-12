import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Get()
    findAll(): string[] {
        return this.catsService.findAll();
    }

    @Post()
    create( @Body() cat: string): string{
        this.catsService.create(cat);
        return `Created new cat: ${cat}`;
    }

}