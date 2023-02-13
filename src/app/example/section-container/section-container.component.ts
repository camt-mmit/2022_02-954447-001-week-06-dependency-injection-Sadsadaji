import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createInput, InputContainerComponent, InputType } from '../input-container/input-container.component';

export type SectionType = InputType[];

export function createSection(): SectionType {
  return [createInput()];
}



@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule , InputContainerComponent],
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent {
  @Input() no! : number;
  @Input() data!: SectionType;
  @Input() removeable: boolean = true;


  @Output() remove = new EventEmitter<void>();
  @Output() dataChanged = new EventEmitter<SectionType | null>();

  ngOnInit() : void {
    if (!this.data || !this.no)
    throw new Error("Value an no propertise must be speficied");

  }

  removeChild(index: number): void {
    this.data.splice(index, 1);

  }
  onAdd(): void {
    this.data.push(createInput());
    this.dataChanged.emit(this.data)
  }



  removeSec(): void {
    this.remove.emit();
    this.dataChanged.emit(null);
  }

  onChnaged(): void {
    this.dataChanged.emit(this.data);
  }

}
