import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../Model/Class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../Services/client/client.service';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from "../../reusableComponents/my-button/my-button.component";

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  currentData:Date = new Date(); 
  clientObj: Client = new Client();
  ClientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }
  loadClient(){
    this.clientService.getAllClients().subscribe((res:Client[])=>{
       this.ClientList = res;

    });
  }
  onSaveClient(){
    this.clientService.addUpdate(this.clientObj).subscribe((res:Client)=>{
      if(res){
        const message = "Client "+ (this.clientObj.clientId == 0?"Created":"Updated") + " Successfully!";
        alert(message);
        this.loadClient();
        this.clientObj = new Client();
      }
      else{
        alert("error when saving!");
      }
    });
  }

  onDelete(clientId:number){
    const isDelte = confirm("Are you sure want to delete");
    if(isDelte){
      this.clientService.deleteClientById(clientId).subscribe((res:Client)=>{
        if(res){
          alert("Client Deleted Successfully!");
          this.loadClient();
          this.clientObj = new Client();
        }
        else{
          alert("erorr when deleting");
        }
      });
    }
  }

  onEdit(item: Client){
    this.clientObj = item;
  }

  Reset(){
      this.clientObj = new Client();
    }
}
