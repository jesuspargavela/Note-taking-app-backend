import * as sequelize from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'notes' })
export class Note extends Model<sequelize.InferAttributes<Note>, sequelize.InferCreationAttributes<Note>> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: sequelize.CreationOptional<string>;

  @Column(DataType.TEXT)
  title!: string;

  @Column(DataType.JSON)
  tags!: string[];

  @Column(DataType.TEXT)
  content!: string;

  @Column(DataType.DATE)
  lastEdited!: Date;

  @Column({ defaultValue: false })
  isArchived!: boolean;
}