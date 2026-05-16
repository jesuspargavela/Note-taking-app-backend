import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { NoteDto } from '@/dtos/note/note/note';
import { CreateNoteDto } from '@/dtos/note/create-note/create-note';
import { UpdateNoteDto } from '@/dtos/note/update-note/update-note';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(): NoteDto[] {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): NoteDto {
    return this.notesService.findOne(id);
  }

  @Post()
  @HttpCode(204)
  create(@Body() createNoteDto: CreateNoteDto): void {
    this.notesService.create(createNoteDto);
  }

  @Put(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto): void {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string): void {
    this.notesService.delete(id);
  }
}
