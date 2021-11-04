import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FileUploadService } from "../../service/file-upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  title: string;

  form: FormGroup;

  uploadIcon = faFileUpload;
  filename: string;

  private file: any;

  constructor(private router: Router, private fb: FormBuilder, private fileUploadService: FileUploadService) {
    this.form = this.fb.group({
      'fileUpload': new FormControl()
    });
  }

  ngOnInit() {
  }

  submit() {
    this.fileUploadService.upload(this.file)
      .subscribe(job => {
        this.redirectToSummary();
      }, () => {
        console.log("Failed to upload file")
      });
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    this.filename = this.file.name;
  }

  redirectToSummary() {
    this.router.navigate(['/summary']);
  }
}
