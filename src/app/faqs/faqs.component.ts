import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  animations: [
    trigger('slideToggle', [
      state('open', style({
        height: '*',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class FaqsComponent {
  openIndex: number | null = null;

  faqs = [
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    },
    { 
      question: 'Lorem ipsum dolor sit amet?', 
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue magna ut commodo consequat. Proin suscipit rutrum turpis et viverra. Vestibulum at interdum dolor. Duis at malesuada lectus. Donec eget faucibus sem. Nulla suscipit mollis sapien pellentesque malesuada. Maecenas et nisl ac nisl tempor rutrum id vel odio. Proin non tellus elementum, tempus purus eget, feugiat mauris.' 
    }
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
