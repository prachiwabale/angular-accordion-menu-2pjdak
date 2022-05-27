import { Component } from '@angular/core';
import { Config, Menu } from './accordion/types';

@Component({
  selector: 'my-app',
  template: `
    <h1>Accordion Menu</h1>
    <accordion 
      [options]="options" 
      [menus]="menus">
    </accordion>.

  `,
})
export class AppComponent {
  // signle open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Getting Started',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },
    {
      name: 'Participent',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },

    {
      name: 'Invoices',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },

    {
      name: 'Accounts',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },
    {
      name: 'Administration Guide',
      active: false,
      submenu: [
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
        {
          question: 'What is Angular Accordion',
          answer:
            'The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page.',
        },
      ],
    },
  ];
}
