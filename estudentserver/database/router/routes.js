import express from "express";
import { StudentDetail,StudentAddress, SemesterMarks,SubjectDetails,SemesterSubject} from "../../controllers/UserController.js";


const router=express.Router();

router.post('/:RollNo/SubjectDetails', SubjectDetails);
router.get('/:Semester/SemesterSubject', SemesterSubject);
router.post('/:RollNo/StudentDetail', StudentDetail);
router.post('/:RollNo/StudentAddress', StudentAddress);
router.post('/:RollNo/SemesterMarks', SemesterMarks);

export default router;
