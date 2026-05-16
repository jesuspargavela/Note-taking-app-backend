import { IsString, IsArray, IsBoolean } from 'class-validator';

export class NoteDto {
  @IsString()
  readonly id!: string;

  @IsString()
  readonly title!: string;

  @IsArray()
  readonly tags!: string[];

  @IsString()
  readonly content!: string;

  @IsString()
  readonly lastEdited!: string;

  @IsBoolean()
  readonly isArchived!: boolean;
}
