import { IsDefined, IsString } from 'class-validator';

export class CreateOwnerDto {
  @IsString()
  @IsDefined()
  fullName: string;

  business: boolean;
}
