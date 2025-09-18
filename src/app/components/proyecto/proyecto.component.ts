import { Component, Input, Renderer2, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit, AfterViewInit{

  @ViewChild('ePreview') elemento_preview: ElementRef;
  @ViewChild('eCode') elemento_code: ElementRef;
  @ViewChild('eOjo') elemento_ojo: ElementRef;
  @ViewChild('eContainer') elemento_container: ElementRef;

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.updatePreviewAttributes();
    this.updateBackgroundColor();
  }

  @Input() number_proyect: number;
  @Input() image_start: string;
  @Input() title: string;
  @Input() description: string;
  @Input() tasks: string[];
  @Input() technologies: string;
  @Input() link_preview: string;
  @Input() link_github: string;
  @Input() duration: string;
  @Input() finish_date: string;
  @Input() background_color: number;
  @Output() proyectoEvent = new EventEmitter<number>(); // pasos output : 1

  updatePreviewAttributes(): void{
    if(this.link_preview === undefined){
      this.renderer.setAttribute(this.elemento_ojo.nativeElement, 'class', 'icon_muerto');
      this.renderer.removeAttribute(this.elemento_preview.nativeElement, 'href');
    }
  }

  updateBackgroundColor(): void {
    if(this.background_color === 1){
      this.renderer.addClass(this.elemento_container.nativeElement, 'bg-1');
    } else if(this.background_color === 2){
      this.renderer.addClass(this.elemento_container.nativeElement, 'bg-2');
    }
  }

  emitirNumeroDeProyectoParaAbrirModal(): void{ // pasos output : 2
    this.proyectoEvent.emit(this.number_proyect);
  }
}
