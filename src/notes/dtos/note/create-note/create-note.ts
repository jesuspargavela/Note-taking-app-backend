import { IsString, IsArray, IsBoolean, IsDateString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  title!: string;

  @IsArray()
  @IsString({ each: true })
  tags!: string[];

  @IsString()
  content!: string;

  @IsDateString()
  lastEdited!: string;

  @IsBoolean()
  isArchived!: boolean;
}
