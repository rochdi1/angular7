import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  
  balance: number = 0;
  clients = [];
  searchClients= [];
  client: Client =  {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    balance: 0,
    active: false
  }
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.recupClient();
  }

  recupClient() {
    this.clientService.getClients().subscribe((res: any[]) => {
      this.searchClients = this.clients = res
      this.totalBalance();
      console.log(res);
    });
  }

  toggleActive(id, myActive) {

    this.clientService.setActive(id, myActive)
    .then((res) => console.log(res))
    .catch((error) => console.error(error.message))

  }

  search(query) {
  this.searchClients =  this.clients.filter((client) => client.firstName.toLowerCase().includes(query) || client.lastName.toLowerCase().includes(query));
  this.totalBalance()
  }


  totalBalance() {
     this.balance = this.searchClients.reduce((total, client) => {
      return total + client.balance;
     }, 0)
  }

}
