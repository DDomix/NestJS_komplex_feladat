import { IsDefined, IsInt, IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsDefined()
  @IsInt()
  accountNumber: string;

  @IsNotEmpty()
  @IsDefined()
  @IsInt()
  balance: number;
}
