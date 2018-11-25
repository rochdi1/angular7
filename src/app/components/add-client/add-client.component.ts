import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  addClient(f) {

    if(f.valid) {
      
      this.clientService.persistClient(f.value)
          .then((res: any) => {
              this.router.navigate(['/clients']);
          })
          .catch((error) => console.error(error.message));

    }else {
      alert('form is invalid')
    }
  
  }

}
