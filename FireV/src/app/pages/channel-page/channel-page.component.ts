import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UpdateComponent } from 'src/app/components/update/update.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.scss']
})
export class ChannelPageComponent implements OnInit {
  form!: FormGroup;
  constructor(public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {
  }


  openAddPage(){
     this.router.navigate(['/add_page']);
  }
}
