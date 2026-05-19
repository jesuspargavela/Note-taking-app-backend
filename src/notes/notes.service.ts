/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Note } from './notes.model';

import { CreateNoteDto } from '@/notes/dtos/note/create-note/create-note';
import { UpdateNoteDto } from '@/notes/dtos/note/update-note/update-note';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note) private noteModel: typeof Note) { }

  async findAll(): Promise<Note[]> {
    return await this.noteModel.findAll();
  }

  async findOne(id: string): Promise<Note> {
    const note = await this.noteModel.findByPk(id);
    if (!note) throw new NotFoundException('Note with id: ' + id + ' not found');
    return note;
  }

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    return this.noteModel.create({
      ...createNoteDto,
      lastEdited: new Date(createNoteDto.lastEdited),
    });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note = await this.noteModel.findByPk(id);
    if (!note) throw new NotFoundException('Note with id: ' + id + ' not found');
    return note.update({
      ...updateNoteDto,
      lastEdited: updateNoteDto.lastEdited
        ? new Date(updateNoteDto.lastEdited)
        : note.lastEdited,
    });
  }

  async delete(id: string): Promise<void> {
    const note = await this.noteModel.findByPk(id);
    if (!note) throw new NotFoundException('Note with id: ' + id + ' not found');
    await note.destroy();
  }
}
