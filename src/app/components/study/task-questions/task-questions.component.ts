import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploadService } from 'src/app/services/upload.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';
import { StagesService } from 'src/app/services/stages.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-questions',
  templateUrl: './task-questions.component.html',
  styleUrls: ['./task-questions.component.css']
})
export class TaskQuestionsComponent implements OnInit {

  taskQuestionForm: FormGroup;
  questionnaires: any = [];
  images: any = [];

  constructor( private fb: FormBuilder, public dialogRef: MatDialogRef<TaskQuestionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private uploadService: UploadService, private qsService: QuestionnairesService, 
    private stageService: StagesService, private router: Router) { }

  ngOnInit() {
    this.taskQuestionForm = this.fb.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      time: [-1, Validators.compose([Validators.required, Validators.min(-1)])],
      avatarImage: ['', Validators.required],
      questionnaire: ['', Validators.required],
      stage: ['', Validators.required]
    });
    this.uploadService.getImages().subscribe(
      res => {
        this.images = res['images']        
      }
    );
    this.qsService.getMyQuestionnaires().subscribe(
      res => {
        this.questionnaires = res['questionnaires']
      }
    );
    if(this.data.isEdit){
      this.loadStage(this.data.stage);
      if(this.data.stage.user != localStorage.getItem('userId')){
        this.data.isEdit = false;
      }
    }
  }

  loadStage(stage){
    this.taskQuestionForm.controls['id'].setValue(stage.id);
    this.taskQuestionForm.controls['time'].setValue(stage.time);
    this.taskQuestionForm.controls['avatarImage'].setValue(stage.avatarImage);
    this.taskQuestionForm.controls['questionnaire'].setValue(stage.questionnaire);
    this.taskQuestionForm.controls['stage'].setValue(stage.stage);
  }

  save(){
    let taskQObj = this.taskQuestionForm.value;
    taskQObj['state'] = this.data.typeName;
    taskQObj['type'] = "stage";
    taskQObj['user'] = localStorage.getItem('userId');
    if(this.data.isEdit){
      this.editStage(this.data.stage, taskQObj);
    } else{
      this.saveNewStage(taskQObj);
    }
  }

  saveNewStage(obj){
    this.stageService.newStage(obj).subscribe(
      res => {
        this.dialogRef.close(res['stage']);
      },
      err => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error en el servidor'
        });
        this.dialogRef.close();
      }
    );
  }

  editStage(old, newObj){
    this.stageService.editStage(old._id, newObj).subscribe(
      res => {
        this.dialogRef.close(res['stage']);
      },
      err => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Error en el servidor'
        });
        this.dialogRef.close();
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  newQuestionnaire(){
    this.router.navigate(['/test']);
    this.dialogRef.close();
  }

  newImage(){
    this.router.navigate(['/template']);
    this.dialogRef.close();
  }

}
