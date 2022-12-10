import { IsBoolean, IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  public name: string;

  @IsString()
  public author: string;

  @IsNumber()
  public edition: string;

  @IsBoolean()
  public available: boolean;
}
