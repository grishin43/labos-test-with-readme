import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
    selector: 'st-table-shade',
    templateUrl: './table-shade.component.html',
    styleUrls: ['./table-shade.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableShadeComponent {
    @Input() loading: boolean;
    @Input() noData: boolean;
}
