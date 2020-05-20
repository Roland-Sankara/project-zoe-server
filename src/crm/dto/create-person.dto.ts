import { CivilStatus } from '../enums/civilStatus';
import { Gender } from '../enums/gender';
import { IsDateString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { MinistryCategories } from 'src/services/enums/ministryCategories';


export class CreatePersonDto {

  @IsNotEmpty()
  category: string;
  
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  middleName?: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsEnum(CivilStatus)
  civilStatus: CivilStatus;

  @IsDateString()
  dateOfBirth: Date;
  ageGroup?: string;

  placeOfWork?: string;
  residence?: string;

  cellGroupId?: number;
  churchLocationId?: number;

  @IsEnum(MinistryCategories)
  ministry: MinistryCategories;

  profession: string;

}


