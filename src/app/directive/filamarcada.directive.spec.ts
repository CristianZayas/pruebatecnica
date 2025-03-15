// src/app/directive/filamarcada.directive.spec.ts
import { FilamarcadaDirective } from './filamarcada.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('FilamarcadaDirective', () => {
  let directive: FilamarcadaDirective;
  let mockElementRef: jasmine.SpyObj<ElementRef>;
  let mockRenderer: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    mockElementRef = jasmine.createSpyObj('ElementRef', [], { nativeElement: document.createElement('div') });
    mockRenderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass', 'setStyle']);

    directive = new FilamarcadaDirective(mockElementRef, mockRenderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  // Aquí puedes agregar más pruebas específicas para tu directiva
});
