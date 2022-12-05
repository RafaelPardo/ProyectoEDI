import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
    getEmployees() {
        return [{
        id: 1,
        name: 'Rafael'
    },
    {
        id: 2,
        name: 'Juan'
    },
    {
        id: 3,
        name: 'Miguel'
    }]
    }
}