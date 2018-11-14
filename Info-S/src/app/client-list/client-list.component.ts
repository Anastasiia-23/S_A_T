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
  copyClients: Client[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    return this.http.get('assets/Data/clients.json')
      .subscribe(data => {
        this.clients = data as Array<Client>;
        this.copyClients = data as Array<Client>;
      });
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
  }

  onSearchChange(searchText: string): void {
    if (searchText) {
      this.clients = this.copyClients.filter(client =>
        client.general.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        client.general.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        client.address.city.toLowerCase().includes(searchText.toLowerCase()) ||
        client.address.country.toLowerCase().includes(searchText.toLowerCase()) ||
        client.address.street.toLowerCase().includes(searchText.toLowerCase()) ||
        client.address.zipCode.toLowerCase().includes(searchText.toLowerCase()) ||
        client.contact.email.toLowerCase().includes(searchText.toLowerCase()) ||
        client.contact.phone.toLowerCase().includes(searchText.toLowerCase()) ||
        client.job.company.toLowerCase().includes(searchText.toLowerCase()) ||
        client.job.title.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      this.assignCopy();
    }
  }

  assignCopy() {
    this.clients = Object.assign([], this.copyClients);
  }
}
