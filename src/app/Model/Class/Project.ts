export class Project{
  projectId: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  createdAt: Date;
  leaderId: string;
  clientId: number;
  leader: string;
  client: string;
  budget: number; // This is the foreign key for the client


  constructor(){
    this.projectId = 0;
    this.clientId = 0;
    this.name = "";
    this.description = "";
    this.endDate = new Date;
    this.createdAt = new Date;;
    this.startDate = new Date;
    this.leader = "";
    this.leaderId = "";
    this.budget = 0;
    this.client = "";
    this.status = "";
  }
}
