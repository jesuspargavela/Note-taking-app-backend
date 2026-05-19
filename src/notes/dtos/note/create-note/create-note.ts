import { IsString, IsArray, IsBoolean, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsArray()
  @IsString({ each: true })
  tags!: string[];

  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsDateString()
  @IsNotEmpty()
  lastEdited!: string;

  @IsBoolean()
  @IsNotEmpty()
  isArchived!: boolean;
}
