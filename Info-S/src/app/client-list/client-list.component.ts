import {Component, OnInit} from '@angular/core';
import {Client} from '../client';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  selectedClient: Client;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    return this.http.get('assets/Data/clients.json')
      .subscribe(data => {
        this.clients = data as Array<Client>;
      });
  }
  onSelect(client: Client): void {
    this.selectedClient = client;
  }
}
