import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingrediantInput') ingrediantInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    
  }

  onAddIngrediant(event: Event) {
    event.preventDefault();
    
    this.shoppingListService.addIngrediant({
      name: this.ingrediantInput.nativeElement.value,
      amount: this.amountInput.nativeElement.valueAsNumber
    })
  }

}
