import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MembersService } from '../services/members.service';
import { Members } from '../../interfaces.interface';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  members: Members[];
  constructor(private memberService: MembersService) { }


  ngOnInit() {
    this.memberService.getMember()
      .subscribe(
        (members: Members[]) => this.members = members,
        (error: Response) => console.log(error)
      );
  }

  onSubmit(form: NgForm){
  	this.memberService.addMember(form.value.name, form.value.roll_no, form.value.post, form.value.photo)
    .subscribe(
      response => console.log(response),
      error =>console.log(error)
    );
  }

}
