import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploadService } from 'src/app/services/upload.service';
import { StagesService } from 'src/app/services/stages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorialForm: FormGroup;
  images: any = [];

  constructor( private fb: FormBuilder, public dialogRef: MatDialogRef<TutorialComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private uploadService: UploadService, private stageService: StagesService) { }

  ngOnInit() {
    this.tutorialForm = this.fb.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      time: [-1, Validators.compose([Validators.required, Validators.min(-1)])],
      slides: ['', Validators.required],
      stage: ['', Validators.required]
    });
    this.uploadService.getImages().subscribe(
      res => {
        this.images = res['images']        
      }
    );
    if(this.data.isEdit){
      this.loadStage(this.data.stage);
    }
  }

  loadStage(stage){
    this.tutorialForm.controls['id'].setValue(stage.id);
    this.tutorialForm.controls['time'].setValue(stage.time);
    this.tutorialForm.controls['slides'].setValue(stage.slides);
    this.tutorialForm.controls['stage'].setValue(stage.stage);
  }
  
  save(){
    let tutorialObj = this.tutorialForm.value;
    tutorialObj['state'] = this.data.typeName;
    tutorialObj['type'] = "stage";
    tutorialObj['user'] = localStorage.getItem('userId');
    if(this.data.isEdit){
      this.editStage(this.data.stage, tutorialObj);
    } else{
      this.saveNewStage(tutorialObj);
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

}