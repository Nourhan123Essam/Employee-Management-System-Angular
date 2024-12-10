export class ClientProject{
  clientProjectId: number;
  projectName: string;
  startDate: string;
  expectedEndDate: string;
  leadByEmplId: string;
  completedDate: string;
  contactPerson: string;
  contactPersonContactNo: string;
  totalEmpWorking: string;
  projectCost: string;
  projectDetails: string;
  contactPersonEmailId: string;
  clientId: number; // This is the foreign key for the client

  constructor(){
    this.totalEmpWorking = '';
    this.clientId = 0;
    this.projectCost = "";
    this.projectDetails = "";
    this.contactPersonEmailId = "";
    this.projectName = "";
    this.startDate = "";
    this.expectedEndDate = "";
    this.leadByEmplId = "";
    this.clientProjectId = 0;
    this.completedDate = "";
    this.contactPerson = "";
    this.contactPersonContactNo = "";
  }
}
