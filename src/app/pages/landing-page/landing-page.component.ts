import { Component, OnInit } from '@angular/core';
import { faTelegramPlane } from '@fortawesome/fontawesome-free-brands';
import {
  faFlask,
  faThumbsUp,
  faDownload,
  faUsers,
  faAward,
  faEdit,
  faCalendar,
  faShare,
  faComments
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faTelegramPlane = faTelegramPlane;
  faDownload = faDownload;
  faFlask = faFlask;
  faThumbsUp = faThumbsUp;
  faUsers = faUsers;
  faAward = faAward;
  faEdit = faEdit;
  faCalendar = faCalendar;
  faShare = faShare;
  faComments = faComments;
  constructor() { }

  ngOnInit() {
  }

}
