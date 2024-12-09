import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../Model/Class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../Services/client/client.service';
import { APIResponseModel } from '../../Model/Interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  ClientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }
  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.ClientList = res.data;
    });
  }
  onSaveClient(){
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        const message = "Client "+ (this.clientObj.clientId == 0?"Created":"Updated") + " Successfully!";
        alert(message);
        this.loadClient();
        this.clientObj = new Client();
      }
      else{
        alert(res.message);
      }
    });
  }

  onDelete(clientId:number){
    const isDelte = confirm("Are you sure want to delete");
    if(isDelte){
      this.clientService.deleteClientById(clientId).subscribe((res:APIResponseModel)=>{
        if(res.result){
          alert("Client Deleted Successfully!");
          this.loadClient();
          this.clientObj = new Client();
        }
        else{
          alert(res.message);
        }
      });
    }
  }

  onEdit(item: Client){
    this.clientObj = item;
  }
}
