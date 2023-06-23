import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/AcademicSemester/academicSemester.route';
// import ApiError from './errors/ApiError'

const app: Application = express();

app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);

// //Testing
// app.get('/', async(req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing Error logger')
// })

//global error handler
app.use(globalErrorHandler);

export default app;
