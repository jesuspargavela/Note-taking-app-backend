import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
  private tags = [
    'Cooking',
    'Dev',
    'Fitness',
    'Health',
    'Personal',
    'React',
    'Recipes',
    'Shopping',
    'Travel',
    'Typescript',
  ];

  findAll(): string[] {
    return this.tags;
  }
}
