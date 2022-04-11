import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import {ICollectionData} from "../../../models/search-response.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {TablesHelper} from "../../../static/tables.helper";
import {Order} from "../../../models/order.model";
import {detailExpand} from "../../../../core/animations/table.animations";

@Component({
  selector: 'st-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  animations: [detailExpand]
})
export class OrdersTableComponent implements AfterViewInit {
  @Input() set orders(value: ICollectionData<Order>) {
    this.ordersData = value;
    this.dataSource.data = value?.data || [];
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() favChanged = new EventEmitter<Order>();

  public ordersData: ICollectionData<Order>;
  public columnsToDisplay: string[] = ['orderName', 'orderNum', 'status', 'creationDate', 'actions'];
  public expandedElement: Order | null;
  public dataSource = new MatTableDataSource<Order>();
  public pageSizeOptions = TablesHelper.pageSizeOptions;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public onFavClick(event: MouseEvent, order: Order): void {
    event.stopPropagation();
    event.preventDefault();
    this.favChanged.emit(order);
  }

}
