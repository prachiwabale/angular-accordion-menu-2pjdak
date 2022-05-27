import { analyzeAndValidateNgModules } from '@angular/compiler/src/aot/compiler';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { container } from '@angular/core/src/render3/instructions';
import { Config, Menu } from './types';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() options;
  @Input() menus: Menu[];
  config: Config;
  profilePanelStatus: boolean;
  @ViewChild('accordionParent', { static: false }) accordionParent: ElementRef;

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      multi: true,
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus
        .filter((menu, i) => i !== index && menu.active)
        .forEach((menu) => (menu.active = !menu.active));
    }

    this.menus[index].active = !this.menus[index].active;
  }

  toggleSection(e: any, i: number) {
    var allGroups = [];
    allGroups =
      this.accordionParent.nativeElement.getElementsByClassName(
        'hidden-content'
      );
    for (var j = 0; j < allGroups.length; j++) {
      if (
        i === j &&
        !e.target.parentElement
          .querySelector('.hidden-content')
          .classList.contains('show-content')
      ) {
        e.target.parentElement
          .querySelector('.hidden-content')
          .classList.add('show-content');
      } else {
        allGroups[j].classList.remove('show-content');
      }
    }
  }
}
