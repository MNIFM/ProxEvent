import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {


constructor(private httpClient: Httpng serveClient) { }

    createEvent() {
      this.httpClient
      .put('http://localhost:8080/api/events', {
  'id' : 1,
  'title' : 'test',
  'description' : 'test',
  'agency' : null,
  'orgnaizor' : null,
  'beginningTime' : null,
  'endingTime' : null,
  'endTime' : 1,
  'maxSubscriptions' : 1,
  'startTime' : 1,
  'inscriptionLimitTime' : null,
  'maxParticipants' : null,
  'participants' : [ ],
  'eventStatus' : null,
  'comments' : [ ],
  'photos' : [ ]
} )
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

    }
}
