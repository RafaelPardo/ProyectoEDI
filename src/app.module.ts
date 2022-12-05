import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, EmployeesController],
  providers: [AppService, ProductsService, EmployeesService],
})
export class AppModule {}
