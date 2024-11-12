import { Injectable } from '@nestjs/common';

@Injectable()

export class CatsService {
    private readonly cats = [];
    
    findAll(): string[] {
        return this.cats;
    }

    create(cat: string): void {
        this.cats.push(cat);
    }
}
