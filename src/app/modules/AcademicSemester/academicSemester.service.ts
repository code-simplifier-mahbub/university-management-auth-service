import { AcademicSemester } from './academicSemesterModel';
import { IAcademicSemester } from './academicSemister.interface';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
