import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Opportunity } from '../opportunity';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  opportunities: Opportunity[];
  client: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOne();
  }

  getOne(): void {
    const email = this.route.snapshot.paramMap
    .get('email').replace(' ', '');

    this.clientService.getOne(email)
    .subscribe(client => {
      this.client = client;
      this.getOpportunities(this.client);
    });
  }

  getOpportunities(client: Client) {
    this.clientService.getOpportunities(this.client)
      .subscribe(opportunities => {
        this.opportunities = opportunities;
      } );
  }

  goBack(): void {
    this.location.back();
  }

  saveChanges(): void {
    this.clientService.updateClient(this.client).subscribe();
  }
}
