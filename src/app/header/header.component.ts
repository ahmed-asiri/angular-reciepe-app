import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() viewChanged = new EventEmitter<{type: string}>(); 

    onViewChange(type) {
        this.viewChanged.emit({ type });
    }
}