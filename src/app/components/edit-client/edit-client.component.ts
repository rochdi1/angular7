import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
 
  client: Client = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    balance: 0,
    active: false
  }
  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientService) { }
  id: string = "";
  ngOnInit() {
    this.id = this.route.snapshot.params.idClient;
    console.log(this.id)
    this.editClient(this.id);
  }

  editClient(id) {
    this.clientService.getOneClient(id).subscribe((client: Client) => {
      this.client = client;
      console.log(client)
    })
  } 


  updateClient(f) {
    f.value.id = this.id;
    this.clientService.setClient(f.value)
        .then((res) => {
          console.log(res);
          this.router.navigate(['/clients']);
        })
        .catch((error) => console.error(error.message))
  }

}
