import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // openDialogUpdate(item: any) {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     data: item
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }


    add(){
      this.router.navigate(['/add-page']);
    }
}
