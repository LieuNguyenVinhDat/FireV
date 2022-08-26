import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { UpdateComponent } from 'src/app/components/update/update.component';
import {MatDialog} from '@angular/material/dialog';
import { Video } from 'src/app/models/video.models';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  form!: FormGroup;
  constructor(public dialog: MatDialog,private router: Router) {
   }

  ngOnInit(): void {
  }
  // openDialog1() {
  //   const dialogRef = this.dialog.open(UpdateComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
    //this.dialog.open(UpdateComponent);

  // openDialogUpdate() {
  //   const dialogRef = this.dialog.open(UpdateComponent, {

  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  openAddPage(){
    this.router.navigateByUrl('/channel_page/add');
 }
}
