export interface SupportTicket {

    ticketID: string; 
  
    customerID: string;
  
    priority: string;
  
    created: Date;
  
    assignedAgent: string;
  
    issueDescription: string; 

    status: string;
  
}

export function getMockSupportTicket(): SupportTicket {
    return {
        ticketID: 'TICKET12345',
        customerID: '1243',
        priority: 'High',
        created: new Date(),
        assignedAgent: 'Agent001',
        issueDescription: 'Sample issue description for testing.',
        status: 'Open'
    };
}