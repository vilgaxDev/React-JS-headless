export interface ICustomers {
    id: string;
    Name: string;
    Location: string;
    Phone_number: string;
    City: string;
    Email: string; 
    Date_of_creation: Date;
    Created_by:string;
    Product:string;
    Gender:string;
}
export interface ITeamlead {
    id:string;
    Name: string;
    Annual_earning: string;
    Phone_number:string;
    createdby: ICustomers[];
    Date: Date;
    photo: any;
    
}