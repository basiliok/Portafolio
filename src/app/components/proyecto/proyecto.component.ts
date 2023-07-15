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

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {//throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.changeAttribute();
    //console.log("link: "+this.link_preview);
    //throw new Error('Method not implemented.');
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
  @Output() proyectoEvent = new EventEmitter<number>(); // output : 1

  changeAttribute(): void{
    if(this.link_preview === undefined){
      this.renderer.setAttribute(this.elemento_ojo.nativeElement, 'class', 'icon_muerto');
      this.renderer.removeAttribute(this.elemento_preview.nativeElement, 'href');
      //this.renderer.removeAttribute(this.elemento_code.nativeElement, 'href');
    }    
  }

  emitirNumeroProy(): void{ // output : 2
    this.proyectoEvent.emit(this.number_proyect);
    //console.log("numero de proyecto: "+this.number_proyect);
  }

}
