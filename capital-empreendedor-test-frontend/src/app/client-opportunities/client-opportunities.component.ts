import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Opportunity } from '../opportunity';

@Component({
  selector: 'app-client-opportunities',
  templateUrl: './client-opportunities.component.html',
  styleUrls: ['./client-opportunities.component.scss']
})
export class ClientOpportunitiesComponent implements OnInit {
  client: Client;
  opportunities: Opportunity[] = [];
  opp = false;

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
    .get('email').replace(' ', ''); // Formatando o nome do cliente para não ter espaços e se adequar ao url

    this.clientService.getOne(email)
    .subscribe(result => this.client = result);
  }

  getOpportunities(client: Client) {
    this.clientService.getOpportunities(this.client)
      .subscribe(opportunities => {
        this.opportunities = opportunities;
      } );
  }

  toggleOpportunities(): void {
    this.opp = !this.opp;
    if (this.opp){
      this.getOpportunities(this.client);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
